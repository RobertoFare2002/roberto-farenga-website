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
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">

        {/* Background layers */}
        <div className="absolute inset-0 bg-[#0a0f1c]" />

        {/* Radial accent glow — right side */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_80%_at_80%_40%,rgba(201,169,110,0.10)_0%,transparent_60%)]" />

        {/* Subtle noise grain */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
        />

        {/* Photo — right half, desktop only */}
        {hasPhoto && (
          <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden sm:block">
            <Image
              src="/profile.jpg"
              alt="Roberto Farenga"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Fade gradient over photo left edge */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c] via-[#0a0f1c]/50 to-transparent" />
            {/* Fade gradient over photo bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent" />
          </div>
        )}

        {/* Photo — mobile top */}
        {hasPhoto && (
          <div className="absolute top-0 left-0 right-0 h-[55vh] sm:hidden">
            <Image
              src="/profile.jpg"
              alt="Roberto Farenga"
              fill
              className="object-cover object-[center_top]"
              priority
            />
            {/* Strong fade at bottom so text is readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-[#0a0f1c]/70 via-70% to-[#0a0f1c]" />
          </div>
        )}

        {/* Content */}
        <div className={`relative z-10 w-full px-5 sm:px-16 pb-14 sm:pb-24 ${hasPhoto ? "sm:max-w-[55%]" : "max-w-3xl"}`}>

          {/* Badge */}
          <div
            className="anim-fade-up flex items-center gap-2 mb-6"
            style={{ animationDelay: "0ms" }}
          >
            <div className="h-px w-8 bg-[#c9a96e] anim-line" style={{ animationDelay: "0ms" }} />
            <span className="text-[10px] tracking-[0.35em] text-[#c9a96e] font-semibold uppercase">
              Finance · Research · Analysis
            </span>
          </div>

          {/* Name */}
          <h1
            className="anim-fade-up title-serif text-5xl sm:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            style={{ animationDelay: "100ms" }}
          >
            Roberto<br />Farenga
          </h1>

          {/* Role */}
          <p
            className="anim-fade-up mt-5 text-sm text-slate-400 tracking-wide"
            style={{ animationDelay: "200ms" }}
          >
            MSc Banking &amp; Finance · Università Cattolica, Milan
          </p>

          {/* Bio */}
          <p
            className="anim-fade-up mt-5 text-sm text-slate-300 leading-relaxed max-w-md"
            style={{ animationDelay: "280ms" }}
          >
            Finance student with hands-on experience in treasury and ALM at{" "}
            <span className="text-white font-medium">Intesa Sanpaolo</span> and
            M&amp;A advisory at{" "}
            <span className="text-white font-medium">Epyon Vivida</span>.
            Focused on corporate finance, econometrics and capital markets.
          </p>

          {/* CTAs */}
          <div
            className="anim-fade-up mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="/cv.pdf"
              className="rounded-full bg-[#c9a96e] px-6 py-3 text-xs font-semibold text-[#0a0f1c] hover:bg-[#d4b47e] active:scale-95 transition-all"
            >
              Download CV
            </a>
            <Link
              href="/projects"
              className="rounded-full border border-white/20 px-6 py-3 text-xs font-semibold text-white hover:border-white/40 hover:bg-white/5 active:scale-95 transition-all"
            >
              View Projects →
            </Link>
          </div>

          {/* Contact links */}
          <div
            className="anim-fade-up mt-7 flex flex-wrap gap-5"
            style={{ animationDelay: "440ms" }}
          >
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-[11px] text-slate-500 hover:text-slate-300 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── CARDS ────────────────────────────────────────────── */}
      <section
        className="anim-fade-up px-5 sm:px-16 pb-10 pt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-3xl"
        style={{ animationDelay: "560ms" }}
      >
        <Link
          href="/projects"
          className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-200 hover:border-[#c9a96e]/30 hover:bg-white/[0.06] hover:-translate-y-0.5"
        >
          <p className="text-[10px] tracking-widest font-semibold text-[#c9a96e] uppercase">
            Projects
          </p>
          <p className="mt-2.5 text-sm font-semibold text-white">
            DCF, thesis &amp; econometrics
          </p>
          <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
            4 works · protected PDF access
          </p>
          <p className="mt-5 text-xs text-slate-500 group-hover:text-[#c9a96e] transition-colors">
            View →
          </p>
        </Link>

        <Link
          href="/cv"
          className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-200 hover:border-[#c9a96e]/30 hover:bg-white/[0.06] hover:-translate-y-0.5"
        >
          <p className="text-[10px] tracking-widest font-semibold text-[#c9a96e] uppercase">
            CV
          </p>
          <p className="mt-2.5 text-sm font-semibold text-white">
            Education &amp; experience
          </p>
          <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
            Università Cattolica · ISP · Epyon Vivida
          </p>
          <p className="mt-5 text-xs text-slate-500 group-hover:text-[#c9a96e] transition-colors">
            View →
          </p>
        </Link>
      </section>
    </main>
  );
}
