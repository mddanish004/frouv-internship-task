import Image from "next/image";
import { ReactNode } from "react";

function Tag({ children, variant }: { children: ReactNode; variant: "blue" | "warm" }) {
  const cls =
    variant === "blue"
      ? "bg-[#E0F2FE] text-[#075985]"
      : "bg-[#FFEDD5] text-[#9A3412]";
  return <span className={`rounded-full px-3 py-1 text-[12px] font-semibold leading-none ${cls}`}>{children}</span>;
}

function WorkPreview({ src, alt }: { src: string; alt: string }) {
  return (
    <Image src={src} alt={alt} width={960} height={540} className="h-full w-full object-cover" />
  );
}

function PortfolioCard({
  title,
  description,
  tag1,
  tag2,
  preview,
}: {
  title: string;
  description: string;
  tag1: { label: string; variant: "blue" | "warm" };
  tag2: { label: string; variant: "blue" | "warm" };
  preview: ReactNode;
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-[#f0f0f0] bg-white p-6 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
      <div className="aspect-16/10 w-full overflow-hidden rounded-[10px] ring-1 ring-black/4">{preview}</div>
      <div className="mt-5 flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-[18px] font-bold leading-tight text-[#1a1a1a]">{title}</h3>
        <div className="flex shrink-0 flex-wrap justify-end gap-2">
          <Tag variant={tag1.variant}>{tag1.label}</Tag>
          <Tag variant={tag2.variant}>{tag2.label}</Tag>
        </div>
      </div>
      <p className="mt-3 text-left text-[14px] font-normal leading-relaxed text-[#666666]">{description}</p>
    </article>
  );
}

const PROJECTS = [
  {
    title: "Sevaa",
    description: "An AI powered on demand home service platform providing housekeeping services in 15 min",
    tag1: { label: "UX Design", variant: "warm" as const },
    tag2: { label: "Landing Page", variant: "blue" as const },
    preview: <WorkPreview src="/our-work-images/sevaa-landing.png" alt="Sevaa landing page" />,
  },
  {
    title: "EventGo",
    description: "Book the tickets for your favorite events from your nearby places without any hassle",
    tag1: { label: "UX Design", variant: "warm" as const },
    tag2: { label: "Web App", variant: "blue" as const },
    preview: <WorkPreview src="/our-work-images/eventgo-web.png" alt="EventGo web app" />,
  },
  {
    title: "Landing Banner",
    description: "Landing page banner for organic and sustainable marketplace to enhance their branding",
    tag1: { label: "Branding", variant: "blue" as const },
    tag2: { label: "Marketing Content", variant: "warm" as const },
    preview: <WorkPreview src="/our-work-images/landing-banner.png" alt="Organic oils landing banner" />,
  },
  {
    title: "Sevaa",
    description: "Book your on spot housekeeping services and get service in 15 mins near your doorstep",
    tag1: { label: "UI Design", variant: "warm" as const },
    tag2: { label: "Mobile App", variant: "blue" as const },
    preview: <WorkPreview src="/our-work-images/sevaa-mobile.png" alt="Sevaa mobile app screens" />,
  },
  {
    title: "Investment Pitch Deck",
    description:
      "Designing business that benefit people & planet and projects rooted in transparency, trust, and traceability",
    tag1: { label: "Fundraising", variant: "blue" as const },
    tag2: { label: "Pitch Deck", variant: "warm" as const },
    preview: <WorkPreview src="/our-work-images/investment-pitch-deck.png" alt="Investment pitch deck slide" />,
  },
  {
    title: "Product Strategy",
    description: "Strategic decisions that drive growth and aligning market opportunity with execution",
    tag1: { label: "GTM", variant: "blue" as const },
    tag2: { label: "Product roadmap", variant: "warm" as const },
    preview: <WorkPreview src="/our-work-images/product-strategy.png" alt="Product strategy roadmap" />,
  },
  {
    title: "Seller Dashboard",
    description: "Manage your business in one place and everything you need to sell, simplified",
    tag1: { label: "UI Design", variant: "blue" as const },
    tag2: { label: "Admin Panel", variant: "warm" as const },
    preview: <WorkPreview src="/our-work-images/seller-dashboard.png" alt="Seller dashboard UI" />,
  },
  {
    title: "Flats Hunting Platform",
    description:
      "A real time platform to find flats and flat mates without putting brokerage across multiple metropolitan cities",
    tag1: { label: "SaaS", variant: "blue" as const },
    tag2: { label: "Web App", variant: "warm" as const },
    preview: <WorkPreview src="/our-work-images/flats-hunting-platform.png" alt="Flats hunting platform web app" />,
  },
];

export default function OurWorkSection() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:py-16 lg:py-[88px]">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-[#d8b4fe] bg-[#faf5ff] px-5 py-2 text-[14px] font-medium text-[#A855F7]">
          Our Work
        </div>
        <h2 className="mt-5 text-center text-[24px] font-bold leading-tight tracking-[-0.2px] text-[#1a1a1a] md:text-[28px] md:tracking-[-0.3px] lg:text-[34px]">
          Crafted with Purpose
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 md:mt-10 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:mt-14 lg:gap-x-10 lg:gap-y-12">
          {PROJECTS.map((p, index) => (
            <PortfolioCard
              key={index}
              title={p.title}
              description={p.description}
              tag1={p.tag1}
              tag2={p.tag2}
              preview={p.preview}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
