export default function CtaBand() {
  return (
    <section className="w-full bg-[#1a1a1a] px-4 py-10 text-white sm:px-6 md:py-14 lg:py-[72px]">
      <div className="mx-auto w-full max-w-[1180px]">
        <h2 className="text-center text-[24px] font-bold leading-[1.12] tracking-[-0.3px] sm:text-[30px] md:text-[36px] md:tracking-[-0.5px] lg:text-[44px] lg:tracking-[-0.6px]">
          We craft brands and propel them
          <br className="hidden sm:block" />
          toward market success.
        </h2>
        <p className="mx-auto mt-6 max-w-[760px] text-center text-[14px] font-medium leading-relaxed text-white/75">
          Let&apos;s create something extraordinary — connect with us and ready to build something great
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:mt-8">
          <button
            type="button"
            className="h-[40px] rounded-full bg-white px-7 text-[13px] font-semibold text-[#111111]"
          >
            Contact Us
          </button>
          <button
            type="button"
            className="h-[40px] rounded-full border border-white/20 bg-transparent px-7 text-[13px] font-semibold text-white"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </section>
  );
}

