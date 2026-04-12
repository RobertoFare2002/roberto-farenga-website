import { NextResponse } from "next/server";
import { cookies } from "next/headers";

/** GET — check if session cookie is valid */
export async function GET() {
  const expected = process.env.PROJECTS_ACCESS_CODE;
  if (!expected) {
    return NextResponse.json({ unlocked: false });
  }
  const cookieStore = await cookies();
  const token = cookieStore.get("projects_access");
  return NextResponse.json({ unlocked: token?.value === expected });
}

/** POST — validate code and set session cookie */
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
  res.cookies.set("projects_access", expected, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });
  return res;
}
