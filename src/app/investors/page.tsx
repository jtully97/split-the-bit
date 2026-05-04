import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { QuantumCounter } from "@/components/QuantumCounter";

export const metadata: Metadata = {
  title: "Investors — Split the Bit",
};

export default function InvestorsPage() {
  return (
    <div>
      <section className="border-b border-qline/60 grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="tape mb-4">◇ Investor relations</p>
          <h1 className="font-display text-5xl md:text-6xl text-white max-w-4xl leading-tight">
            A <span className="text-qaccent glow">200×</span> revenue multiple
            on a <span className="text-qpink glow-pink">$0</span> revenue base.
          </h1>
          <p className="mt-8 text-white/70 max-w-2xl text-lg">
            Split the Bit is the most capital-efficient way to convert venture
            dollars into press releases. Our metrics are unverifiable, in a good
            way.
          </p>
          <div className="mt-10 flex gap-3 flex-wrap">
            <Link href="/contact" className="qbtn">▶ Request data room</Link>
            <a href="#kpis" className="qbtn qbtn-pink">View KPIs</a>
          </div>
        </div>
      </section>

      {/* CAP TABLE */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader eyebrow="Capitalization" title="Investors of record." />
          <div className="mt-10 panel">
            <table className="w-full text-sm">
              <thead className="text-left">
                <tr>
                  <th className="px-5 py-4 tape">Investor</th>
                  <th className="px-5 py-4 tape">Round</th>
                  <th className="px-5 py-4 tape">Check</th>
                  <th className="px-5 py-4 tape">Status</th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                {[
                  ["Veridian Capital", "Series F (lead)", "$310M", "Wired"],
                  ["Several Family Offices", "Series E", "$120M", "Mostly wired"],
                  ["Anonymous SPV", "Series D-2", "$72M", "Tax-advantaged"],
                  ["A YC Partner", "Pre-seed", "$125k", "Romantic"],
                  ["The CEO's mother", "Friends & family", "$2k", "Sentimental"],
                  ["A pension fund (allegedly)", "Crossover", "$45M", "Cooling off"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-qline/60">
                    {row.map((c, i) => (
                      <td key={i} className="px-5 py-4">{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section id="kpis" className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="KPIs"
            title="Our key performance indicators."
            description="Each metric below was true at the moment we wrote it. We make no representations about the present moment."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            <QuantumCounter label="ARR (theoretical)" base={42000000} unit="$" jitter={0.5} />
            <QuantumCounter label="NRR" base={142} unit="%" jitter={0.2} />
            <QuantumCounter label="Burn multiple" base={0.6} jitter={0.4} decimals={1} />
            <QuantumCounter label="Headcount" base={142} jitter={0.5} />
            <QuantumCounter label="Customers (logos)" base={87} jitter={0.3} />
            <QuantumCounter label="Customers (paying)" base={6} jitter={0.5} />
            <QuantumCounter label="LTV / CAC" base={11.4} jitter={0.5} decimals={1} />
            <QuantumCounter label="Days of runway" base={1450} jitter={0.3} />
          </div>
          <p className="mt-6 text-xs text-white/40 font-mono">
            * All KPIs are non-GAAP, non-IFRS, and non-falsifiable.
          </p>
        </div>
      </section>

      {/* THESIS */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24">
          <SectionHeader eyebrow="Thesis" title="Why now." align="center" />
          <div className="mt-10 space-y-5">
            {[
              "Classical computers have plateaued. The S-curve has become an L-shape, then a colon, then briefly a semicolon.",
              "Capital is searching for stories that cannot be diligenced because they are too far ahead of conventional metrics. We are perfectly positioned in that gap.",
              "Founders who can credibly use the word 'qubit' in a podcast appearance are increasingly scarce. We have three of them.",
              "Public markets reward narrative density. Our narrative density is the highest in the sector, by our own internal benchmarks.",
            ].map((t, i) => (
              <div key={i} className="panel p-6 flex gap-5">
                <span className="font-mono text-qaccent text-xl">0{i + 1}</span>
                <p className="text-white/80 leading-relaxed">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
