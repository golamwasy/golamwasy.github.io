// Pushes data/portfolio.json into Redis under the "portfolio" key.
// Run with: REDIS_URL=redis://... node scripts/seed-portfolio.mjs
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import Redis from 'ioredis';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const redisUrl = process.env.REDIS_URL;
if (!redisUrl) {
  console.error('REDIS_URL is not set.');
  process.exit(1);
}

const filePath = path.join(__dirname, '..', 'data', 'portfolio.json');
const data = readFileSync(filePath, 'utf8');
JSON.parse(data); // validate before writing

const url = new URL(redisUrl);
const redis = new Redis({
  host: url.hostname,
  port: parseInt(url.port || '6379'),
  username: url.username || undefined,
  password: url.password || undefined,
  db: parseInt(url.pathname.replace('/', '') || '0'),
  tls: url.protocol === 'rediss:' ? {} : undefined,
});

await redis.set('portfolio', data);
console.log('Seeded "portfolio" key in Redis.');
await redis.quit();
