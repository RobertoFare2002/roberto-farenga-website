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

  const res = NextResponse.json({ ok: true });
  res.cookies.set("projects_access", "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 giorni
  });
  return res;
}
