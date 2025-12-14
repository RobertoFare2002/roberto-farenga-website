import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { code } = await request.json();
  const expected = process.env.PROJECTS_ACCESS_CODE;

  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "Missing PROJECTS_ACCESS_CODE env var" },
      { status: 500 }
    );
  }

  if (code !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  // ✅ codice corretto, ma NON salviamo nulla
  return NextResponse.json({ ok: true });
}
