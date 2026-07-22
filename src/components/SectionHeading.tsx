type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center items-center" : "text-left items-start";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.25em] ${
            light ? "text-accent" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl leading-tight sm:text-4xl ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-lg leading-relaxed ${light ? "text-white/75" : "text-muted"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
