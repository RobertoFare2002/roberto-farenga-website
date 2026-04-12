import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import path from "path";
import fs from "fs/promises";

export async function POST(req: Request) {
  const expected = process.env.PROJECTS_ACCESS_CODE;
  if (!expected) {
    return NextResponse.json({ ok: false, error: "Missing env var" }, { status: 500 });
  }

  // Accept either a valid session cookie or a code in the body
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("projects_access");
  const cookieAuth = sessionToken?.value === expected;

  const body = await req.json();
  const { file, code } = body;

  if (!cookieAuth && code !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  if (!file || typeof file !== "string") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Whitelist: only pdf, no path traversal
  if (!/^[a-zA-Z0-9._-]+\.pdf$/.test(file)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "private_files", file);

  try {
    const data = await fs.readFile(filePath);
    return new NextResponse(data, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${file}"`,
      },
    });
  } catch {
    return NextResponse.json({ ok: false, error: "File not found" }, { status: 404 });
  }
}
