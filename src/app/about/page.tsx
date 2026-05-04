import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About — Split the Bit",
};

const team = [
  {
    name: "Dr. Vela Marwick",
    role: "Co-founder & Chief Wavefunction Officer",
    bio: "Previously an unobserved postdoc. Holds a PhD in not finishing her PhD.",
  },
  {
    name: "Aldous Crane",
    role: "Co-founder & CEO (current branch)",
    bio: "Three-time YC dropout. Once explained quantum tunneling to a mortgage broker.",
  },
  {
    name: "M. Patel",
    role: "Chief Uncertainty Officer",
    bio: "Refuses to commit to any specific role description. Loves it here.",
  },
  {
    name: "Jonas K.",
    role: "Head of Decoherence",
    bio: "On-call for every wavefunction collapse, north of the equator.",
  },
  {
    name: "Halle Vox",
    role: "VP, Probabilistic Marketing",
    bio: "Increased brand awareness by some amount, in some direction, somewhere.",
  },
  {
    name: "B. Okafor",
    role: "Senior Schrödinger",
    bio: "We're not sure if she's still employed here. Neither is she.",
  },
];

const milestones = [
  ["2019", "Founded in a Y Combinator office that has since collapsed."],
  ["2020", "Raised $4M seed from investors who 'don’t really get it but vibe with it.'"],
  ["2021", "Pivoted from blockchain. Kept the slide deck."],
  ["2022", "First qubit. (Allegedly.)"],
  ["2023", "Featured in Quartz under the headline 'Why?'"],
  ["2024", "Series C led by a sovereign wealth fund of a country we cannot name."],
  ["2025", "Achieved quantum supremacy over a TI-83 calculator."],
  ["2026", "You are here. Or possibly here. Hard to say."],
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-qline/60 grid-bg">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="tape mb-4">◇ About</p>
          <h1 className="font-display text-5xl md:text-6xl text-white max-w-4xl leading-tight">
            We were founded to answer one question:{" "}
            <span className="text-qaccent glow">what if the bit, but worse?</span>
          </h1>
          <p className="mt-8 text-white/70 max-w-3xl text-lg leading-relaxed">
            Split the Bit was founded in 2019 in a parking garage and also a
            different parking garage simultaneously, by three former physicists
            who had collectively been asked to leave four research labs. We are
            now 142 people. Or 38. Headcount fluctuates with observation.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              eyebrow="Mission"
              title="Make every bit unsure of itself."
              description="We believe the next great leap in computing will not come from speed, accuracy, or memory — but from introducing tasteful amounts of doubt at the hardware level. Every Split the Bit product is built on this principle."
            />
          </div>
          <div className="space-y-5">
            <div className="panel p-6">
              <p className="tape text-qpink">Vision</p>
              <p className="mt-2 text-white/80 leading-relaxed">
                A world where computers and the people using them are equally
                unsure what is going on, leading to mutual respect and a flatter
                org chart.
              </p>
            </div>
            <div className="panel p-6">
              <p className="tape text-qpink">Values</p>
              <ul className="mt-2 space-y-2 text-white/70 text-sm">
                <li>▸ Move fast and entangle things.</li>
                <li>▸ Be the change you cannot reliably observe.</li>
                <li>▸ When in doubt, doubt harder.</li>
                <li>▸ The best meeting is the one that may not have occurred.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <SectionHeader
            eyebrow="Timeline"
            title="A non-linear history."
            description="Events are presented chronologically as a courtesy to classical readers."
          />
          <ol className="mt-12 space-y-5">
            {milestones.map(([year, what]) => (
              <li key={year} className="panel p-5 flex gap-6 items-start">
                <span className="font-mono text-2xl text-qaccent glow w-20 shrink-0">
                  {year}
                </span>
                <span className="text-white/80">{what}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAM */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeader
            eyebrow="Leadership"
            title="The observers."
            description="Each member of the leadership team simultaneously runs and does not run their function. Org chart available upon NDA."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="panel p-6">
                <div className="h-32 rounded-md bg-gradient-to-br from-qaccent/20 via-qpink/10 to-qbg flex items-center justify-center font-mono text-3xl text-qaccent/60">
                  {m.name
                    .split(" ")
                    .map((s) => s[0])
                    .join("")}
                </div>
                <p className="mt-4 font-display text-lg text-white">{m.name}</p>
                <p className="text-qaccent text-xs font-mono mt-0.5 uppercase tracking-widest">
                  {m.role}
                </p>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="border-b border-qline/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <SectionHeader
            eyebrow="Recognition"
            title="Awards we may or may not have received."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              "Gartner Magic Lower Quadrant — Honorable Mention",
              "Fast Company Most Innovative Verbs (2024)",
              "Forbes 30 Under Quantifiable",
              "TechCrunch Disrupt — Stage Time Refunded",
              "ISO 9001:Aspirational",
              "Listed in Crunchbase, technically",
            ].map((a) => (
              <div key={a} className="panel p-5 flex items-center gap-3">
                <span className="text-qaccent">◆</span>
                <span className="text-white/70 text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
