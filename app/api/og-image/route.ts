import { NextResponse } from 'next/server';
import { JSDOM } from 'jsdom';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 });
  }

  try {
    const response = await fetch(url);
    const html = await response.text();
    const dom = new JSDOM(html);
    const ogImage = dom.window.document.querySelector('meta[property="og:image"]')?.getAttribute('content');

    return NextResponse.json({ ogImage });
  } catch (error) {
    console.error('Error fetching OG image:', error);
    return NextResponse.json({ error: 'Failed to fetch OG image' }, { status: 500 });
  }
}

