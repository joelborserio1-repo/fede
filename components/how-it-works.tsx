const STEPS = [
  {
    n: "i.",
    t: "Book a consult",
    d: "Start with a relaxed video or phone chat so we understand what you're after, your budget and your timing.",
  },
  {
    n: "ii.",
    t: "See it in person",
    d: "We visit you at home across Newcastle, or you catch us at a pop-up in Sydney, Melbourne or the Gold Coast.",
  },
  {
    n: "iii.",
    t: "Made & delivered",
    d: "We craft your ring to order and deliver it, insured, to your door, with its certificate.",
  },
];

export function HowItWorks() {
  return (
    <div className="mt-14 grid gap-px border border-line bg-line sm:grid-cols-3">
      {STEPS.map((s) => (
        <div key={s.n} className="bg-cream px-8 py-12 text-center">
          <div className="font-serif text-[22px] italic text-gold">{s.n}</div>
          <h3 className="mt-4 font-serif text-[27px] font-medium">{s.t}</h3>
          <p className="mx-auto mt-3 max-w-[30ch] text-[13.5px] leading-relaxed text-stone">
            {s.d}
          </p>
        </div>
      ))}
    </div>
  );
}
