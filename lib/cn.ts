/** Tiny className joiner — no dependency needed for this scale. */
export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}
