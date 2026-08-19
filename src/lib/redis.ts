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
        // Automatically handle TLS if the protocol is rediss://
        tls: url.protocol === 'rediss:' ? {} : undefined,
      });
    } catch {
      // Fallback to string if URL parsing fails
      redis = new Redis(process.env.REDIS_URL);
    }
  }
  return redis;
}
