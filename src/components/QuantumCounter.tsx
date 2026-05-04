"use client";

import { useEffect, useState } from "react";

type Props = {
  label: string;
  base: number;
  unit?: string;
  jitter?: number;
  decimals?: number;
};

export function QuantumCounter({
  label,
  base,
  unit = "",
  jitter = 0.05,
  decimals = 0,
}: Props) {
  const [value, setValue] = useState(base);

  useEffect(() => {
    const id = setInterval(() => {
      const drift = (Math.random() - 0.5) * 2 * jitter * base;
      setValue(base + drift);
    }, 1200);
    return () => clearInterval(id);
  }, [base, jitter]);

  return (
    <div className="panel p-5">
      <p className="tape mb-2">{label}</p>
      <p className="font-mono text-3xl text-qaccent glow tabular-nums">
        {value.toLocaleString(undefined, {
          maximumFractionDigits: decimals,
          minimumFractionDigits: decimals,
        })}
        <span className="text-white/50 text-base ml-1">{unit}</span>
      </p>
      <p className="text-[10px] text-white/40 mt-2 font-mono uppercase tracking-widest">
        ±{Math.round(jitter * 100)}% per observation
      </p>
    </div>
  );
}
