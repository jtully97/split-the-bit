import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Field Notes — Split the Bit",
};

export default function BlogIndex() {
  return (
    <div>
      <section className="border-b border-qline/60 grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="tape mb-4">◇ Field Notes</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">
            Dispatches from <span className="text-qaccent glow">|ψ⟩-space</span>.
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl text-lg">
            Essays, post-mortems, and unverifiable customer anecdotes from the
            Split the Bit research team.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-6 py-20 space-y-6">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="panel p-7 block group hover:border-qaccent/60 transition-colors"
            >
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/40">
                <span className="text-qpink">{p.category}</span>
                <span>·</span>
                <span>{new Date(p.date).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>·</span>
                <span>{p.author}</span>
              </div>
              <h2 className="mt-3 font-display text-2xl md:text-3xl text-white group-hover:text-qaccent transition-colors leading-tight">
                {p.title}
              </h2>
              <p className="mt-3 text-white/60 leading-relaxed">{p.excerpt}</p>
              <p className="mt-5 tape group-hover:text-qaccent">Read post →</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
