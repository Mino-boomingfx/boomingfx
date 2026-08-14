import { NextResponse } from 'next/server';
import defaultContent from '@/data/siteContent.json';

export async function GET() {
  return NextResponse.json(defaultContent);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid content data' }, { status: 400 });
  }
}
