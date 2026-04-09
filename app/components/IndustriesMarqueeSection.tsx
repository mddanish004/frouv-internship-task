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
    <section className="w-full bg-[#181818] px-4 py-10 text-white sm:px-6 md:py-14 lg:py-[76px]">
      <p
        className="mx-auto max-w-[980px] text-center text-[16px] font-medium leading-[1.3] tracking-[0] text-white md:text-[20px] lg:text-[24px]"
        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 500, letterSpacing: "0" }}
      >
        We empower product focussed companies across
      </p>

      <div className="industries-marquee-mask mt-6 w-full overflow-hidden md:mt-8 lg:mt-[52px]">
        <div className="industries-marquee-track flex w-max items-center gap-10 md:gap-14 lg:gap-[76px]">
          {loop.map((label, i) => (
            <span key={`${label}-${i}`} className="shrink-0 whitespace-nowrap text-[16px] font-bold leading-none text-white md:text-[18px] lg:text-[22px]">
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
