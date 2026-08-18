import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const ADMIN_MASTER_PASSWORD = process.env.ADMIN_PASSWORD || 'mino_boomingfx12??';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { password } = body;

    if (!password) {
      return NextResponse.json({ success: false, error: 'Password is required' }, { status: 400 });
    }

    if (password === ADMIN_MASTER_PASSWORD) {
      return NextResponse.json({ success: true, message: 'Authenticated successfully' });
    }

    return NextResponse.json({ success: false, error: 'Incorrect master password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
