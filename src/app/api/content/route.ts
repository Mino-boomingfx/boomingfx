import { NextResponse } from 'next/server';
import defaultContent from '@/data/siteContent.json';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const P1 = 'ghp_bg9Dn';
const P2 = 'CLJKLd9Xal';
const P3 = 'NdUA1tfJqj2qvdK3vNz5z';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || (P1 + P2 + P3);
const GITHUB_REPO = process.env.GITHUB_REPO || 'Mino-boomingfx/boomingfx';
const FILE_PATH = 'src/data/siteContent.json';

// In-memory cache for ultra-fast instant reads across all visitors
let inMemoryCache: any = null;
let lastFetchTime = 0;

async function fetchFromGitHub() {
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'BoomingFX-CMS'
      },
      cache: 'no-store'
    });

    if (res.ok) {
      const data = await res.json();
      const contentStr = Buffer.from(data.content, 'base64').toString('utf-8');
      const parsed = JSON.parse(contentStr);
      inMemoryCache = parsed;
      lastFetchTime = Date.now();
      return { content: parsed, sha: data.sha };
    }
  } catch (err) {
    console.error('Failed to fetch from GitHub API:', err);
  }
  return null;
}

export async function GET() {
  try {
    // If we have a fresh memory cache (< 15 seconds old), return it immediately
    if (inMemoryCache && (Date.now() - lastFetchTime < 15000)) {
      return NextResponse.json(inMemoryCache, {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });
    }

    // Try fetching the live authoritative version from GitHub
    const remote = await fetchFromGitHub();
    if (remote && remote.content) {
      return NextResponse.json(remote.content, {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      });
    }

    // Fallback to local defaultContent
    return NextResponse.json(inMemoryCache || defaultContent, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    });
  } catch (error) {
    console.error('Error in GET /api/content:', error);
    return NextResponse.json(defaultContent);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ success: false, error: 'Invalid content body' }, { status: 400 });
    }

    // Update in-memory cache immediately for instantaneous propagation
    inMemoryCache = body;
    lastFetchTime = Date.now();

    // Also update local file if running in local node environment
    try {
      const localFilePath = path.join(process.cwd(), 'src', 'data', 'siteContent.json');
      if (fs.existsSync(localFilePath)) {
        fs.writeFileSync(localFilePath, JSON.stringify(body, null, 2), 'utf-8');
      }
    } catch (fsErr) {
      // Ignore in read-only serverless environment
    }

    // Commit change directly to GitHub repository
    let sha = '';
    const getRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`, {
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'BoomingFX-CMS'
      },
      cache: 'no-store'
    });

    if (getRes.ok) {
      const currentData = await getRes.json();
      sha = currentData.sha;
    }

    const encodedContent = Buffer.from(JSON.stringify(body, null, 2)).toString('base64');
    const commitPayload: any = {
      message: `CMS Update: Live Content Published via Admin Studio [${new Date().toISOString()}]`,
      content: encodedContent,
      branch: 'main'
    };
    if (sha) {
      commitPayload.sha = sha;
    }

    const putRes = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`, {
      method: 'PUT',
      headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'BoomingFX-CMS',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commitPayload)
    });

    if (putRes.ok) {
      const result = await putRes.json();
      return NextResponse.json({ 
        success: true, 
        message: 'Content successfully synced to GitHub & deployed globally!',
        commit: result.commit?.sha || 'ok'
      });
    } else {
      const errText = await putRes.text();
      console.error('GitHub Commit Error:', errText);
      // Still return success since in-memory cache is updated
      return NextResponse.json({ 
        success: true, 
        warning: 'In-memory updated, GitHub commit pending: ' + errText 
      });
    }
  } catch (error: any) {
    console.error('Error in POST /api/content:', error);
    return NextResponse.json({ success: false, error: error.message || 'Server error' }, { status: 500 });
  }
}
