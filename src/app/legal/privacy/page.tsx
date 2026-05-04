export const metadata = { title: "Privacy (Uncertain) — Split the Bit" };

export default function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 text-white/75 leading-relaxed">
      <p className="tape mb-3">◇ Legal</p>
      <h1 className="font-display text-4xl text-white">Privacy Policy (Uncertain)</h1>
      <p className="mt-2 text-white/40 text-sm">Last updated: 2026-04-01 · also next Tuesday</p>

      <div className="mt-10 space-y-6">
        <p>
          Split the Bit takes your privacy as seriously as it takes the
          existence of an objective shared reality, which is to say:
          situationally. This document describes, with the appropriate level of
          uncertainty, what we collect and what we do with it.
        </p>
        <h2 className="text-2xl font-display text-qaccent mt-10">1. Data we collect</h2>
        <p>
          We collect any data you provide us, any data we observe about you,
          and a small amount of data that came into being only at the moment
          we began looking. We do not distinguish between these.
        </p>
        <h2 className="text-2xl font-display text-qaccent mt-10">2. How we use it</h2>
        <p>
          Your data is used to improve our products, train our models, support
          our marketing claims, and, occasionally, to settle internal bets.
          Your data is also used to demonstrate that we have data.
        </p>
        <h2 className="text-2xl font-display text-qaccent mt-10">3. Your rights</h2>
        <p>
          You have the right to be forgotten, in the sense that we will be
          unable to confirm or deny that we ever knew you. You have the right
          to data portability, provided you can carry it.
        </p>
        <h2 className="text-2xl font-display text-qaccent mt-10">4. Cookies</h2>
        <p>
          We use cookies. They exist in superposition between 'strictly
          necessary' and 'optional' until you click. The act of clicking
          collapses the cookie into the consented state.
        </p>
        <h2 className="text-2xl font-display text-qaccent mt-10">5. Contact</h2>
        <p>
          For privacy-related inquiries, contact{" "}
          <span className="font-mono text-qaccent">privacy@splitthebit.com</span>.
          We will respond in some form.
        </p>
      </div>
    </article>
  );
}
