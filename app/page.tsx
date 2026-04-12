import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";
import { CONTACT } from "@/app/lib/constants";

export default function Home() {
  const hasPhoto = fs.existsSync(
    path.join(process.cwd(), "public", "profile.jpg")
  );

  return (
    <main>
      <div className="w-full max-w-lg mx-auto flex flex-col items-center text-center">

        {/* ── Avatar ────────────────────────────────── */}
        <div
          className="anim-fade-in mt-10 sm:mt-16 w-20 h-20 rounded-full overflow-hidden border border-slate-200 bg-slate-100 flex items-center justify-center shrink-0"
          style={{ animationDelay: "0ms" }}
        >
          {hasPhoto ? (
            <Image
              src="/profile.jpg"
              alt="Roberto Farenga"
              width={80}
              height={80}
              className="object-cover w-full h-full"
              priority
            />
          ) : (
            <span className="title-serif text-slate-400 text-lg font-semibold select-none">
              RF
            </span>
          )}
        </div>

        {/* ── Name ─────────────────────────────────── */}
        <h1
          className="anim-fade-up title-serif mt-5 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight"
          style={{ animationDelay: "80ms" }}
        >
          Roberto Farenga
        </h1>

        {/* ── Decorative line ──────────────────────── */}
        <div
          className="anim-line mt-5 h-px bg-slate-300"
          style={{ animationDelay: "220ms" }}
        />

        {/* ── Role ─────────────────────────────────── */}
        <p
          className="anim-fade-up mt-4 text-xs tracking-widest text-slate-400 uppercase font-medium"
          style={{ animationDelay: "280ms" }}
        >
          MSc Banking &amp; Finance · Università Cattolica, Milan
        </p>

        {/* ── Bio ──────────────────────────────────── */}
        <p
          className="anim-fade-up mt-5 text-sm text-slate-600 leading-relaxed max-w-sm"
          style={{ animationDelay: "340ms" }}
        >
          Finance student with experience in treasury and ALM at{" "}
          <span className="font-semibold text-slate-800">Intesa Sanpaolo</span>{" "}
          and M&amp;A advisory at{" "}
          <span className="font-semibold text-slate-800">Epyon Vivida</span>.
          Interested in corporate finance, econometrics and capital markets.
        </p>

        {/* ── CTAs ─────────────────────────────────── */}
        <div
          className="anim-fade-up mt-8 flex flex-wrap justify-center gap-3"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="/cv.pdf"
            className="rounded-full bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white hover:bg-slate-700 active:scale-95 transition-all"
          >
            Download CV
          </a>
          <Link
            href="/projects"
            className="rounded-full border border-slate-200 px-6 py-2.5 text-xs font-semibold text-slate-800 hover:border-slate-400 hover:bg-slate-50 active:scale-95 transition-all"
          >
            View Projects →
          </Link>
        </div>

        {/* ── Contact links ────────────────────────── */}
        <div
          className="anim-fade-up mt-5 flex justify-center gap-6"
          style={{ animationDelay: "460ms" }}
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-[11px] text-slate-400 hover:text-slate-700 transition-colors"
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[11px] text-slate-400 hover:text-slate-700 transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>

        {/* ── Divider ──────────────────────────────── */}
        <div
          className="anim-fade-in mt-14 sm:mt-20 w-full border-t border-slate-100"
          style={{ animationDelay: "520ms" }}
        />

        {/* ── Navigation cards ─────────────────────── */}
        <div
          className="anim-fade-up mt-8 w-full grid grid-cols-2 gap-3 pb-2"
          style={{ animationDelay: "580ms" }}
        >
          <Link
            href="/projects"
            className="group rounded-2xl border border-slate-200 p-5 text-left transition-all duration-200 hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5"
          >
            <p className="text-[10px] tracking-widest font-semibold text-slate-400 uppercase">
              Projects
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              DCF, thesis &amp; econometrics
            </p>
            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              4 works · PDF access
            </p>
            <p className="mt-4 text-xs text-slate-500 group-hover:text-slate-900 transition-colors">
              View →
            </p>
          </Link>

          <Link
            href="/cv"
            className="group rounded-2xl border border-slate-200 p-5 text-left transition-all duration-200 hover:border-slate-300 hover:shadow-sm hover:-translate-y-0.5"
          >
            <p className="text-[10px] tracking-widest font-semibold text-slate-400 uppercase">
              CV
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Education &amp; experience
            </p>
            <p className="mt-1 text-xs text-slate-400 leading-relaxed">
              Cattolica · ISP · Epyon
            </p>
            <p className="mt-4 text-xs text-slate-500 group-hover:text-slate-900 transition-colors">
              View →
            </p>
          </Link>
        </div>

      </div>
    </main>
  );
}
