import Redis from 'ioredis';

let redis: Redis | null = null;

export function getRedisClient(): Redis | null {
  if (!redis && process.env.REDIS_URL) {
    try {
      // Use WHATWG URL API to avoid the deprecated url.parse() warning
      const url = new URL(process.env.REDIS_URL);
      redis = new Redis({
        host: url.hostname,
        port: parseInt(url.port || '6379'),
        username: url.username || undefined,
        password: url.password || undefined,
        db: parseInt(url.pathname.replace('/', '') || '0'),
        tls: url.protocol === 'rediss:' ? {} : undefined,
        connectTimeout: 1500,
        maxRetriesPerRequest: 1,
        retryStrategy: (times) => (times > 1 ? null : 200),
      });
    } catch {
      // Fallback to string if URL parsing fails
      redis = new Redis(process.env.REDIS_URL, {
        connectTimeout: 1500,
        maxRetriesPerRequest: 1,
        retryStrategy: (times) => (times > 1 ? null : 200),
      });
    }

    redis.on('error', () => {
      // Suppress unhandled error events when Redis is unreachable locally;
      // callers fall back to data/portfolio.json.
    });
  }
  return redis;
}
