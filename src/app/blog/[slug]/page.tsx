import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found — Split the Bit" };
  return { title: `${post.title} — Split the Bit`, description: post.excerpt };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/blog" className="tape hover:text-qaccent">
        ← All field notes
      </Link>
      <div className="mt-8 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-white/40">
        <span className="text-qpink">{post.category}</span>
        <span>·</span>
        <span>
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>
      <h1 className="mt-4 font-display text-3xl md:text-5xl text-white leading-[1.1]">
        {post.title}
      </h1>
      <p className="mt-4 text-white/50 font-mono text-sm">By {post.author}</p>

      <div className="mt-12 space-y-6 text-white/80 leading-relaxed text-lg">
        {post.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-qline">
        <p className="tape mb-3">Disclaimer</p>
        <p className="text-sm text-white/50">
          This post may have been written. The author may exist. Forward-looking
          statements herein are not guarantees of any specific timeline.
        </p>
      </div>
    </article>
  );
}
