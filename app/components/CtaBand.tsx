"use client";

import { useScheduleCall } from "./ScheduleCallModal";

export default function CtaBand() {
  const openScheduleCall = useScheduleCall();
  return (
    <section className="w-full bg-[#1a1a1a] px-4 py-8 text-white sm:px-6 md:py-9 lg:py-10">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="text-center text-[22px] font-semibold leading-[1.12] tracking-[-0.3px] sm:text-[28px] md:text-[36px] md:tracking-[-0.5px] lg:text-[52px] lg:tracking-[-0.6px]">
          We craft brands and propel them
          <br className="hidden sm:block" />
          toward market success.
        </h2>
        <p className="mx-auto mt-5 max-w-[1080px] text-center text-[13px] font-normal leading-relaxed text-white/75 md:text-[15px] lg:text-[20px] lg:leading-normal">
          Let&apos;s create something extraordinary — connect with us and ready to build something great
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-8">
          <button
            type="button"
            className="relative h-11 overflow-hidden rounded-full bg-white px-8 text-[14px] font-medium text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100 lg:h-14 lg:px-12 lg:text-[20px]"
          >
            <span className="relative z-10">Contact Us</span>
          </button>
          <button
            type="button"
            onClick={openScheduleCall}
            className="relative h-11 overflow-hidden rounded-full border border-white/20 bg-transparent px-8 text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100 lg:h-14 lg:px-12 lg:text-[20px]"
          >
            <span className="relative z-10">Schedule a Call</span>
          </button>
        </div>
      </div>
    </section>
  );
}

