import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Renders the ring photograph when one exists, otherwise a warm editorial
 * placeholder so the portfolio still reads as a finished layout pre-photography.
 */
export function RingImage({
  src,
  label,
  className,
  ratio = "aspect-[5/6]",
}: {
  src?: string | null;
  label?: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-sand", ratio, className)}>
      {src ? (
        <Image
          src={src}
          alt={label ? `Fede ${label}` : "Fede ring"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 ease-soft"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Quiet placeholder mark — a facetted stone glyph */}
          <svg
            viewBox="0 0 80 80"
            className="h-16 w-16 text-line"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            aria-hidden
          >
            <path d="M20 30 L40 12 L60 30 L40 68 Z" />
            <path d="M20 30 L60 30" />
            <path d="M40 12 L32 30 L40 68 M40 12 L48 30 L40 68" />
          </svg>
        </div>
      )}
    </div>
  );
}
