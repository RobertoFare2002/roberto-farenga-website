import Link from "next/link";

const CONTACT = {
  email: "robertofarenga.contact@gmail.com",
  linkedin: "https://www.linkedin.com/in/roberto-farenga-392a85282",
};

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Top contacts */}
        <section className="flex items-center justify-between pt-2">
          <a
            className="text-xs underline text-slate-600 hover:text-slate-900"
            href={`mailto:${CONTACT.email}`}
          >
            {CONTACT.email}
          </a>
          <a
            className="text-xs underline text-slate-600 hover:text-slate-900"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </section>

        {/* Intro */}
        <section className="mt-16">
          <h1 className="title-serif text-lg font-semibold tracking-tight text-slate-900">

            Personal website
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-700">
            <span className="font-semibold text-slate-900">CV</span>,{" "}
            <span className="font-semibold text-slate-900">selected projects</span>{" "}
            and{" "}
            <span className="font-semibold text-slate-900">research outputs</span>.
          </p>

          <div className="mt-8 flex gap-3">
            {/* Primary button */}
            <a
              href="/cv.pdf"
              className="rounded-2xl border border-slate-900 bg-slate-900 px-4 py-2 text-xs text-white hover:bg-slate-800"
            >
              Download CV
            </a>

            {/* Secondary buttons */}
            <Link
              href="/projects"
              className="rounded-2xl border border-slate-200 px-4 py-2 text-xs text-slate-900 hover:border-slate-300 hover:bg-slate-50"
            >
              Projects
            </Link>
            <Link
              href="/research"
              className="rounded-2xl border border-slate-200 px-4 py-2 text-xs text-slate-900 hover:border-slate-300 hover:bg-slate-50"
            >
              Research
            </Link>
          </div>
        </section>

        {/* Cards */}
        <section className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 transition-colors hover:border-slate-300">
            <p className="text-[11px] tracking-wide font-semibold text-slate-900">
              PROJECTS
            </p>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              A concise selection of work and deliverables.
            </p>
            <Link
              href="/projects"
              className="mt-4 inline-block text-xs underline text-slate-700 hover:text-slate-900"
            >
              View →
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 transition-colors hover:border-slate-300">
            <p className="text-[11px] tracking-wide font-semibold text-slate-900">
              RESEARCH
            </p>
            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              Notes, summaries and downloadable PDFs.
            </p>
            <Link
              href="/research"
              className="mt-4 inline-block text-xs underline text-slate-700 hover:text-slate-900"
            >
              View →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t border-slate-200 pt-6 text-[11px] text-slate-500">
          © {new Date().getFullYear()} Roberto Farenga
        </footer>
      </div>
    </main>
  );
}
