import { ReactNode } from "react";
import Image from "next/image";

function ToolIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <Image src={src} alt={alt} width={36} height={36} className="h-9 w-9 shrink-0 rounded-[10px] object-cover" />
  );
}

const TOOL_ICONS = {
  ai: "/services-tool-icons/ai.png",
  figma: "/services-tool-icons/figma.png",
  framer: "/services-tool-icons/framer.png",
  ae: "/services-tool-icons/ae.png",
  webflow: "/services-tool-icons/webflow.png",
  vscode: "/services-tool-icons/vscode.png",
  slides: "/services-tool-icons/slides.png",
  hubspot: "/services-tool-icons/hubspot.png",
  cal: "/services-tool-icons/cal.png",
  notion: "/services-tool-icons/notion.png",
} as const;

function GraphicBranding() {
  return (
    <div className="relative h-full w-full bg-[#e8e4df]">
      <Image
        src="/services-images/blokly.png"
        alt="Blokly brand"
        width={160}
        height={160}
        className="absolute left-3 top-4 h-[150px] w-[150px] rotate-[-8deg] rounded-[14px] object-cover shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
      />
      <Image
        src="/services-images/whatever.png"
        alt="Whatever brand"
        width={150}
        height={150}
        className="absolute right-3 top-6 h-[140px] w-[140px] rotate-6 rounded-[14px] object-cover shadow-[0_14px_32px_rgba(0,0,0,0.2)]"
      />
    </div>
  );
}

function GraphicProductDesign() {
  return (
    <div className="relative h-full w-full bg-[#dfe3ea]">
      <Image
        src="/services-images/servicehub-composite.png"
        alt="ServiceHub product design"
        width={320}
        height={210}
        className="absolute inset-0 h-full w-full object-contain p-2"
      />
    </div>
  );
}

function GraphicMarketingDesign() {
  return (
    <div className="relative h-full w-full bg-[#dcd8d3]">
      <Image
        src="/services-images/design-service-laptop.png"
        alt="Design and Service Agency"
        width={160}
        height={150}
        className="absolute left-2 top-4 h-[155px] w-auto rotate-[-4deg] rounded-[10px] object-contain shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
      />
      <Image
        src="/services-images/organic.png"
        alt="Organic brand"
        width={140}
        height={140}
        className="absolute bottom-2 right-2 h-[130px] w-[130px] rounded-[12px] object-cover shadow-[0_10px_22px_rgba(0,0,0,0.15)]"
      />
    </div>
  );
}

function GraphicProductDevelopment() {
  return (
    <div className="relative h-full w-full bg-[#d6dae3]">
      <Image
        src="/services-images/ai-browser.png"
        alt="Artificial Intelligence website"
        width={190}
        height={140}
        className="absolute left-2 top-4 h-[140px] w-auto rounded-[12px] object-contain shadow-[0_12px_28px_rgba(0,0,0,0.2)]"
      />
      <Image
        src="/services-images/design-agency.png"
        alt="Design Agency website"
        width={150}
        height={120}
        className="absolute bottom-3 right-2 h-[120px] w-auto rounded-[10px] object-contain shadow-[0_10px_24px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function GraphicPitchDeck() {
  return (
    <div className="relative h-full w-full bg-[#ddd6e8]">
      <Image
        src="/services-images/ai-training.png"
        alt="AI-powered training videos"
        width={160}
        height={150}
        className="absolute left-2 top-4 h-[155px] w-auto -rotate-6 rounded-[12px] object-contain shadow-[0_12px_26px_rgba(0,0,0,0.14)]"
      />
      <Image
        src="/services-images/safe-round.png"
        alt="₹5M seed round via SAFE"
        width={140}
        height={120}
        className="absolute bottom-3 right-2 h-[120px] w-auto rounded-[12px] object-contain shadow-[0_10px_22px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
}

function GraphicGTM() {
  return (
    <div className="relative h-full w-full bg-[#cfc8e3]">
      <Image
        src="/services-images/gtm-plan-purple.png"
        alt="The GTM Plan"
        width={150}
        height={140}
        className="absolute right-2 top-3 h-[140px] w-auto rounded-[12px] object-contain shadow-[0_10px_24px_rgba(124,58,237,0.35)]"
      />
      <Image
        src="/services-images/gtm-plan-white.png"
        alt="GTM PLAN notecard"
        width={160}
        height={150}
        className="absolute bottom-2 left-2 h-[150px] w-auto rotate-[-5deg] rounded-[12px] object-contain shadow-[0_12px_26px_rgba(0,0,0,0.12)]"
      />
    </div>
  );
}

function ServiceShowcaseCard({
  title,
  description,
  graphic,
  tools,
}: {
  title: string;
  description: string;
  graphic: ReactNode;
  tools: ReactNode;
}) {
  return (
    <article className="flex flex-col">
      <div className="overflow-hidden rounded-[26px] bg-white shadow-[0_10px_44px_rgba(0,0,0,0.07)]">
        <div className="bg-[#ececee] px-4 pb-0 pt-4">
          <div className="relative h-[210px] overflow-hidden rounded-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
            {graphic}
          </div>
        </div>
        <div className="relative z-10 -mt-[52px] px-4 pb-6 pt-0">
          <div className="rounded-[22px] bg-white px-5 pb-6 pt-4 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="mb-5 inline-flex flex-wrap gap-2 rounded-[14px] border border-[#ececec] bg-[#f5f5f6] p-[10px]">
              {tools}
            </div>
            <h3 className="text-[19px] font-bold leading-snug text-black">{title}</h3>
            <p className="mt-3 text-[15px] font-normal leading-relaxed text-[#666666]">{description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

const CARDS = [
  {
    title: "Branding & Identity",
    description: "Build a memorable brand through strategic design and visual storytelling.",
    graphic: <GraphicBranding />,
    tools: (
      <>
        <ToolIcon src={TOOL_ICONS.ai} alt="Adobe Illustrator" />
        <ToolIcon src={TOOL_ICONS.figma} alt="Figma" />
      </>
    ),
  },
  {
    title: "Product Design",
    description: "Turn ideas into market-ready products with user-centered design and innovation.",
    graphic: <GraphicProductDesign />,
    tools: (
      <>
        <ToolIcon src={TOOL_ICONS.figma} alt="Figma" />
        <ToolIcon src={TOOL_ICONS.framer} alt="Framer" />
      </>
    ),
  },
  {
    title: "Marketing Design",
    description: "Build a memorable brand through strategic design and visual storytelling.",
    graphic: <GraphicMarketingDesign />,
    tools: (
      <>
        <ToolIcon src={TOOL_ICONS.figma} alt="Figma" />
        <ToolIcon src={TOOL_ICONS.ae} alt="Adobe After Effects" />
        <ToolIcon src={TOOL_ICONS.ai} alt="Adobe Illustrator" />
      </>
    ),
  },
  {
    title: "Product Development",
    description: "Data-driven market strategies to accelerate growth and enhance your business.",
    graphic: <GraphicProductDevelopment />,
    tools: (
      <>
        <ToolIcon src={TOOL_ICONS.webflow} alt="Webflow" />
        <ToolIcon src={TOOL_ICONS.vscode} alt="Visual Studio Code" />
        <ToolIcon src={TOOL_ICONS.figma} alt="Figma" />
      </>
    ),
  },
  {
    title: "Investment Pitch Deck",
    description: "Crafting compelling narratives that turn ideas into investor-ready presentations.",
    graphic: <GraphicPitchDeck />,
    tools: (
      <>
        <ToolIcon src={TOOL_ICONS.slides} alt="Google Slides" />
        <ToolIcon src={TOOL_ICONS.ai} alt="Adobe Illustrator" />
        <ToolIcon src={TOOL_ICONS.figma} alt="Figma" />
      </>
    ),
  },
  {
    title: "Go to Market Strategy",
    description: "Data-driven market strategies to accelerate growth and enhance your business.",
    graphic: <GraphicGTM />,
    tools: (
      <>
        <ToolIcon src={TOOL_ICONS.hubspot} alt="HubSpot" />
        <ToolIcon src={TOOL_ICONS.cal} alt="Calendly" />
        <ToolIcon src={TOOL_ICONS.notion} alt="Notion" />
      </>
    ),
  },
];

export default function OurServicesSection() {
  return (
    <section className="w-full bg-[#F9F9F9] px-4 py-12 sm:px-6 md:py-16 lg:py-[88px]">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-[#d8b4fe] bg-[#faf5ff] px-5 py-2 text-[14px] font-medium text-[#A855F7]">
          Our Services
        </div>
        <h2 className="mt-5 text-center text-[26px] font-bold leading-tight tracking-[-0.3px] text-black md:text-[34px] md:tracking-[-0.4px] lg:text-[42px] lg:tracking-[-0.5px]">
          What we bring to your table
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-10 md:grid-cols-2 md:gap-y-12 lg:mt-14 lg:grid-cols-3">
          {CARDS.map((card) => (
            <ServiceShowcaseCard
              key={card.title}
              title={card.title}
              description={card.description}
              graphic={card.graphic}
              tools={card.tools}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
