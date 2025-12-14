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
            className="text-xs underline text-neutral-600 hover:text-neutral-900"
            href={`mailto:${CONTACT.email}`}
          >
            {CONTACT.email}
          </a>
          <a
            className="text-xs underline text-neutral-600 hover:text-neutral-900"
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </section>

        {/* Intro */}
        <section className="mt-16">
          <h1 className="text-lg font-medium tracking-tight">Personal website</h1>

          <p className="mt-4 max-w-xl text-sm text-neutral-700">
            CV, selected projects and research outputs.
          </p>

          <div className="mt-8 flex gap-3">
            <a
              href="/cv.pdf"
              className="rounded-2xl border px-4 py-2 text-xs hover:bg-neutral-50"
            >
              Download CV
            </a>
            <Link
              href="/projects"
              className="rounded-2xl border px-4 py-2 text-xs hover:bg-neutral-50"
            >
              Projects
            </Link>
            <Link
              href="/research"
              className="rounded-2xl border px-4 py-2 text-xs hover:bg-neutral-50"
            >
              Research
            </Link>
          </div>
        </section>

        {/* Cards */}
        <section className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <p className="text-[11px] tracking-wide text-neutral-500">PROJECTS</p>
            <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
              A concise selection of work and deliverables.
            </p>
            <Link
              href="/projects"
              className="mt-4 inline-block text-xs underline text-neutral-700"
            >
              View →
            </Link>
          </div>

          <div className="rounded-2xl border p-6">
            <p className="text-[11px] tracking-wide text-neutral-500">RESEARCH</p>
            <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
              Notes, summaries and downloadable PDFs.
            </p>
            <Link
              href="/research"
              className="mt-4 inline-block text-xs underline text-neutral-700"
            >
              View →
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-24 border-t pt-6 text-[11px] text-neutral-500">
          © {new Date().getFullYear()} Roberto Farenga
        </footer>
      </div>
    </main>
  );
}
