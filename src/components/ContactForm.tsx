"use client";

import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";

type Stage = "idle" | "measuring" | "collapsed";

const measurementSteps = [
  "Initializing observer apparatus...",
  "Routing inquiry through ψ-Cloud (us-east-∞)...",
  "Entangling your message with our customer success org...",
  "Splitting the bit...",
  "Splitting the bit (again, harder)...",
  "Consulting Veridian Capital for prior probability...",
  "Cross-referencing your CFO compatibility score...",
  "Asking the qubit if it's awake (it isn't)...",
  "Calibrating Schrödinger meter to local gravitational field...",
  "Verifying inquiry exists in at least one timeline...",
  "Collapsing wavefunction in 3... 2... ▒▒▒...",
];

const honorifics = [
  "Dr.",
  "Prof.",
  "Citizen",
  "Observer",
  "Stakeholder",
  "Wave-Carrier",
  "Junior Partner",
];

const departments = [
  "Decoherence",
  "Probabilistic Marketing",
  "Many-Worlds Legal",
  "Schrödinger Operations",
  "Founder's Inbox (one of)",
  "Veridian Liaisons",
  "On-Call Qubit (Q-001)",
];

const verdicts = [
  {
    headline: "Your inquiry has been classified as ESPRESSO.",
    detail:
      "Per our internal taxonomy, this is the most aggressive response category. A regional account executive will reach out, possibly already.",
  },
  {
    headline: "Your inquiry has been classified as ICED.",
    detail:
      "We will get to it. Cold inquiries are processed in a relaxed, vibe-forward order over the next 6–18 quarters.",
  },
  {
    headline: "Your inquiry has been classified as BREW*.",
    detail:
      "Nobody on the customer team knows what to do with Brew*. Two engineers have been asked. They are both unavailable.",
  },
  {
    headline: "Your inquiry has been classified as STEAMED.",
    detail:
      "We are sorry. A founder will personally respond, in the form of a thoughtful tweet that does not mention you by name.",
  },
];

const omens = [
  "The qubit briefly spelled your initials before returning to noise.",
  "Three calendar invites were generated and immediately deleted.",
  "A sales engineer in Pittsburgh sneezed.",
  "The marketing wavefunction trembled.",
  "An intern wrote your name on a Post-it. The Post-it is gone now.",
  "The CFO of a competitor felt a vague unease.",
  "Veridia issued a stamp.",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function hash(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function ContactForm() {
  const [stage, setStage] = useState<Stage>("idle");
  const [stepIdx, setStepIdx] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    use_case: "Disrupt my industry probabilistically",
    message: "",
  });
  const [verdict, setVerdict] = useState<{
    inquiryId: string;
    branch: string;
    received: number;
    coffee: (typeof verdicts)[number];
    honorific: string;
    department: string;
    eta: string;
    schrodinger: number;
    omen: string;
    timestamp: string;
  } | null>(null);

  const audioRef = useRef<AudioContext | null>(null);
  const beep = (freq: number) => {
    if (typeof window === "undefined") return;
    try {
      audioRef.current ??= new (window.AudioContext ||
        // @ts-expect-error vendor prefix
        window.webkitAudioContext)();
      const ctx = audioRef.current;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "square";
      o.frequency.value = freq;
      g.gain.value = 0.02;
      o.connect(g).connect(ctx.destination);
      o.start();
      o.stop(ctx.currentTime + 0.06);
    } catch {
      /* user denied audio, the universe carries on */
    }
  };

  useEffect(() => {
    if (stage !== "measuring") return;
    if (stepIdx >= measurementSteps.length) {
      // Compute verdict deterministically-ish from form contents
      const seed = hash(form.email + form.name + Date.now().toString());
      const branch = (seed % 4096) + 1;
      const probability = 50 + (seed % 50);
      const inquiryId = `ψ-${seed.toString(16).slice(0, 4).toUpperCase()}-${(seed % 9999)
        .toString()
        .padStart(4, "0")}`;
      const etaDays = (seed % 90) + 2;
      setVerdict({
        inquiryId,
        branch: `${branch.toLocaleString()} / 4,096`,
        received: probability,
        coffee: pick(verdicts),
        honorific: pick(honorifics),
        department: pick(departments),
        eta: `${etaDays} business days (Veridian calendar)`,
        schrodinger: Math.round((seed % 10000) / 100) / 10,
        omen: pick(omens),
        timestamp: new Date().toISOString(),
      });
      setStage("collapsed");
      beep(880);
      return;
    }
    const t = setTimeout(() => {
      beep(220 + stepIdx * 40);
      setStepIdx((i) => i + 1);
    }, 320 + Math.random() * 280);
    return () => clearTimeout(t);
  }, [stage, stepIdx, form.email, form.name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStage("measuring");
    setStepIdx(0);
    beep(110);
  };

  const reset = () => {
    setStage("idle");
    setStepIdx(0);
    setVerdict(null);
    setForm({
      name: "",
      email: "",
      use_case: "Disrupt my industry probabilistically",
      message: "",
    });
  };

  if (stage === "measuring") {
    return (
      <div className="panel p-8 min-h-[540px] flex flex-col">
        <p className="tape text-qpink animate-flicker mb-6">
          ◇ Measurement in progress · do not observe
        </p>
        <h3 className="font-display text-2xl text-white">
          Collapsing your inquiry&apos;s wavefunction
          <span className="inline-block w-2 h-5 bg-qaccent ml-2 align-middle animate-flicker" />
        </h3>
        <div className="mt-8 font-mono text-sm space-y-1.5 flex-1">
          {measurementSteps.slice(0, stepIdx).map((s, i) => (
            <div key={i} className="text-white/70">
              <span className="text-qaccent">[{(i + 1).toString().padStart(2, "0")}]</span>{" "}
              {s} <span className="text-qlime">OK</span>
            </div>
          ))}
          {stepIdx < measurementSteps.length && (
            <div className="text-qaccent">
              <span className="text-qaccent">[{(stepIdx + 1).toString().padStart(2, "0")}]</span>{" "}
              {measurementSteps[stepIdx]}
              <span className="inline-block w-2 h-4 bg-qaccent ml-1 animate-flicker" />
            </div>
          )}
        </div>
        <div className="mt-6 h-1 bg-qline overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-qaccent via-qpink to-qaccent transition-all duration-300"
            style={{
              width: `${(stepIdx / measurementSteps.length) * 100}%`,
            }}
          />
        </div>
      </div>
    );
  }

  if (stage === "collapsed" && verdict) {
    return (
      <div className="panel panel-pink p-8 space-y-6">
        <div>
          <p className="tape text-qpink mb-2 animate-flicker">
            ◇ Wavefunction collapsed · receipt issued
          </p>
          <h3 className="font-display text-3xl text-white leading-tight">
            Thank you,{" "}
            <span className="text-qaccent glow">
              {verdict.honorific} {form.name || "Anonymous Observer"}
            </span>
            .
          </h3>
          <p className="mt-3 text-white/70">
            Your inquiry has been received in{" "}
            <span className="text-qaccent font-mono">{verdict.received}%</span>{" "}
            of observed timelines and routed to the{" "}
            <span className="text-qpink">{verdict.department}</span> team.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="border border-qline p-3 bg-qbg/60">
            <p className="tape mb-1">Inquiry ID</p>
            <p className="font-mono text-qaccent text-base">{verdict.inquiryId}</p>
          </div>
          <div className="border border-qline p-3 bg-qbg/60">
            <p className="tape mb-1">Timeline branch</p>
            <p className="font-mono text-qaccent text-base">{verdict.branch}</p>
          </div>
          <div className="border border-qline p-3 bg-qbg/60">
            <p className="tape mb-1">Schrödinger reading</p>
            <p className="font-mono text-qaccent text-base">
              {verdict.schrodinger} μψ
            </p>
          </div>
          <div className="border border-qline p-3 bg-qbg/60">
            <p className="tape mb-1">Estimated response</p>
            <p className="font-mono text-qaccent text-base">{verdict.eta}</p>
          </div>
        </div>

        <div className="border border-qpink/40 bg-qpink/5 p-4">
          <p className="tape text-qpink mb-1">Verdict</p>
          <p className="font-display text-lg text-white">
            {verdict.coffee.headline}
          </p>
          <p className="mt-2 text-white/70 text-sm">{verdict.coffee.detail}</p>
        </div>

        <div className="border border-qline p-4">
          <p className="tape mb-1">Side effects observed</p>
          <p className="text-white/80 italic">“{verdict.omen}”</p>
        </div>

        <div className="text-[10px] font-mono text-white/40 border-t border-qline pt-3 leading-relaxed">
          Receipt #{verdict.inquiryId} · issued {verdict.timestamp} ·{" "}
          this document is legally binding in 1 of 4,096 timelines · do not
          fold, mutilate, or observe twice
        </div>

        <button onClick={reset} className="qbtn w-full justify-center">
          ↺ Submit another inquiry (different timeline)
        </button>
      </div>
    );
  }

  return (
    <form className="panel p-8 space-y-5" onSubmit={handleSubmit}>
      <SectionHeader title="Request decoherence" />
      <div>
        <label className="tape mb-2 block">Name (any branch)</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full bg-qbg/80 border border-qline px-4 py-3 text-white font-mono focus:outline-none focus:border-qaccent"
          placeholder="Dr. Anonymous"
        />
      </div>
      <div>
        <label className="tape mb-2 block">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full bg-qbg/80 border border-qline px-4 py-3 text-white font-mono focus:outline-none focus:border-qaccent"
          placeholder="you@yourcompany.com"
        />
      </div>
      <div>
        <label className="tape mb-2 block">Use case</label>
        <select
          name="use_case"
          value={form.use_case}
          onChange={(e) => setForm({ ...form, use_case: e.target.value })}
          className="w-full bg-qbg/80 border border-qline px-4 py-3 text-white font-mono focus:outline-none focus:border-qaccent"
        >
          <option>Disrupt my industry probabilistically</option>
          <option>Avoid being measured by regulators</option>
          <option>I am a regulator, please measure me</option>
          <option>Replace my engineers with a single qubit</option>
          <option>Other (also probably this)</option>
        </select>
      </div>
      <div>
        <label className="tape mb-2 block">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          className="w-full bg-qbg/80 border border-qline px-4 py-3 text-white font-mono focus:outline-none focus:border-qaccent"
          placeholder="What problem would you like us to make non-deterministic?"
        />
      </div>
      <label className="flex items-start gap-3 text-xs text-white/50">
        <input type="checkbox" className="mt-1 accent-qaccent" />
        <span>
          I consent to my message existing and not existing for marketing
          purposes.
        </span>
      </label>
      <button type="submit" className="qbtn qbtn-pink w-full justify-center">
        ▶ Collapse my wavefunction
      </button>
    </form>
  );
}
