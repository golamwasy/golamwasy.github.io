import Redis from 'ioredis';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

const LIMIT = 3;
const WINDOW = 24 * 60 * 60; // 24 hours in seconds

let redis: Redis | null = null;

function getRedis() {
  if (!redis && process.env.REDIS_URL) {
    redis = new Redis(process.env.REDIS_URL);
  }
  return redis;
}

export async function POST() {
  const client = getRedis();

  // If Redis is not configured, we allow the request (fail-safe)
  if (!client) {
    return NextResponse.json({ success: true, allowed: true });
  }

  try {
    const headersList = await headers();
    const forwarded = headersList.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : '127.0.0.1';
    
    const key = `contact_limit:${ip}`;
    
    const rawData = await client.get(key);
    const record = rawData ? JSON.parse(rawData) as { count: number; resetAt: number } : null;
    
    const now = Math.floor(Date.now() / 1000);
    
    if (record) {
      if (record.count >= LIMIT) {
        return NextResponse.json(
          { 
            success: false,
            error: "Limit reached", 
            resetAt: record.resetAt 
          }, 
          { status: 429 }
        );
      }
      
      const ttl = record.resetAt - now;
      if (ttl > 0) {
        await client.set(key, JSON.stringify({ 
          count: record.count + 1, 
          resetAt: record.resetAt 
        }), 'EX', ttl);
      } else {
        const resetAt = now + WINDOW;
        await client.set(key, JSON.stringify({ count: 1, resetAt }), 'EX', WINDOW);
      }
    } else {
      const resetAt = now + WINDOW;
      await client.set(key, JSON.stringify({ 
        count: 1, 
        resetAt: resetAt 
      }), 'EX', WINDOW);
    }

    return NextResponse.json({ success: true, allowed: true });

  } catch (error) {
    // Fail-safe: allow submission if Redis fails
    return NextResponse.json({ success: true, allowed: true });
  }
}
