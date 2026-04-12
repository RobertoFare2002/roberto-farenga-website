import type { Metadata } from "next";
import { CONTACT } from "@/app/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Roberto Farenga.",
};

export default function ContactPage() {
  return (
    <main>
      <div className="w-full max-w-6xl mx-auto px-6">
        <section className="mt-12 max-w-2xl">
          <h1 className="title-serif text-lg font-semibold tracking-tight text-slate-900">
            Contact
          </h1>

          <div className="mt-6 space-y-3 text-sm text-neutral-700">
            <p>
              Email:{" "}
              <a className="underline hover:text-slate-900" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                className="underline hover:text-slate-900"
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Open profile
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
