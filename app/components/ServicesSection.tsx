import { ReactNode } from "react";
import Image from "next/image";

function ServiceIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <Image src={src} alt={alt} width={44} height={44} className="h-11 w-11 rounded-xl object-cover" />
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
    <article className="flex flex-col rounded-2xl border border-[#E5E7EB] bg-white p-6 lg:p-8">
      <div className="h-11 w-11 shrink-0">
        {icon}
      </div>
      <h3 className="mt-6 text-[17px] font-medium leading-snug text-[#111827] lg:text-[24px]">{title}</h3>
      <p className="mt-3 text-[14px] font-normal leading-[1.6] text-[#4B5563] lg:text-[18px] lg:leading-normal">{description}</p>
      <ul className="mt-5 flex flex-col gap-2.5">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#7C3AED]" />
            <span className="text-[14px] leading-[1.55] text-[#4B5563] lg:text-[17px]">{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 md:py-9 lg:py-10">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="text-center text-[24px] font-semibold leading-[1.2] tracking-[-0.2px] text-[#111827] md:text-[32px] md:tracking-[-0.3px] lg:text-[48px] lg:tracking-[-0.5px]">
          Everything You Need to Dominate Your Market
        </h2>
        <p className="mx-auto mt-4 max-w-[1080px] text-center text-[14px] font-normal leading-[1.7] text-[#4B5563] md:mt-5 md:text-[16px] lg:text-[20px] lg:leading-normal">
          We&apos;re not just another agency. We&apos;re your growth partner—combining creative excellence with strategic
          marketing expertise to deliver results that matter.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-3 md:gap-6 lg:mt-12">
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
