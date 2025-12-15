import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

export async function POST(req: Request) {
  const { file, code } = await req.json();

  const expected = process.env.PROJECTS_ACCESS_CODE;
  if (!expected) {
    return NextResponse.json({ ok: false, error: "Missing env var" }, { status: 500 });
  }

  if (code !== expected) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  if (!file || typeof file !== "string") {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // ✅ Whitelist semplice: solo pdf, niente path traversal
  if (!/^[a-zA-Z0-9._-]+\.pdf$/.test(file)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "private_files", file);

  try {
    const data = await fs.readFile(filePath);

    return new NextResponse(data, {
      headers: {
        "Content-Type": "application/pdf",
        // inline = apre in tab; attachment = forza download
        "Content-Disposition": `inline; filename="${file}"`,
      },
    });
  } catch {
    return NextResponse.json({ ok: false, error: "File not found" }, { status: 404 });
  }
}
