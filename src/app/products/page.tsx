import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { productsByCategory } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products — Split the Bit",
  description:
    "Each product is independently useless and collectively transformative.",
};

const tiers = [
  {
    name: "Hobbyist",
    price: "$0",
    note: "Free, in the same way that gravity is free.",
    perks: [
      "1 qubit (shared with 12,000 other users)",
      "Community Slack moderated by an LLM that gives up easily",
      "Errors come with motivational quotes",
      "SLA: vibes",
    ],
  },
  {
    name: "Startup",
    price: "$1,499",
    note: "Per month. Per dimension.",
    perks: [
      "16 qubits with optional 'pretend I have 64' toggle",
      "Slack channel with a real engineer who is busy",
      "Quarterly hand-written postcard from a founder",
      "SLA: 99.0% (rounded up from 51%)",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Let's talk",
    note: "We will arrive at a number together. It will be large.",
    perks: [
      "Unmetered qubits, billed by Schrödinger meter",
      "Dedicated 'quantum success manager' (a regular human)",
      "On-prem rack: looks impressive in board photos",
      "SLA: contractually obligated to seem fine",
    ],
  },
];

const categoryOrder = [
  "Compute",
  "DevOps",
  "Data",
  "AI",
  "Hardware",
  "Security",
  "Sales",
  "Productivity",
];

export default function ProductsPage() {
  return (
    <div>
      <section className="border-b border-qline/60 grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="tape mb-4">◇ Catalog · v∞</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">
            The <span className="text-qaccent glow">Split the Bit</span> stack.
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl text-lg">
            Eight product categories. Each engineered to be the smallest
            possible improvement over doing nothing — and the largest possible
            improvement over doing the right thing.
          </p>
        </div>
      </section>

      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-20 space-y-16">
          {categoryOrder
            .filter((c) => productsByCategory[c])
            .map((cat) => (
              <div key={cat}>
                <div className="flex items-end justify-between mb-6">
                  <h2 className="font-display text-3xl text-white">
                    <span className="text-qpink glow-pink">/</span> {cat}
                  </h2>
                  <span className="tape">
                    {productsByCategory[cat].length} product
                    {productsByCategory[cat].length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {productsByCategory[cat].map((p) => (
                    <Link
                      key={p.slug}
                      href={`/products/${p.slug}`}
                      className="panel p-5 block group hover:border-qaccent/60 transition-colors"
                    >
                      <p className="font-mono text-xs text-qaccent">
                        /{cat.toLowerCase()}/{p.slug}
                      </p>
                      <p className="mt-2 font-display text-lg text-white group-hover:text-qaccent transition-colors">
                        {p.name}
                      </p>
                      <p className="mt-2 text-sm text-white/60">{p.short}</p>
                      <p className="mt-4 tape group-hover:text-qaccent transition-colors">
                        Open product →
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </section>

      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeader
            eyebrow="Pricing"
            title="Three plans. Each priced in a different currency."
            description="Plans renew automatically across all observed timelines. Refunds available in 1 of them."
            align="center"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`panel p-7 ${
                  t.featured ? "border-qpink/60 panel-pink" : ""
                }`}
              >
                {t.featured && (
                  <p className="tape text-qpink mb-3">◇ Most observed</p>
                )}
                <p className="font-display text-2xl text-white">{t.name}</p>
                <p className="mt-2 font-mono text-3xl text-qaccent glow">
                  {t.price}
                </p>
                <p className="text-white/50 text-xs mt-1">{t.note}</p>
                <ul className="mt-6 space-y-2">
                  {t.perks.map((p) => (
                    <li key={p} className="text-sm text-white/70 flex gap-2">
                      <span className="text-qaccent">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-7 ${t.featured ? "qbtn qbtn-pink" : "qbtn"}`}
                >
                  Begin observation
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <SectionHeader
            eyebrow="Why us"
            title="Compared to a binary computer."
            align="center"
          />
          <div className="mt-12 panel p-2">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="px-5 py-4 tape">Capability</th>
                  <th className="px-5 py-4 tape">Binary Computer</th>
                  <th className="px-5 py-4 tape text-qaccent">Split the Bit</th>
                </tr>
              </thead>
              <tbody className="text-white/70">
                {[
                  ["Adds two numbers", "Yes", "Sometimes"],
                  ["Reproducible bugs", "Yes (problematic)", "No (resilient)"],
                  ["Job interview talking point", "Weak", "Devastating"],
                  ["Investor multiple", "5×", "200× pre-revenue"],
                  ["Power consumption", "Watts", "Spiritual"],
                  ["Replaces engineers", "No", "Mostly"],
                ].map((row) => (
                  <tr key={row[0]} className="border-t border-qline/60">
                    <td className="px-5 py-4">{row[0]}</td>
                    <td className="px-5 py-4 text-white/40">{row[1]}</td>
                    <td className="px-5 py-4 text-qaccent">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
