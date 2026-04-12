import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/app/lib/constants";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-0">

        {/* Hero */}
        <section className="mt-10 sm:mt-16">

          {/* Photo + name row */}
          <div className="flex items-center gap-5">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-slate-200 bg-slate-100 shrink-0">
              <Image
                src="/profile.jpg"
                alt="Roberto Farenga"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <p className="text-[10px] tracking-[0.3em] font-semibold text-slate-400 uppercase">
                Finance · Research · Analysis
              </p>
              <h1 className="title-serif mt-1.5 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Roberto Farenga
              </h1>
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-500">
            MSc Banking &amp; Finance · Università Cattolica, Milan
          </p>

          <p className="mt-5 text-sm text-slate-700 leading-relaxed max-w-lg">
            Finance student with experience in treasury and ALM at{" "}
            <span className="font-medium text-slate-900">Intesa Sanpaolo</span> and
            M&amp;A advisory at{" "}
            <span className="font-medium text-slate-900">Epyon Vivida</span>.
            Interested in corporate finance, financial econometrics and capital markets.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="/cv.pdf"
              className="rounded-full border border-slate-900 bg-slate-900 px-5 py-2.5 text-xs font-medium text-white hover:bg-slate-700 transition-colors"
            >
              Download CV
            </a>
            <Link
              href="/projects"
              className="rounded-full border border-slate-200 px-5 py-2.5 text-xs font-medium text-slate-800 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              View Projects →
            </Link>
          </div>

          <div className="mt-6 flex gap-5">
            <a
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
              href={`mailto:${CONTACT.email}`}
            >
              {CONTACT.email}
            </a>
            <a
              className="text-xs text-slate-400 hover:text-slate-700 transition-colors"
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="mt-14 sm:mt-20 border-t border-slate-100" />

        {/* Cards */}
        <section className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            href="/projects"
            className="group rounded-2xl border border-slate-200 p-5 transition-all hover:border-slate-300 hover:shadow-sm"
          >
            <p className="text-[10px] tracking-widest font-semibold text-slate-400 uppercase">
              Projects
            </p>
            <p className="mt-2 text-sm font-medium text-slate-900">
              DCF, thesis &amp; econometrics
            </p>
            <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
              4 projects with downloadable files.
            </p>
            <p className="mt-4 text-xs text-slate-700 group-hover:text-slate-900 transition-colors">
              View →
            </p>
          </Link>

          <Link
            href="/cv"
            className="group rounded-2xl border border-slate-200 p-5 transition-all hover:border-slate-300 hover:shadow-sm"
          >
            <p className="text-[10px] tracking-widest font-semibold text-slate-400 uppercase">
              CV
            </p>
            <p className="mt-2 text-sm font-medium text-slate-900">
              Education &amp; experience
            </p>
            <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
              Università Cattolica · ISP · Epyon Vivida.
            </p>
            <p className="mt-4 text-xs text-slate-700 group-hover:text-slate-900 transition-colors">
              View →
            </p>
          </Link>
        </section>

      </div>
    </main>
  );
}
