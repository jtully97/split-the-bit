import Link from "next/link";
import { QuantumCounter } from "@/components/QuantumCounter";
import { QubitOrb } from "@/components/QubitOrb";
import { SectionHeader } from "@/components/SectionHeader";

import { products as catalog } from "@/lib/products";

const featuredSlugs = [
  "psi-cloud",
  "entangleops",
  "quantumcoffee",
  "schrodinger-saas",
  "q-crm",
  "zerobit-vault",
];

const products = featuredSlugs
  .map((s) => catalog.find((p) => p.slug === s)!)
  .map((p) => ({
    slug: p.slug,
    name: p.name,
    tag: p.category,
    blurb: p.hero.split(". ").slice(0, 2).join(". ") + ".",
  }));

const logos = [
  "Definitely-A-Bank",
  "OmniCorp Energy",
  "Lumon Industries",
  "Cyberdyne (Legacy)",
  "Tyrell & Sons",
  "Pied Piper",
  "Hooli",
  "Initech",
];

const testimonials = [
  {
    quote:
      "We replaced our entire data team with a single qubit and our quarterly forecasts have never been more confidently wrong.",
    name: "M. Cantrell",
    role: "VP, Strategic Vibes",
    org: "Definitely-A-Bank",
  },
  {
    quote:
      "After deploying ψ-Cloud, our compute costs decreased by 400% — or increased by 1,200%, depending on which observer you ask.",
    name: "R. Holloway",
    role: "Chief Probability Officer",
    org: "OmniCorp",
  },
  {
    quote:
      "The on-call rotation now exists in superposition. Nobody is paged because nobody can be located.",
    name: "S. Vega",
    role: "SRE Lead",
    org: "Lumon Industries",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-qline/60">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 scanlines opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="tape mb-4 animate-flicker">
              ◇ Series F · pre-revenue · post-physics
            </p>
            <h1 className="text-5xl md:text-7xl font-display tracking-tight text-white leading-[1.05]">
              We split the bit
              <br />
              <span className="text-qaccent glow">so you don&apos;t</span>
              <br />
              <span className="text-qpink glow-pink">have to.</span>
            </h1>
            <p className="mt-8 text-white/70 text-lg max-w-xl leading-relaxed">
              Split the Bit is the world&apos;s first post-classical, pre-functional
              quantum compute platform. We take ordinary 1s and 0s and turn them
              into ambiguous, regulator-resistant probability clouds. Then we
              charge you in dollars.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/products" className="qbtn">
                ▶ View the stack
              </Link>
              <Link href="/contact" className="qbtn qbtn-pink">
                Book a probabilistic demo
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="h-px flex-1 bg-qline" />
              <p className="tape">
                Trusted by 4 of the Fortune 5 (in this universe)
              </p>
              <div className="h-px flex-1 bg-qline" />
            </div>
          </div>
          <QubitOrb />
        </div>
      </section>

      {/* COUNTERS */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-16 grid gap-5 md:grid-cols-4">
          <QuantumCounter label="Qubits in production" base={4096} jitter={0.4} />
          <QuantumCounter label="Algorithms run / sec" base={87421} jitter={0.2} />
          <QuantumCounter
            label="Wavefunctions collapsed"
            base={1240003}
            jitter={0.08}
          />
          <QuantumCounter
            label="Observed accuracy"
            base={97.4}
            unit="%"
            jitter={0.04}
            decimals={1}
          />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <SectionHeader
              eyebrow="The problem"
              title="Classical computing is too… committed."
              description="Today's computers force you to pick. A 1. Or a 0. A yes. Or a no. A working website. Or downtime. We believe this binary thinking is what's holding your business back from becoming an unfalsifiable hypothesis."
            />
          </div>
          <div className="md:col-span-7 grid md:grid-cols-2 gap-5">
            {[
              {
                k: "01",
                t: "Your data has opinions.",
                b: "Classical bits are coerced into a state. Our qubits are allowed to feel.",
              },
              {
                k: "02",
                t: "Your roadmap is too readable.",
                b: "If a competitor can read your roadmap, it isn't quantum. We obscure it via decoherence.",
              },
              {
                k: "03",
                t: "Your bugs are reproducible.",
                b: "An embarrassing artifact of legacy infra. With Split the Bit, no bug occurs twice.",
              },
              {
                k: "04",
                t: "Your CFO can do math.",
                b: "We fix this with probabilistic invoicing, in which the dollar amount itself is a wave.",
              },
            ].map((b) => (
              <div key={b.k} className="panel p-6">
                <p className="tape">{b.k}</p>
                <p className="mt-2 text-white font-display text-lg">{b.t}</p>
                <p className="mt-2 text-white/60 text-sm">{b.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <SectionHeader
              eyebrow="The stack"
              title="Six products. Possibly more."
              description="Each Split the Bit product is independently useless and collectively transformative. Bundling unlocks deeper non-determinism."
            />
            <Link href="/products" className="qbtn">
              See the full catalog →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Link
                key={p.name}
                href={`/products/${p.slug}`}
                className="panel p-7 group hover:border-qaccent/60 transition-colors block"
              >
                <div className="flex items-center justify-between">
                  <p className="tape text-qpink">{p.tag}</p>
                  <span className="font-mono text-xs text-white/30">
                    v0.{(i + 3) % 9 + 1}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl text-white group-hover:text-qaccent transition-colors">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {p.blurb}
                </p>
                <p className="mt-6 tape group-hover:text-qaccent">
                  Open product →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="tape text-center mb-8">Trusted by the trust-curious</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {logos.map((l) => (
              <span
                key={l}
                className="font-mono text-sm text-white/40 hover:text-white/70 transition-colors uppercase tracking-widest"
              >
                ◆ {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeader
            eyebrow="Customer outcomes"
            title="Quotes that may or may not have been said."
            description="Each testimonial is statistically representative of someone, somewhere, in some branch of the wavefunction."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="panel p-7">
                <blockquote className="text-white/80 text-base leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-qline/60">
                  <p className="text-white font-mono text-sm">{t.name}</p>
                  <p className="text-white/50 text-xs mt-0.5">
                    {t.role} · {t.org}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center">
          <p className="tape mb-4">◇ Limited-time offer · already expired in 2 universes</p>
          <h2 className="font-display text-4xl md:text-6xl text-white">
            Ready to <span className="text-qaccent glow">disrupt</span>{" "}
            <span className="line-through text-white/40">arithmetic</span>{" "}
            <span className="text-qpink glow-pink">causality</span>?
          </h2>
          <p className="mt-6 text-white/60 max-w-2xl mx-auto">
            Schedule a 30-minute discovery call. We will arrive at some subset of
            those minutes. A signed NDA exists in 3 of 4 timelines.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="qbtn">
              ▶ Book the call
            </Link>
            <Link href="/investors" className="qbtn qbtn-pink">
              Investor deck (entangled PDF)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
