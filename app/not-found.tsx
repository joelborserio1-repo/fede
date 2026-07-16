import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-32">
      <div className="wrap text-center">
        <span className="eyebrow">Not found</span>
        <h1 className="display mt-5 text-[clamp(40px,6vw,72px)]">
          Nothing here
        </h1>
        <p className="mx-auto mt-4 max-w-[42ch] text-[15px] text-stone">
          The page you were after has moved or never existed. The collection is
          the best place to start.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/" className="btn btn-line">
            Home
          </Link>
          <Link href="/collection" className="btn btn-fill">
            The Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
