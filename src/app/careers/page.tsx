import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Careers — Split the Bit",
};

const roles = [
  {
    title: "Senior Schrödinger",
    team: "Engineering",
    location: "Remote · also onsite",
    blurb:
      "Maintain the lab cat. Ensure the cat is in a state of well-defined uncertainty during business hours. Report to the Head of Decoherence, when locatable.",
  },
  {
    title: "Quantum Janitor",
    team: "Operations",
    location: "Pittsburgh, PA",
    blurb:
      "Sweep up unobserved electrons. Mop the wave. Empty the recycling, both bins. Must own non-conductive shoes.",
  },
  {
    title: "Chief Uncertainty Officer (Co)",
    team: "Executive",
    location: "Anywhere · briefly",
    blurb:
      "Co-lead our company-wide indecision strategy alongside our existing Chief Uncertainty Officer, M. Patel. Reports to both M. Patel and possibly to no one.",
  },
  {
    title: "Staff Wavefunction Engineer",
    team: "Engineering",
    location: "SF · NYC · Veridia",
    blurb:
      "Design, deploy, and occasionally collapse high-throughput wavefunctions in production. Comfortable being on-call for events that have not yet occurred.",
  },
  {
    title: "Probabilistic Recruiter",
    team: "People",
    location: "Remote",
    blurb:
      "You will source candidates who are, in some sense, already employed here. Familiarity with LinkedIn and modal logic preferred.",
  },
  {
    title: "Quantum Customer Success Manager",
    team: "Customer",
    location: "Remote",
    blurb:
      "Each customer is succeeding and failing simultaneously. Your job is to bias the wave toward 'succeeding' before the QBR.",
  },
  {
    title: "Brand Designer (Indeterminate)",
    team: "Design",
    location: "NYC",
    blurb:
      "Refresh our brand without ever finalizing it. Logo must remain in superposition between 'serif' and 'sans-serif' until shipped.",
  },
  {
    title: "Legal Counsel, Many-Worlds Interpretation",
    team: "Legal",
    location: "DC · DC (different DC)",
    blurb:
      "Defend Split the Bit against subpoenas issued in adjacent timelines. JD required. Multiple JDs preferred.",
  },
];

const perks = [
  "Unlimited PTO that you cannot prove you took.",
  "401(k) match in any currency you can prove existed in 2008.",
  "On-site QuantumCoffee™ bar (results vary).",
  "Annual offsite to a location that has both occurred and not.",
  "Mental health benefits: 8 sessions, 4 of them retroactive.",
  "Stock options that vest in a probabilistic schedule.",
];

export default function CareersPage() {
  return (
    <div>
      <section className="border-b border-qline/60 grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="tape mb-4">◇ Open roles</p>
          <h1 className="font-display text-5xl md:text-6xl text-white max-w-4xl leading-tight">
            Help us build the{" "}
            <span className="text-qaccent glow">least deterministic</span>{" "}
            company on Earth.
          </h1>
          <p className="mt-8 text-white/70 max-w-2xl text-lg">
            We are hiring across engineering, operations, and several functions
            we have not yet defined. The interview process is rigorous,
            multi-stage, and occasionally collapses on its own.
          </p>
        </div>
      </section>

      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <SectionHeader eyebrow="Open roles" title="Currently observed positions." />
          <div className="mt-12 grid gap-4">
            {roles.map((r) => (
              <div
                key={r.title}
                className="panel p-6 grid md:grid-cols-12 gap-4 items-center hover:border-qaccent/60 transition-colors"
              >
                <div className="md:col-span-4">
                  <p className="font-display text-xl text-white">{r.title}</p>
                  <p className="mt-1 text-qaccent text-xs font-mono uppercase tracking-widest">
                    {r.team}
                  </p>
                </div>
                <div className="md:col-span-6 text-white/60 text-sm">{r.blurb}</div>
                <div className="md:col-span-2 flex md:justify-end">
                  <span className="tape">{r.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <SectionHeader
            eyebrow="Benefits"
            title="Why work here?"
            description="A non-exhaustive, possibly inaccurate list of perks."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {perks.map((p) => (
              <div key={p} className="panel p-5 flex gap-3">
                <span className="text-qpink">▸</span>
                <span className="text-white/75 text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <SectionHeader
            eyebrow="Don't see your role?"
            title="Apply anyway. Or don't. Or both."
            align="center"
          />
          <p className="mt-6 text-white/60">
            Send your résumé, cover letter, and a short essay on the measurement
            problem to{" "}
            <span className="text-qaccent font-mono">careers@splitthebit.com</span>.
          </p>
        </div>
      </section>
    </div>
  );
}
