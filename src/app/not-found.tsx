import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <p className="tape mb-4">◇ HTTP 404 · also 200</p>
      <h1 className="font-display text-6xl text-white">
        This page is in <span className="text-qaccent glow">superposition</span>.
      </h1>
      <p className="mt-6 text-white/60 max-w-xl mx-auto">
        The URL you requested both exists and does not exist. Per our
        observation policy, we have decided to act as if it does not. Sorry.
      </p>
      <div className="mt-10 flex justify-center gap-3">
        <Link href="/" className="qbtn">▶ Return home</Link>
        <Link href="/products" className="qbtn qbtn-pink">View products</Link>
      </div>
    </div>
  );
}
