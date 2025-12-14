import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b pb-3">
      <Link href="/" className="text-xs font-semibold tracking-[0.35em]">
        ROBERTO FARENGA
      </Link>

      <nav className="flex gap-5 text-xs text-neutral-700">
        <Link href="/projects" className="hover:underline">PROJECTS</Link>
        <Link href="/research" className="hover:underline">RESEARCH</Link>
        <Link href="/cv" className="hover:underline">CV</Link>
        <Link href="/contact" className="hover:underline">CONTACT</Link>
      </nav>
    </header>
  );
}
