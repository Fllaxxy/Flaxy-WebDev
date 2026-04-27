type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-blue">
        {eyebrow}
      </p>
      <h2 className={`text-3xl font-semibold leading-tight tracking-tightish md:text-5xl ${tone === "dark" ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${tone === "dark" ? "text-white/68" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
