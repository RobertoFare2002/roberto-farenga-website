"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/projects", label: "Projects" },
  { href: "/cv",       label: "CV" },
  { href: "/contact",  label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <header className="flex items-center justify-between border-b border-white/[0.07] pb-4">
        <Link
          href="/"
          className="text-xs font-bold tracking-[0.3em] text-white/90 hover:text-white transition-colors"
        >
          ROBERTO FARENGA
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex gap-7 text-xs text-slate-400">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-white ${
                pathname === href
                  ? "text-[#c9a96e]"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="sm:hidden text-slate-400 hover:text-white transition-colors text-sm px-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </header>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 z-50 bg-[#0a0f1c] border-b border-white/[0.07] py-5 flex flex-col gap-5 sm:hidden">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm transition-colors hover:text-white ${
                pathname === href ? "text-[#c9a96e] font-medium" : "text-slate-400"
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
