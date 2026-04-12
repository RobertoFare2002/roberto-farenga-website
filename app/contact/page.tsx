import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { CONTACT } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Roberto Farenga.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="w-full max-w-2xl mx-auto px-2 sm:px-0">
        <section className="mt-6 sm:mt-12">
          <p className="text-[10px] tracking-[0.3em] font-semibold text-slate-400 uppercase">
            Get in touch
          </p>
          <h1 className="title-serif mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Contact
          </h1>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Feel free to reach out for collaborations, opportunities or just to connect.
          </p>

          {/* Direct links */}
          <div className="mt-6 flex gap-6 text-sm text-slate-600">
            <a
              href={`mailto:${CONTACT.email}`}
              className="hover:text-slate-900 transition-colors underline underline-offset-2"
            >
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 transition-colors underline underline-offset-2"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Divider */}
          <div className="mt-10 border-t border-slate-100" />

          {/* Form */}
          <div className="mt-8">
            <p className="text-xs font-medium text-slate-500 mb-6 uppercase tracking-widest">
              Or send a message
            </p>
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
