import { ReactNode } from "react";
import Image from "next/image";

function HeroBadge() {
  return (
    <div className="mx-auto flex h-auto w-fit items-center gap-2 rounded-full border border-[#d6b2ea] bg-[#f8efff] px-4 py-2 text-[13px] text-[#8f3cc3] sm:text-[15px] md:px-6 md:text-[17px]">
      <span className="h-2 w-2 rounded-full bg-[#e8d40a] md:h-[10px] md:w-[10px]" />
      Design, Brand &amp; Growth Agency
    </div>
  );
}

function HeroButton({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <button
      type="button"
      className={`h-[44px] rounded-full px-6 text-[15px] font-medium sm:h-[52px] sm:px-8 sm:text-[20px] lg:h-[63px] lg:px-10 lg:text-[28px] xl:text-[33px] ${dark ? "bg-[#111111] text-white" : "border border-[#e5e5e5] bg-white text-[#111111]"
        }`}
    >
      {children}
    </button>
  );
}

function FeatureItem({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 lg:gap-5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5e8ff] text-[#a34fd1] lg:h-[40px] lg:w-[40px]">
        {icon}
      </div>
      <span className="text-[14px] text-[#5d5d5d] sm:text-[18px] lg:text-[24px] xl:text-[31px]">{text}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Image
        src="/hero-bg/ellipse-purple.png"
        alt=""
        width={620}
        height={800}
        className="pointer-events-none absolute -right-[160px] -top-[120px] w-[620px] select-none"
        aria-hidden="true"
        priority
      />
      <Image
        src="/hero-bg/ellipse-peach.png"
        alt=""
        width={520}
        height={780}
        className="pointer-events-none absolute -left-[180px] top-[60px] w-[520px] select-none"
        aria-hidden="true"
        priority
      />
      <Image
        src="/hero-bg/ellipse-pink.png"
        alt=""
        width={700}
        height={700}
        className="pointer-events-none absolute bottom-[20px] left-1/2 w-[700px] -translate-x-1/2 select-none"
        aria-hidden="true"
        priority
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 pb-8 pt-10 sm:px-6 md:pt-12 lg:min-h-[565px] lg:pt-[68px]">
        <HeroBadge />
        <h1 className="mt-6 max-w-[1180px] text-center text-[32px] font-semibold leading-[1.12] tracking-[-0.5px] text-[#101018] sm:text-[40px] md:mt-8 md:text-[52px] md:tracking-[-1px] lg:mt-10 lg:text-[65px] lg:tracking-[-1.6px] xl:text-[77px]">
          We Build Brands &amp; Launch Them to
          <br className="hidden sm:block" />
          Market Success
        </h1>
        <p className="mt-4 max-w-[1180px] text-center text-[16px] font-normal leading-[1.55] text-[#5f5f67] sm:text-[20px] md:mt-6 md:text-[26px] lg:mt-8 lg:text-[32px] xl:text-[38px]">
          From Design and Brand Identity to Go-to-Market Strategy, we create and execute comprehensive solutions that
          don&apos;t just look great-they drive real business growth and market dominance.
        </p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:gap-5 lg:mt-8">
          <HeroButton dark>
            Launch your Brand <span className="ml-1 inline-block text-[17px] sm:ml-2 sm:text-[22px] lg:text-[30px] xl:text-[34px]">→</span>
          </HeroButton>
          <HeroButton>Book GTM Strategy Call</HeroButton>
        </div>
        <div className="mt-8 grid w-full grid-cols-2 gap-4 px-0 sm:gap-6 md:mt-12 md:flex md:items-center md:justify-between md:px-4 lg:mt-[66px] lg:px-[70px]">
          <FeatureItem
            icon={
              <Image
                src="/hero-icons/managed-services.png"
                alt="Managed services"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            }
            text="Managed Services"
          />
          <FeatureItem
            icon={
              <Image
                src="/hero-icons/predictable-pricing.png"
                alt="Predictable pricing"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            }
            text="Predictable Pricing"
          />
          <FeatureItem
            icon={
              <Image
                src="/hero-icons/no-hiring-hassles.png"
                alt="No hiring hassles"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            }
            text="No Hiring Hassles"
          />
          <FeatureItem
            icon={
              <Image
                src="/hero-icons/client-retention.png"
                alt="Client retention"
                width={20}
                height={20}
                className="h-5 w-5"
              />
            }
            text="92% Client Retention"
          />
        </div>
      </div>
    </section>
  );
}
