"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/projects", label: "PROJECTS" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "CONTACT" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <header className="flex items-center justify-between border-b border-slate-200 pb-3">
        <Link
          href="/"
          className="text-xs font-bold tracking-[0.35em] text-slate-900 hover:opacity-70 transition-opacity"
        >
          ROBERTO FARENGA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-5 text-xs text-neutral-700">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-slate-900 ${
                pathname === href
                  ? "text-slate-900 underline underline-offset-4"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-xs text-slate-700 hover:text-slate-900 transition-colors px-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 z-40 bg-white border-b border-slate-200 py-4 flex flex-col gap-4 sm:hidden">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-xs px-1 transition-colors hover:text-slate-900 ${
                pathname === href
                  ? "text-slate-900 font-semibold"
                  : "text-neutral-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
