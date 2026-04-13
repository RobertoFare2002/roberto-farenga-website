import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { CONTACT } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Roberto Farenga.",
};

export default function ContactPage() {
  return (
    <main className="px-5 sm:px-16 pb-16">
      <div className="max-w-xl mx-auto">
        <section className="mt-10 sm:mt-14">
          <p className="text-[10px] tracking-[0.35em] text-[#c9a96e] font-semibold uppercase">
            Get in touch
          </p>
          <h1 className="title-serif mt-3 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Contact
          </h1>
          <p className="mt-4 text-sm text-slate-400 leading-relaxed">
            Open to opportunities, collaborations and connections.
          </p>

          <div className="mt-6 flex gap-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="text-xs text-slate-500 hover:text-[#c9a96e] transition-colors underline underline-offset-2"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-slate-500 hover:text-[#c9a96e] transition-colors underline underline-offset-2"
            >
              LinkedIn ↗
            </a>
          </div>

          <div className="mt-10 border-t border-white/[0.07]" />

          <div className="mt-8">
            <p className="text-[10px] tracking-widest font-semibold text-slate-600 uppercase mb-6">
              Send a message
            </p>
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
