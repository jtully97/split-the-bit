import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-qline/80 mt-24 bg-qbg/80">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <p className="font-mono text-sm tracking-[0.3em] text-qaccent uppercase glow">
            Split / the / Bit
          </p>
          <p className="text-white/60 text-sm max-w-md">
            We are the first ISO-9001-aspirational quantum compute platform
            building a probabilistic future where your business outcomes exist
            in superposition until a regulator observes them.
          </p>
          <p className="tape">Patent pending in 7 parallel universes.</p>
        </div>
        <div>
          <p className="tape mb-3">Company</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-qaccent">About</Link></li>
            <li><Link href="/careers" className="hover:text-qaccent">Careers</Link></li>
            <li><Link href="/investors" className="hover:text-qaccent">Investors</Link></li>
            <li><Link href="/blog" className="hover:text-qaccent">Field Notes</Link></li>
          </ul>
        </div>
        <div>
          <p className="tape mb-3">Compliance</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href="/legal/privacy" className="hover:text-qaccent">Privacy (uncertain)</Link></li>
            <li><Link href="/legal/terms" className="hover:text-qaccent">Terms (entangled)</Link></li>
            <li><Link href="/legal/sla" className="hover:text-qaccent">SLA (probabilistic)</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/40 font-mono">
          <p>© {new Date().getFullYear()} Split the Bit, Inc. (also Split the Bit, LLC, in a nearby branch.)</p>
          <p>
            Status: <span className="text-qlime">OPERATIONAL</span> · also <span className="text-qpink">DOWN</span> · also <span className="text-qaccent">YES</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
