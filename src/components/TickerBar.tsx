const items = [
  "QBIT $4,201.07 ▲ 14.2%",
  "BREAKING: Split the Bit achieves quantum supremacy over a TI-83",
  "Q-COFFEE™ now ships in superposition (hot AND cold)",
  "Series F led by a hedge fund that does not technically exist",
  "Schrödinger's roadmap published — both shipped and not shipped",
  "Qubit count: 4 · also 4,000,000 · we will not be taking questions",
  "ψ-CLOUD region us-east-∞ now generally available in the multiverse",
];

export function TickerBar() {
  const loop = [...items, ...items];
  return (
    <div className="border-b border-qline/80 bg-qpanel/70 overflow-hidden">
      <div className="relative whitespace-nowrap py-1.5">
        <div className="inline-flex animate-[scan_40s_linear_infinite] gap-10 pl-6 [animation-name:marquee]">
          {loop.map((t, i) => (
            <span
              key={i}
              className="font-mono text-[11px] tracking-widest text-white/60 uppercase"
            >
              <span className="text-qaccent">◇</span> {t}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-\\[scan_40s_linear_infinite\\] {
            animation: marquee 60s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
}
