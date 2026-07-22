type GradientPhoneLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
  animated?: boolean;
};

export function GradientPhoneLink({
  href,
  children,
  className = "",
  size = "sm",
  animated = false,
}: GradientPhoneLinkProps) {
  const padding =
    size === "md"
      ? "px-4 py-3.5 text-sm sm:px-8"
      : "px-4 py-2.5 text-sm sm:px-5";
  const linkClassName = `relative z-10 inline-flex w-full min-w-0 items-center justify-center rounded-full bg-primary font-semibold text-white transition-colors duration-300 hover:bg-primary-dark sm:w-auto ${padding}`;
  const wrapperClassName = `relative flex w-full max-w-full rounded-full sm:inline-flex sm:w-auto ${className}`;

  if (!animated) {
    return (
      <a href={href} className={linkClassName}>
        {children}
      </a>
    );
  }

  return (
    <span
      className={`${wrapperClassName} gradient-phone-border p-[3px] shadow-[0_0_12px_rgba(255,255,255,0.25)]`}
    >
      <a href={href} className={linkClassName}>
        {children}
      </a>
    </span>
  );
}
