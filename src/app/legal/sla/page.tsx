export const metadata = { title: "SLA (Probabilistic) — Split the Bit" };

export default function SLA() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-20 text-white/75 leading-relaxed">
      <p className="tape mb-3">◇ Legal</p>
      <h1 className="font-display text-4xl text-white">Service Level Agreement (Probabilistic)</h1>
      <p className="mt-2 text-white/40 text-sm">Last observed: today</p>

      <div className="mt-10 space-y-6">
        <p>
          Split the Bit is committed to providing service that is, on average,
          available. This Service Level Agreement (the "SLA") describes that
          commitment in non-binding probabilistic terms.
        </p>

        <h2 className="text-2xl font-display text-qaccent mt-10">Uptime targets</h2>
        <div className="panel p-2">
          <table className="w-full text-sm">
            <thead className="text-left">
              <tr>
                <th className="px-4 py-3 tape">Tier</th>
                <th className="px-4 py-3 tape">Target</th>
                <th className="px-4 py-3 tape">Method of measurement</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-t border-qline/60"><td className="px-4 py-3">Hobbyist</td><td className="px-4 py-3">vibes</td><td className="px-4 py-3">customer self-report</td></tr>
              <tr className="border-t border-qline/60"><td className="px-4 py-3">Startup</td><td className="px-4 py-3">99.0%</td><td className="px-4 py-3">our internal dashboard, when up</td></tr>
              <tr className="border-t border-qline/60"><td className="px-4 py-3">Enterprise</td><td className="px-4 py-3">99.99%</td><td className="px-4 py-3">a third-party we have not yet selected</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-display text-qaccent mt-10">Credits</h2>
        <p>
          In the event we breach this SLA, you are entitled to service credits
          equal to the breach amount, multiplied by the probability that the
          breach occurred. Credits expire when we notice them.
        </p>

        <h2 className="text-2xl font-display text-qaccent mt-10">Exclusions</h2>
        <p>
          The SLA does not apply during planned maintenance, unplanned
          maintenance, force majeure, force minore, our annual offsite, the
          months of August or January, or whenever an executive is on a flight.
        </p>
      </div>
    </article>
  );
}
