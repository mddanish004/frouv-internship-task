"use client";

import Image from "next/image";
import { useState } from "react";

function AnnouncementBar() {
  return (
    <section className="relative flex min-h-[42px] w-full items-center justify-center bg-[#7714d8] px-10 py-2 text-white md:min-h-[54px]">
      <p className="text-center text-[13px] font-normal sm:text-[16px] lg:text-[20px]">
        Helping teams build clear brands and launch faster.
        <a href="#" className="ml-2 underline underline-offset-2 sm:ml-3">
          Work with us
        </a>
      </p>
      <button
        type="button"
        aria-label="Close announcement"
        className="absolute right-3 text-[20px] leading-none text-white/80 sm:right-5 md:right-8 md:text-[24px]"
      >
        ×
      </button>
    </section>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative w-full border-b border-[#f1f1f1]">
      <div className="mx-auto flex h-[64px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 md:h-[84px] lg:px-14">
        <Image src="/brand/navawork-logo.png" alt="Navawork" width={154} height={31} className="h-[26px] w-[130px] md:h-[31px] md:w-[154px]" />
        <nav className="ml-10 hidden items-center gap-8 text-[18px] font-normal text-[#111111] lg:flex lg:gap-[60px] lg:text-[23px]">
          <a href="#" className="leading-none">
            Services
          </a>
          <a href="#" className="leading-none">
            Our Works
          </a>
          <a href="#" className="leading-none">
            Our Process
          </a>
          <a href="#" className="leading-none">
            About Us
          </a>
        </nav>
        <button
          type="button"
          className="hidden h-[48px] rounded-full bg-[#111111] px-8 text-[16px] font-medium text-white lg:flex lg:h-[58px] lg:items-center lg:px-11 lg:text-[23px]"
        >
          Schedule a Call
        </button>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          <span className={`block h-[2px] w-6 bg-[#111111] transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 bg-[#111111] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-[#111111] transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-[#f1f1f1] bg-white lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            <a href="#" onClick={() => setMenuOpen(false)} className="py-3 text-[18px] font-normal text-[#111111]">
              Services
            </a>
            <a href="#" onClick={() => setMenuOpen(false)} className="py-3 text-[18px] font-normal text-[#111111]">
              Our Works
            </a>
            <a href="#" onClick={() => setMenuOpen(false)} className="py-3 text-[18px] font-normal text-[#111111]">
              Our Process
            </a>
            <a href="#" onClick={() => setMenuOpen(false)} className="py-3 text-[18px] font-normal text-[#111111]">
              About Us
            </a>
            <button
              type="button"
              className="mt-3 h-[48px] w-full rounded-full bg-[#111111] text-[16px] font-medium text-white"
            >
              Schedule a Call
            </button>
          </nav>
        </div>
      )}
    </section>
  );
}

export default function Header() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
    </>
  );
}
