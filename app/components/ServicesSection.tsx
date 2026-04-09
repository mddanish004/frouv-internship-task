import { ReactNode } from "react";
import Image from "next/image";

function ServiceIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <Image src={src} alt={alt} width={52} height={52} className="h-[52px] w-[52px] rounded-xl object-cover" />
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
      <div className="h-[52px] w-[52px] shrink-0">
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
            icon={<ServiceIcon src="/services-section-icons/design.png" alt="Design and branding icon" />}
            title="Design & Branding"
            description="Create stunning Design and Visual Identities that capture attention and build lasting impressions"
            bullets={["Brand Identity", "UI/UX Design", "Design Systems"]}
          />
          <ServiceCard
            icon={<ServiceIcon src="/services-section-icons/marketing.png" alt="Marketing and GTM icon" />}
            title="Marketing & GTM"
            description="Strategic market entry plans that position your brand for maximum impact and growth"
            bullets={["GTM Strategy", "Market Positioning", "Campaign Execution"]}
          />
          <ServiceCard
            icon={<ServiceIcon src="/services-section-icons/growth.png" alt="Growth and scale icon" />}
            title="Growth & Scale"
            description="Data-driven optimization and performance marketing that accelerates sustainable growth"
            bullets={["Performance Marketing", "Analytics", "Conversion Optimization"]}
          />
        </div>
      </div>
    </section>
  );
}
