const CONTACT = {
  email: "robertofarenga.contact@gmail.com",
  linkedin: "https://www.linkedin.com/in/roberto-farenga-392a85282",
};

export default function ContactPage() {
  return (
    <section className="max-w-2xl">
      <h1 className="text-lg font-medium tracking-tight">Contact</h1>

      <div className="mt-6 space-y-3 text-sm text-neutral-700">
        <p>
          Email:{" "}
          <a className="underline" href={`mailto:${CONTACT.email}`}>
            {CONTACT.email}
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a className="underline" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
            Open profile
          </a>
        </p>
      </div>
    </section>
  );
}
