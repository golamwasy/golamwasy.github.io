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

export async function POST(request: Request) {
  const client = getRedis();

  if (!client) {
    return await forwardToWeb3Forms(request);
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

    return await forwardToWeb3Forms(request);

  } catch (error) {
    return await forwardToWeb3Forms(request);
  }
}

async function forwardToWeb3Forms(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        // Kept User-Agent as it's required to prevent Cloudflare from blocking the request
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
      },
      body: JSON.stringify(body),
    });

    const contentType = response.headers.get("content-type");
    
    if (contentType && contentType.includes("application/json")) {
      const result = await response.json();
      return NextResponse.json(result, { status: response.status });
    } else {
      return NextResponse.json({ 
        success: false, 
        message: "External service error"
      }, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Transmission failed" }, { status: 500 });
  }
}
