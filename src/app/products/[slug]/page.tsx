import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProduct, products } from "@/lib/products";
import { SectionHeader } from "@/components/SectionHeader";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return { title: "Not found — Split the Bit" };
  return {
    title: `${p.name} — Split the Bit`,
    description: p.short,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const related = products
    .filter((x) => x.category === p.category && x.slug !== p.slug)
    .slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-qline/60">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 scanlines opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <Link
            href="/products"
            className="tape hover:text-qaccent transition-colors"
          >
            ← All products
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="tape text-qpink">{p.category}</span>
            <span className="text-white/30 font-mono text-xs">·</span>
            <span className="font-mono text-xs text-white/40">
              v0.{(p.slug.length % 9) + 1}
            </span>
            <span className="text-white/30 font-mono text-xs">·</span>
            <span className="font-mono text-xs text-qaccent animate-flicker">
              ● GA in 1 of 4 timelines
            </span>
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-7xl text-white leading-[1.05]">
            {p.name}
          </h1>
          <p className="mt-6 text-qaccent font-mono text-lg max-w-3xl glow">
            {p.tagline}
          </p>
          <p className="mt-6 text-white/70 text-lg max-w-3xl leading-relaxed">
            {p.hero}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="qbtn">
              ▶ Try {p.name}
            </Link>
            <Link href="/contact" className="qbtn qbtn-pink">
              Read whitepaper (~4 of 12 pages exist)
            </Link>
          </div>

          {p.warning && (
            <div className="mt-10 panel panel-pink p-4 max-w-3xl flex gap-3 items-start">
              <span className="text-qpink font-mono text-sm">⚠</span>
              <p className="text-sm text-white/70 leading-relaxed">
                <span className="tape text-qpink mr-2">Notice</span>
                {p.warning}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader
            eyebrow="Capabilities"
            title="What it does. Or appears to do."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {p.features.map((f, i) => (
              <div key={f.title} className="panel p-7">
                <p className="font-mono text-xs text-qaccent">
                  /feature/{(i + 1).toString().padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-xl text-white">{f.title}</p>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <SectionHeader eyebrow="Spec sheet" title="By the numbers (unverified)." />
          <div className="mt-10 panel p-2">
            <table className="w-full text-sm">
              <tbody>
                {p.specs.map(([k, v]) => (
                  <tr
                    key={k}
                    className="border-t first:border-t-0 border-qline/60"
                  >
                    <td className="px-5 py-4 tape w-1/2">{k}</td>
                    <td className="px-5 py-4 text-qaccent font-mono">{v}</td>
                  </tr>
                ))}
                <tr className="border-t border-qline/60">
                  <td className="px-5 py-4 tape">Pricing</td>
                  <td className="px-5 py-4 text-qpink font-mono">{p.pricing}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      {p.testimonials.length > 0 && (
        <section className="border-b border-qline/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Customer outcomes"
              title="Statements made by people, allegedly."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {p.testimonials.map((t) => (
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
      )}

      {/* FAQ */}
      {p.faq.length > 0 && (
        <section className="border-b border-qline/60">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <SectionHeader
              eyebrow="Frequently entangled questions"
              title="Things people have asked, in some branch."
            />
            <div className="mt-10 space-y-4">
              {p.faq.map((item) => (
                <details
                  key={item.q}
                  className="panel p-5 group"
                >
                  <summary className="cursor-pointer font-display text-lg text-white flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="text-qaccent font-mono group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-b border-qline/60">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <SectionHeader
              eyebrow="Adjacent products"
              title={`More from /${p.category.toLowerCase()}`}
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/products/${r.slug}`}
                  className="panel p-5 block group hover:border-qaccent/60 transition-colors"
                >
                  <p className="font-mono text-xs text-qaccent">
                    /{r.category.toLowerCase()}/{r.slug}
                  </p>
                  <p className="mt-2 font-display text-lg text-white group-hover:text-qaccent transition-colors">
                    {r.name}
                  </p>
                  <p className="mt-2 text-sm text-white/60">{r.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="tape mb-3">◇ Ready to deploy?</p>
          <h2 className="font-display text-3xl md:text-5xl text-white">
            Bring{" "}
            <span className="text-qaccent glow">{p.name}</span> into{" "}
            <span className="text-qpink glow-pink">your stack</span>.
          </h2>
          <p className="mt-5 text-white/60 max-w-xl mx-auto">
            Or don&apos;t. The product will continue to exist either way, in
            some form, somewhere.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="qbtn">
              ▶ Book a probabilistic demo
            </Link>
            <Link href="/products" className="qbtn qbtn-pink">
              Browse the rest of the stack
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
