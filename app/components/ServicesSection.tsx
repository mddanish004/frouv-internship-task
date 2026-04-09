import { ReactNode } from "react";

function PaintbrushIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18.2 5.8L18 5.6C16.9 4.5 15.1 4.5 14 5.6L6.8 12.8C6.3 13.3 5.9 14 5.8 14.8L5.2 17.8C5.1 18.4 5.3 19 5.7 19.4C6.1 19.8 6.7 20 7.3 19.9L10.3 19.3C11.1 19.2 11.8 18.8 12.3 18.3L19.5 11.1C20.6 10 20.6 8.2 19.5 7.1L18.2 5.8Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4.5 20.5H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 9.5v5h3.2l5.1 3.6V5.9L7.2 9.5H4z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12.3 8.2v7.6c1.9-.6 3.2-2.3 3.2-3.8s-1.3-3.2-3.2-3.8z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M17.5 11h2.8c.4 0 .7.3.7.7v.6c0 .4-.3.7-.7.7h-2.8v-2z" fill="white" />
    </svg>
  );
}

function GrowthChartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 18h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 15V11M11 15V8M15 15V10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 12l3.5-3 3 2.5 4-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16.5 6.5H19V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  bullets,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-[36px]">
      <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-gradient-to-br from-[#A855F7] to-[#7C3AED]">
        {icon}
      </div>
      <h3 className="mt-7 text-[20px] font-bold leading-snug text-[#111827]">{title}</h3>
      <p className="mt-3 text-[16px] font-normal leading-[1.6] text-[#4B5563]">{description}</p>
      <ul className="mt-6 flex flex-col gap-[10px]">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-[10px]">
            <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#7C3AED]" />
            <span className="text-[16px] leading-[1.55] text-[#4B5563]">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:py-16 lg:py-[96px]">
      <div className="mx-auto w-full max-w-[1160px]">
        <h2 className="text-center text-[26px] font-bold leading-[1.2] tracking-[-0.2px] text-[#111827] md:text-[32px] md:tracking-[-0.3px] lg:text-[40px] lg:tracking-[-0.4px]">
          Everything You Need to Dominate Your Market
        </h2>
        <p className="mx-auto mt-4 max-w-[780px] text-center text-[15px] font-normal leading-[1.7] text-[#4B5563] md:mt-5 md:text-[16px] lg:text-[18px]">
          We&apos;re not just another agency. We&apos;re your growth partner—combining creative excellence with strategic
          marketing expertise to deliver results that matter.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-7 md:mt-10 md:grid-cols-3 md:gap-7 lg:mt-14">
          <ServiceCard
            icon={<PaintbrushIcon />}
            title="Design & Branding"
            description="Create stunning Design and Visual Identities that capture attention and build lasting impressions"
            bullets={["Brand Identity", "UI/UX Design", "Design Systems"]}
          />
          <ServiceCard
            icon={<MegaphoneIcon />}
            title="Marketing & GTM"
            description="Strategic market entry plans that position your brand for maximum impact and growth"
            bullets={["GTM Strategy", "Market Positioning", "Campaign Execution"]}
          />
          <ServiceCard
            icon={<GrowthChartIcon />}
            title="Growth & Scale"
            description="Data-driven optimization and performance marketing that accelerates sustainable growth"
            bullets={["Performance Marketing", "Analytics", "Conversion Optimization"]}
          />
        </div>
      </div>
    </section>
  );
}
