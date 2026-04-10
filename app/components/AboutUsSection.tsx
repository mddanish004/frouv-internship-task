import { ReactNode } from "react";

function IconTile({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-b from-[#bf84f5] to-[#7e22ce] shadow-[0_8px_18px_rgba(126,34,206,0.25)] lg:h-16 lg:w-16">
      {children}
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 3.8L12.9 7.7L17.2 8.3L14.1 11.4L14.8 15.7L11 13.7L7.2 15.7L7.9 11.4L4.8 8.3L9.1 7.7L11 3.8Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function TeamIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="2.4" stroke="white" strokeWidth="1.4" />
      <circle cx="14.6" cy="9.2" r="2" stroke="white" strokeWidth="1.4" />
      <path d="M4.6 16.8C5.2 14.5 6.8 13.3 9.1 13.3C11.4 13.3 13 14.5 13.6 16.8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M13.2 16.4C13.6 15 14.6 14.3 16 14.3C17.4 14.3 18.4 15 18.8 16.4" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 17.4L10 16.5C6.1 13 3.6 10.8 3.6 8.1C3.6 5.9 5.3 4.2 7.5 4.2C8.8 4.2 10 4.8 11 5.8C12 4.8 13.2 4.2 14.5 4.2C16.7 4.2 18.4 5.9 18.4 8.1C18.4 10.8 15.9 13 12 16.5L11 17.4Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 4.3C7.9 4.3 5.4 6.8 5.4 9.9C5.4 12 6.5 13.8 8.1 14.8V16.4H13.9V14.8C15.5 13.8 16.6 12 16.6 9.9C16.6 6.8 14.1 4.3 11 4.3Z" stroke="white" strokeWidth="1.5" />
      <path d="M9.1 18.5H12.9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ValueItem({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4.5">
      <IconTile>{icon}</IconTile>
      <div>
        <h3 className="text-[15px] font-medium leading-tight text-[#111827] sm:text-[15px] md:text-[16px] lg:text-[24px]">{title}</h3>
        <p className="mt-1 text-[13px] leading-normal text-[#4b5563] sm:text-[14px] md:text-[14px] lg:max-w-[420px] lg:text-[18px]">{description}</p>
      </div>
    </div>
  );
}

export default function AboutUsSection() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 md:py-9 lg:py-10">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-[#d8b4fe] bg-[#faf5ff] px-5 py-2 text-[14px] font-medium text-[#A855F7] lg:text-[17px]">
          About Us
        </div>
        <h2 className="mt-5 text-center text-[24px] font-semibold leading-[1.18] tracking-[-0.3px] text-[#111827] sm:text-[30px] md:text-[38px] md:tracking-[-0.5px] lg:text-[48px] lg:tracking-[-0.6px]">
          Passionate Designers, Powerful Brands
        </h2>
        <p className="mx-auto mt-4 max-w-[1080px] text-center text-[14px] leading-[1.6] text-[#4b5563] sm:text-[15px] md:mt-5 md:text-[16px] lg:text-[20px] lg:leading-normal">
          We&apos;re a team of creative professionals dedicated to helping brands tell their stories through exceptional
          design. Our approach combines strategic thinking with artistic excellence to deliver solutions that not only
          look stunning but drive real business results.
        </p>
        <p className="mx-auto mt-3 max-w-[1080px] text-center text-[14px] font-normal leading-[1.6] text-[#1f2937] sm:text-[15px] md:mt-4 md:text-[16px] lg:text-[20px] lg:leading-normal">
          From startups to established enterprises, we&apos;ve partnered with diverse clients to create memorable brand
          experiences that stand the test of time.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 md:mt-10 md:grid-cols-2 md:gap-x-10 md:gap-y-8 lg:mt-12 lg:gap-x-16">
          <ValueItem icon={<StarIcon />} title="Excellence" description="We pursue perfection in every pixel and design decision." />
          <ValueItem icon={<TeamIcon />} title="Collaboration" description="Your vision combined with our expertise creates magic." />
          <ValueItem icon={<HeartIcon />} title="Passion" description="We love what we do and it shows in our work." />
          <ValueItem icon={<BulbIcon />} title="Innovation" description="We stay ahead of trends to keep your brand fresh." />
        </div>
      </div>
    </section>
  );
}
