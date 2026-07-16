import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "eyebrow block",
            align === "center" ? "mb-4" : "mb-4",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "display text-[clamp(34px,5vw,50px)]",
          tone === "light" ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-4 text-[15px] leading-relaxed",
            align === "center" ? "mx-auto max-w-[52ch]" : "max-w-[52ch]",
            tone === "light" ? "text-[#C9BFB0]" : "text-stone",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}
