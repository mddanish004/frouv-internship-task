"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M4 7l5 5 5-5" stroke="#9CA3AF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Badge({ children }: { children: string }) {
  return (
    <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-[#d8b4fe] bg-[#faf5ff] px-6 py-[10px] text-[14px] font-medium text-[#A855F7]">
      {children}
    </div>
  );
}

function SupportCard() {
  return (
    <div className="rounded-2xl border border-[#efefef] bg-white px-6 py-8 shadow-[0_6px_26px_rgba(0,0,0,0.04)]">
      <div className="flex justify-center">
        <Image src="/faq-icons/support.png" alt="Support" width={52} height={52} className="h-[52px] w-[52px]" />
      </div>
      <p className="mt-6 text-center text-[14px] font-semibold leading-[1.6] text-[#6b7280]">
        FAQs help you a little bit but for the
        <br />
        rest we are there for you
      </p>
      <div className="mt-6 flex flex-col items-center gap-3">
        <button
          type="button"
          className="flex h-[40px] w-[176px] items-center justify-center gap-2 rounded-full bg-[#111111] text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(0,0,0,0.14)]"
        >
          <Image src="/faq-icons/google-meet.png" alt="Google Meet" width={16} height={16} className="h-4 w-4" />
          Schedule a Call
        </button>
        <button
          type="button"
          className="flex h-[40px] w-[176px] items-center justify-center gap-2 rounded-full border border-[#e9e9e9] bg-white text-[13px] font-semibold text-[#111111]"
        >
          <Image src="/faq-icons/whatsapp.png" alt="WhatsApp" width={20} height={20} className="h-5 w-5" />
          Chat with us
        </button>
      </div>
    </div>
  );
}

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
  showBorderTop,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  showBorderTop: boolean;
}) {
  return (
    <div className={`bg-white ${showBorderTop ? "border-t border-[#efefef]" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-6 py-[18px] text-left"
      >
        <span className="text-[14px] font-semibold text-[#111827]">{question}</span>
        <ChevronDown className={`shrink-0 ${isOpen ? "rotate-180" : ""} transition-transform duration-200`} />
      </button>
      <div className={`${isOpen ? "block" : "hidden"} px-6 pb-5 text-[14px] leading-relaxed text-[#6b7280]`}>
        {answer}
      </div>
    </div>
  );
}

export default function FaqSection() {
  const items = useMemo(
    () => [
      {
        question: "Why should I choose Nava work over traditional design agencies?",
        answer:
          "Navawork is a lean, collaborative design partner built for early-stage teams that need clarity, speed, and direction. We deliver thoughtful, goal-driven design with fast execution and transparent communication—without the overhead of traditional agencies"
      },
      {
        question: "How is Navawork different from hiring an in-house team?",
        answer:
          "Navawork gives you access to a full design & marketing team at 30–60% lower cost than hiring in-house, without long hiring cycles or fixed salaries. You get flexible, on-demand expertise, faster execution, and senior-level output—without the overhead of building and managing an internal team.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "We work in short, focused cycles with daily updates and quick iterations, so progress is visible within days—not weeks. Most clients start seeing tangible improvements in clarity, design quality, and user response within the first 7–14 days.",
      },
      {
        question: "What services does Nava work offer?",
        answer:
          "We help teams with branding, product and UI/UX design, marketing creatives, and go-to-market execution. From shaping your brand to supporting launches and growth, we focus on clarity, speed, and results.",
      },
      {
        question: "Do you have experience in my industry?",
        answer:
          "Yes—Navawork has experience working with early-stage teams across SaaS, AI, Fintech, eCommerce, D2C, and digital platforms. We adapt our design and marketing approach to your industry, users, and growth stage rather than applying one-size-fits-all solutions.",
      },
      {
        question: "Will I be blocked into a long-term contract?",
        answer:
          "No! We work with flexible, short engagement cycles, not rigid long-term contracts. You can start small, evaluate results quickly, and continue only if the collaboration is delivering clear value.",
      },
      {
        question: "How do you ensure collaboration with our team?",
        answer:
          "We work as an extension of your team with clear communication, regular check-ins, and shared workspaces for real-time visibility. You get frequent updates, quick feedback loops, and direct collaboration throughout the project.",
      },
      
      {
        question: "Can you help us with strategy, or do you only handle designs?",
        answer:
          "We don’t just execute designs—we help shape the thinking behind them. From positioning and messaging to go-to-market direction, we align strategy first and then design to support it.",
      },
      {
        question: "How do you handle handoffs to developers?",
        answer:
          "We provide clean, developer-ready files with clear documentation and annotations. When needed, we also collaborate directly with developers to ensure smooth implementation.",
      },
      {
        question: "What happens if we're not happy with the work?",
        answer:
          "We include clear revision rounds and regular check-ins to address feedback early and ensure alignment. If needed, you can also pause or cancel at any time—no long-term lock-ins, and you only pay for work completed.",
      },
      {
        question: "Do you offer support after the project is delivered?",
        answer:
          "Yes—we offer post-delivery support to ensure smooth handover and implementation. You can also continue with flexible support or a retainer if you need ongoing updates, improvements, or launch assistance.",
      },
    ],
    [],
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white px-4 pb-10 pt-12 sm:px-6 md:pb-12 md:pt-16 lg:pb-[64px] lg:pt-[88px]">
      <div className="mx-auto w-full max-w-[1180px]">
        <Badge>FAQs</Badge>
        <h2 className="mt-7 text-center text-[24px] font-bold leading-tight tracking-[-0.2px] text-[#111827] md:text-[28px] md:tracking-[-0.3px] lg:text-[34px]">
          All your Questions, Answered
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:mt-10 md:grid-cols-[280px_1fr] md:gap-8 lg:mt-14 lg:gap-10">
          <SupportCard />

          <div className="overflow-hidden rounded-2xl border border-[#efefef] bg-white shadow-[0_6px_26px_rgba(0,0,0,0.03)]">
            {items.map((item, i) => (
              <FaqRow
                key={item.question}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex((v) => (v === i ? null : i))}
                showBorderTop={i !== 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

