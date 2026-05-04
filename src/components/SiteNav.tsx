import Link from "next/link";

const links = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/investors", label: "Investors" },
];

export function SiteNav() {
  return (
    <header className="border-b border-qline/80 bg-qbg/70 backdrop-blur sticky top-0 z-30">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
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
        <Link href="/contact" className="qbtn">
          Request Decoherence
        </Link>
      </div>
    </header>
  );
}
