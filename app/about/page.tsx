import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main>
      <div className="w-full max-w-6xl mx-auto px-6">
        <section className="mt-12 max-w-2xl">
          <h1 className="title-serif text-lg font-semibold tracking-tight text-slate-900">
            About
          </h1>
          <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
            {/* Add your bio here */}
          </p>
        </section>
      </div>
    </main>
  );
}
