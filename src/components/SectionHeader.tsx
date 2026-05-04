type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {eyebrow && <p className="tape mb-3">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-display tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-white/60 text-base leading-relaxed">{description}</p>
      )}
    </div>
  );
}
