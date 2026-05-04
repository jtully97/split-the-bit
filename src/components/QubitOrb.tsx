export function QubitOrb() {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full border border-qaccent/30 animate-drift" />
      <div className="absolute inset-6 rounded-full border border-qpink/20 rotate-45" />
      <div className="absolute inset-12 rounded-full border border-qaccent/15 -rotate-12" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="h-40 w-40 rounded-full bg-gradient-to-br from-qaccent/40 to-qpink/30 blur-2xl absolute inset-0" />
          <div className="relative h-40 w-40 rounded-full border border-qaccent/60 bg-qbg/80 flex items-center justify-center">
            <span className="font-mono text-5xl text-qaccent glow">|ψ⟩</span>
          </div>
        </div>
      </div>
      <svg
        className="absolute inset-0 w-full h-full text-qaccent/40"
        viewBox="0 0 200 200"
        fill="none"
      >
        <ellipse cx="100" cy="100" rx="95" ry="40" stroke="currentColor" strokeWidth="0.5" />
        <ellipse cx="100" cy="100" rx="95" ry="40" stroke="currentColor" strokeWidth="0.5" transform="rotate(60 100 100)" />
        <ellipse cx="100" cy="100" rx="95" ry="40" stroke="currentColor" strokeWidth="0.5" transform="rotate(120 100 100)" />
      </svg>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 tape">
        |0⟩ + |1⟩ + |maybe⟩
      </div>
    </div>
  );
}
