"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/investors", label: "Investors" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="border-b border-qline/80 bg-qbg/70 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative inline-flex h-8 w-8 items-center justify-center border border-qaccent/60 bg-qaccent/10 text-qaccent font-mono">
            <span className="absolute -inset-0.5 border border-qaccent/30 animate-flicker" />
            ψ
          </span>
          <span className="font-mono text-sm tracking-[0.3em] text-qaccent glow uppercase">
            Split<span className="text-qpink glow-pink">/</span>the<span className="text-qpink glow-pink">/</span>Bit
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm font-mono uppercase tracking-widest">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/70 hover:text-qaccent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <span className="hidden md:inline-flex">
          <Link href="/contact" className="qbtn">
            Request Decoherence
          </Link>
        </span>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center border border-qaccent/40 bg-qaccent/10 text-qaccent hover:bg-qaccent/20 transition-colors"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </>
            )}
          </svg>
        </button>
      </div>
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-qline/80 bg-qbg/95 backdrop-blur transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1 text-sm font-mono uppercase tracking-widest">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="py-3 border-b border-qline/40 text-white/80 hover:text-qaccent transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="qbtn mt-4 justify-center">
            Request Decoherence
          </Link>
        </nav>
      </div>
    </header>
  );
}
