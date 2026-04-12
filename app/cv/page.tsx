import type { Metadata } from "next";
import { EDUCATION, EXPERIENCE, SKILLS } from "@/app/lib/cv-data";

export const metadata: Metadata = {
  title: "CV",
  description: "Education, experience and skills of Roberto Farenga.",
};

export default function CvPage() {
  return (
    <main>
      <div className="w-full max-w-6xl mx-auto px-6">
        {/* Header */}
        <section className="mt-12 max-w-2xl">
          <h1 className="title-serif text-lg font-semibold tracking-tight text-slate-900">
            Curriculum Vitae
          </h1>
          <p className="mt-4 text-sm text-neutral-700">
            A concise overview of education, experience and skills.
          </p>
          <div className="mt-6">
            <a href="/cv.pdf" className="text-xs underline text-neutral-700 hover:text-slate-900 transition-colors">
              Download PDF version →
            </a>
          </div>
        </section>

        {/* Education */}
        <section className="mt-14">
          <h2 className="text-[11px] tracking-widest font-semibold text-slate-400">
            EDUCATION
          </h2>
          <div className="mt-4 space-y-0">
            {EDUCATION.map((item) => (
              <div key={item.degree} className="border-b py-6">
                <p className="text-sm font-medium text-slate-900">{item.degree}</p>
                <p className="mt-1 text-sm text-neutral-700">{item.school}</p>
                <p className="mt-1 text-[11px] text-neutral-400">{item.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-14">
          <h2 className="text-[11px] tracking-widest font-semibold text-slate-400">
            EXPERIENCE
          </h2>
          <div className="mt-4 space-y-0">
            {EXPERIENCE.map((item) => (
              <div key={item.company} className="border-b py-6">
                <p className="text-sm font-medium text-slate-900">
                  {item.company} — {item.role}
                </p>
                <p className="mt-1 text-[11px] text-neutral-400">{item.period}</p>
                <ul className="mt-3 space-y-2 text-sm text-neutral-700 list-disc pl-4">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-14">
          <h2 className="text-[11px] tracking-widest font-semibold text-slate-400">
            SKILLS
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <p className="text-[11px] text-neutral-400 tracking-wide font-medium">
                  {category.toUpperCase()}
                </p>
                <ul className="mt-3 space-y-1 text-sm text-neutral-700">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
