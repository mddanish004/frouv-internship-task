import { ReactNode } from "react";
import Image from "next/image";

function HeroBadge() {
  return (
    <div className="mx-auto flex h-auto w-fit items-center gap-2 rounded-full border border-[#d6b2ea] bg-[#f8efff] px-4 py-1.5 text-[13px] text-[#8f3cc3] sm:text-[14px] md:px-5 md:text-[14px]">
      <span className="h-2 w-2 rounded-full bg-[#e8d40a] md:h-2 md:w-2" />
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
      className={`relative h-[44px] overflow-hidden rounded-full px-6 text-[15px] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100 sm:h-[48px] sm:px-7 sm:text-[16px] lg:h-[48px] lg:px-8 lg:text-[16px] ${dark ? "bg-[#111111] text-white" : "border border-[#e5e5e5] bg-white text-[#111111]"
        }`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function FeatureItem({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2.5 lg:gap-3">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5e8ff] text-[#a34fd1] lg:h-9 lg:w-9">
        {icon}
      </div>
      <span className="text-[14px] text-[#5d5d5d] sm:text-[15px] lg:text-[15px]">{text}</span>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <Image
        src="/hero-bg/ellipse-purple.png"
        alt=""
        width={420}
        height={560}
        className="pointer-events-none absolute -right-[120px] -top-[90px] w-[420px] select-none"
        aria-hidden="true"
        priority
      />
      <Image
        src="/hero-bg/ellipse-peach.png"
        alt=""
        width={360}
        height={520}
        className="pointer-events-none absolute -left-[130px] top-[70px] w-[360px] select-none"
        aria-hidden="true"
        priority
      />
      <Image
        src="/hero-bg/ellipse-pink.png"
        alt=""
        width={460}
        height={460}
        className="pointer-events-none absolute bottom-[40px] left-1/2 w-[460px] -translate-x-1/2 select-none"
        aria-hidden="true"
        priority
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 pb-6 pt-6 sm:px-6 md:pb-7 md:pt-7 lg:min-h-0 lg:pb-8 lg:pt-8">
        <HeroBadge />
        <h1 className="mt-5 max-w-[900px] text-center text-[32px] font-semibold leading-[1.12] tracking-[-0.5px] text-[#101018] sm:text-[38px] md:mt-6 md:text-[44px] md:tracking-[-1px] lg:mt-7 lg:h-[154px] lg:w-[1127px] lg:max-w-none lg:text-[64px] lg:leading-[1.2] lg:tracking-[0]">
          We Build Brands &amp; Launch Them to
          <br className="hidden sm:block" />
          Market Success
        </h1>
        <p className="mt-3 max-w-[760px] text-center text-[15px] font-normal leading-[1.55] text-[#5f5f67] sm:text-[16px] md:mt-4 md:text-[17px] lg:mt-5 lg:h-[60px] lg:w-[1080px] lg:max-w-none lg:text-[20px] lg:leading-[1.5] lg:tracking-[0]">
          From Design and Brand Identity to Go-to-Market Strategy, we create and execute comprehensive solutions that
          don&apos;t just look great-they drive real business growth and market dominance.
        </p>
        <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:mt-6">
          <HeroButton dark>
            Launch your Brand <span className="ml-1 inline-block text-[17px] sm:ml-2 sm:text-[18px] lg:text-[18px]">→</span>
          </HeroButton>
          <HeroButton>Book GTM Strategy Call</HeroButton>
        </div>
        <div className="mt-8 grid w-full grid-cols-2 gap-4 px-0 sm:gap-5 md:mt-10 md:flex md:items-center md:justify-center md:gap-10 md:px-4 lg:mt-12 lg:gap-14">
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
