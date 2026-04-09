import { ReactNode } from "react";
import Image from "next/image";

type ThemeKey = "blue" | "red" | "purple";

const themeStyles: Record<
  ThemeKey,
  { bar: string; barText: string }
> = {
  blue: {
    bar: "from-[#eff6ff] via-[#f8fbff] to-white",
    barText: "text-[#1e40af]",
  },
  red: {
    bar: "from-[#fff1f2] via-[#fff8f8] to-white",
    barText: "text-[#b91c1c]",
  },
  purple: {
    bar: "from-[#faf5ff] via-[#fcfaff] to-white",
    barText: "text-[#6b21a8]",
  },
};

function StrategyFeature({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  theme: ThemeKey;
}) {
  return (
    <div className="flex gap-5">
      <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center">
        {icon}
      </div>
      <div className="min-w-0 pt-0.5">
        <div className="text-[17px] font-bold leading-snug text-[#111827]">{title}</div>
        <p className="mt-1.5 text-[15px] font-normal leading-relaxed text-[#6b7280]">{description}</p>
      </div>
    </div>
  );
}

function StrategyBlock({
  theme,
  barTitle,
  intro,
  features,
}: {
  theme: ThemeKey;
  barTitle: string;
  intro: string;
  features: { icon: ReactNode; title: string; description: string }[];
}) {
  const t = themeStyles[theme];
  return (
    <div className="mt-[56px] first:mt-0">
      <div
        className={`rounded-2xl bg-linear-to-r ${t.bar} px-6 py-[18px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]`}
      >
        <h3 className={`text-[20px] font-bold leading-tight ${t.barText}`}>{barTitle}</h3>
      </div>
      <p className="mt-5 max-w-[920px] text-[16px] font-normal leading-[1.7] text-[#6b7280]">{intro}</p>
      <div className="mt-8 flex flex-col gap-9">
        {features.map((f) => (
          <StrategyFeature key={f.title} theme={theme} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </div>
    </div>
  );
}

export default function MarketingGtmSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -right-32 -top-28 h-[min(520px,55vw)] w-[min(520px,55vw)] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(244,114,182,0.55)_0%,rgba(167,139,250,0.45)_45%,rgba(255,255,255,0)_72%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_70%_20%,rgba(216,180,254,0.5)_0%,rgba(255,255,255,0)_65%)] blur-[48px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-4 pb-12 pt-12 sm:px-6 md:pb-16 md:pt-16 lg:pb-[96px] lg:pt-[88px]">
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-[#d8b4fe] bg-[#faf5ff] px-5 py-2 text-[14px] font-medium text-[#A855F7]">
          Marketing &amp; GTM Strategy
        </div>
        <h2 className="mt-5 text-center text-[26px] font-bold leading-[1.15] tracking-[-0.2px] text-[#111827] md:text-[34px] md:tracking-[-0.3px] lg:text-[42px] lg:tracking-[-0.4px]">
          From Strategy to Market Domination
        </h2>
        <p className="mx-auto mt-4 max-w-[820px] text-center text-[15px] font-normal leading-[1.75] text-[#6b7280] md:mt-5 md:text-[16px] lg:text-[18px]">
          We don&apos;t just design brands—we launch them into the market with precision strategies that drive awareness,
          engagement, and revenue growth.
        </p>

        <div className="mt-14">
          <StrategyBlock
            theme="blue"
            barTitle="1. Strategic Market Entry"
            intro="We help you identify the right market opportunities, position your brand effectively, and create a roadmap for sustainable growth. Our strategic approach ensures you enter the market with confidence and clarity."
            features={[
              {
                icon: (
                  <Image
                    src="/marketing-gtm-icons/market-analysis.png"
                    alt="Market analysis"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl"
                  />
                ),
                title: "Market Analysis & Competitive Intelligence",
                description: "Deep dive into market dynamics and competitor strategies",
              },
              {
                icon: (
                  <Image
                    src="/marketing-gtm-icons/positioning-messaging.png"
                    alt="Positioning and messaging"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl"
                  />
                ),
                title: "Positioning & Messaging Framework",
                description: "Craft compelling narratives that resonate with your audience",
              },
              {
                icon: (
                  <Image
                    src="/marketing-gtm-icons/channel-strategy.png"
                    alt="Channel strategy"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl"
                  />
                ),
                title: "Channel Strategy & Mix Optimization",
                description: "Identify the best channels to reach your target customers",
              },
            ]}
          />

          <StrategyBlock
            theme="red"
            barTitle="2. Flawless Campaign Execution"
            intro="From concept to launch, we handle every detail of your marketing campaigns. Our execution framework ensures your brand message reaches the right audience at the right time, across all touchpoints."
            features={[
              {
                icon: (
                  <Image
                    src="/marketing-gtm-icons/multi-channel.png"
                    alt="Campaign management"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl"
                  />
                ),
                title: "Multi-Channel Campaign Management",
                description: "Coordinated campaigns across digital and traditional channels",
              },
              {
                icon: (
                  <Image
                    src="/marketing-gtm-icons/content-distribution.png"
                    alt="Content creation"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl"
                  />
                ),
                title: "Content Creation & Distribution",
                description: "High-impact content that drives engagement and conversions",
              },
              {
                icon: (
                  <Image
                    src="/marketing-gtm-icons/launch-management.png"
                    alt="Launch timeline"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl"
                  />
                ),
                title: "Launch Timeline & Project Management",
                description: "Agile execution with clear milestones and deliverables",
              },
            ]}
          />

          <StrategyBlock
            theme="purple"
            barTitle="3. Sustainable Growth Acceleration"
            intro="We don't just launch campaigns—we build growth engines. Our data-driven approach continuously optimizes your marketing efforts to maximize ROI and scale your business sustainably."
            features={[
              {
                icon: (
                  <Image
                    src="/marketing-gtm-icons/performance-marketing.png"
                    alt="Performance marketing"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl"
                  />
                ),
                title: "Performance Marketing & Optimization",
                description: "Continuous A/B testing and optimization for better results",
              },
              {
                icon: (
                  <Image
                    src="/marketing-gtm-icons/customer-retention.png"
                    alt="Customer acquisition and retention"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl"
                  />
                ),
                title: "Customer Acquisition & Retention",
                description: "Strategies to acquire and retain high-value customers",
              },
              {
                icon: (
                  <Image
                    src="/marketing-gtm-icons/analytics-dashboard.png"
                    alt="Analytics and reporting"
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl"
                  />
                ),
                title: "Analytics & Reporting Dashboard",
                description: "Real-time insights to track and measure success",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
