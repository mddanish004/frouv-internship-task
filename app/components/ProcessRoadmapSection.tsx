import Image from "next/image";

function StepIconTile({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative inline-flex">
      <Image src={src} alt={alt} width={220} height={203} className="h-[82px] w-[88px] object-contain" />
    </div>
  );
}

const STEPS = [
  {
    timeframe: "Week 1-2",
    title: "Discovery & Research",
    description:
      "We dive deep into your business, market, and audience to understand opportunities and challenges.",
    iconSrc: "/process-roadmap-icons/discovery-research.png",
    iconAlt: "Discovery and research icon",
  },
  {
    timeframe: "Week 2-3",
    title: "Strategy Development",
    description: "Create comprehensive GTM strategy including positioning, messaging, and channel mix.",
    iconSrc: "/process-roadmap-icons/strategy-development.png",
    iconAlt: "Strategy development icon",
  },
  {
    timeframe: "Week 3-5",
    title: "Brand & Creative",
    description: "Design compelling brand assets and marketing materials that bring your strategy to life.",
    iconSrc: "/process-roadmap-icons/brand-creative.png",
    iconAlt: "Brand and creative icon",
  },
  {
    timeframe: "Week 5-6",
    title: "Launch & Activation",
    description: "Execute coordinated launch across all channels with precision timing and messaging.",
    iconSrc: "/process-roadmap-icons/launch-activation.png",
    iconAlt: "Launch and activation icon",
  },
  {
    timeframe: "Ongoing",
    title: "Monitor & Measure",
    description: "Track performance metrics in real-time and gather insights for optimization.",
    iconSrc: "/process-roadmap-icons/monitor-measure.png",
    iconAlt: "Monitor and measure icon",
  },
  {
    timeframe: "Ongoing",
    title: "Optimize & Scale",
    description: "Continuously refine and scale what works, ensuring sustainable growth.",
    iconSrc: "/process-roadmap-icons/optimize-scale.png",
    iconAlt: "Optimize and scale icon",
  },
];

export default function ProcessRoadmapSection() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 md:py-9 lg:py-10">
      <div className="mx-auto w-full max-w-[960px]">
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-[#d8b4fe] bg-[#faf5ff] px-5 py-2 text-[14px] font-medium text-[#A855F7] lg:text-[17px]">
          Our Process
        </div>
        <h2 className="mt-5 text-center text-[24px] font-semibold leading-[1.15] tracking-[-0.2px] text-[#111827] md:text-[32px] md:tracking-[-0.3px] lg:text-[48px] lg:tracking-[-0.4px]">
          Your Roadmap to Market Success
        </h2>
        <p className="mx-auto mt-4 max-w-[900px] text-center text-[14px] font-normal leading-[1.75] text-[#6b7280] md:mt-5 md:text-[16px] lg:text-[20px] lg:leading-normal">
          We follow a proven framework that takes your brand from strategy to market launch and beyond, with clear
          milestones and measurable outcomes at every stage.
        </p>

        <div className="mt-8 md:mt-10 lg:mt-14">
          {STEPS.map((step) => (
            <div key={step.title} className="mb-9 last:mb-0 md:mb-10 lg:mb-14">
              <div className="text-left">
                <p className="text-[13px] font-medium leading-none text-[#9333ea] lg:text-[16px]">{step.timeframe}</p>
                <h3 className="mt-2 text-[17px] font-medium leading-snug text-[#111827] lg:text-[28px]">{step.title}</h3>
                <p className="mt-2 text-[14px] font-normal leading-[1.65] text-[#6b7280] lg:text-[19px] lg:leading-normal">{step.description}</p>
              </div>
              <div className="mt-6 flex justify-center lg:mt-8">
                <StepIconTile src={step.iconSrc} alt={step.iconAlt} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
