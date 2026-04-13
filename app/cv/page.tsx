import type { Metadata } from "next";
import { EDUCATION, EXPERIENCE, SKILLS } from "@/app/lib/cv-data";

export const metadata: Metadata = {
  title: "CV",
  description: "Education, experience and skills of Roberto Farenga.",
};

export default function CvPage() {
  return (
    <main className="px-5 sm:px-16 pb-16">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <section className="mt-10 sm:mt-14">
          <p className="text-[10px] tracking-[0.35em] text-[#c9a96e] font-semibold uppercase">
            Background
          </p>
          <h1 className="title-serif mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Curriculum Vitae
          </h1>
          <div className="mt-5 flex items-center gap-3">
            <div className="h-px w-8 bg-[#c9a96e]/50" />
            <a
              href="/cv.pdf"
              className="text-xs text-slate-500 hover:text-[#c9a96e] transition-colors"
            >
              Download PDF →
            </a>
          </div>
        </section>

        {/* Education */}
        <section className="mt-14">
          <h2 className="text-[10px] tracking-[0.3em] font-semibold text-slate-600 uppercase">
            Education
          </h2>
          <div className="mt-5">
            {EDUCATION.map((item) => (
              <div key={item.degree} className="border-b border-white/[0.07] py-6">
                <p className="text-sm font-semibold text-white">{item.degree}</p>
                <p className="mt-1 text-sm text-slate-400">{item.school}</p>
                <p className="mt-1.5 text-[11px] text-slate-600">{item.period}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-14">
          <h2 className="text-[10px] tracking-[0.3em] font-semibold text-slate-600 uppercase">
            Experience
          </h2>
          <div className="mt-5">
            {EXPERIENCE.map((item) => (
              <div key={item.company} className="border-b border-white/[0.07] py-6">
                <p className="text-sm font-semibold text-white">
                  {item.company}
                  <span className="text-slate-500 font-normal"> — {item.role}</span>
                </p>
                <p className="mt-1.5 text-[11px] text-slate-600">{item.period}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-400 list-disc pl-4">
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
          <h2 className="text-[10px] tracking-[0.3em] font-semibold text-slate-600 uppercase">
            Skills
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category}>
                <p className="text-[10px] tracking-widest font-semibold text-[#c9a96e] uppercase">
                  {category}
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-400">
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
