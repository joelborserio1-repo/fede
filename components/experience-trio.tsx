const ITEMS = [
  {
    n: "i.",
    t: "In-home viewings",
    d: "We bring the collection to your home across Newcastle and the Hunter. Try everything on, in your own light, with no pressure.",
  },
  {
    n: "ii.",
    t: "Pop-ups",
    d: "Find us at appointment-only pop-ups in Sydney, Melbourne and the Gold Coast. A quiet room, a coffee, and the collection.",
  },
  {
    n: "iii.",
    t: "Made to order",
    d: "Once you've chosen, your ring is made for you alone. Your cut, your metal, your stone, delivered to your door.",
  },
];

/** Dark three-column feature. Used inside the espresso "Experience" band. */
export function ExperienceTrio() {
  return (
    <div className="mt-14 grid border-t border-[#3A342D] sm:grid-cols-3">
      {ITEMS.map((item, i) => (
        <div
          key={item.n}
          className={`px-8 py-11 text-center ${
            i < ITEMS.length - 1 ? "sm:border-r sm:border-[#3A342D]" : ""
          }`}
        >
          <div className="font-serif text-[22px] italic text-gold">
            {item.n}
          </div>
          <h3 className="mt-4 font-serif text-[27px] font-medium text-cream">
            {item.t}
          </h3>
          <p className="mx-auto mt-3 max-w-[30ch] text-[13.5px] leading-relaxed text-[#C9BFB0]">
            {item.d}
          </p>
        </div>
      ))}
    </div>
  );
}
