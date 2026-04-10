const INDUSTRIES = [
  "Healthcare",
  "Fintech",
  "Security",
  "AI/ML",
  "IOT",
  "Martech",
  "Ecommerce",
] as const;

export default function IndustriesMarqueeSection() {
  const loop = [...INDUSTRIES, ...INDUSTRIES] as const;

  return (
    <section className="w-full bg-[#181818] px-4 py-8 text-white sm:px-6 md:py-9 lg:py-10">
      <p
        className="mx-auto max-w-[1080px] text-center text-[15px] font-medium leading-[1.35] tracking-[0] text-white md:text-[18px] lg:text-[22px]"
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 500, letterSpacing: "0" }}
      >
        We empower product focussed companies across
      </p>

      <div className="industries-marquee-mask mt-6 w-full overflow-hidden md:mt-7 lg:mt-10">
        <div className="industries-marquee-track flex w-max items-center gap-10 md:gap-14 lg:gap-[72px]">
          {loop.map((label, i) => (
            <span key={`${label}-${i}`} className="shrink-0 whitespace-nowrap text-[16px] font-medium leading-none text-white md:text-[18px] lg:text-[24px]">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
