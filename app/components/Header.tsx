"use client";

import Image from "next/image";
import { useState } from "react";
import { useScheduleCall } from "./ScheduleCallModal";

function AnnouncementBar() {
  return (
    <section className="relative flex min-h-[42px] w-full items-center justify-center bg-[#7714d8] px-10 py-1.5 text-white md:min-h-[44px]">
      <p className="text-center text-[13px] font-normal sm:text-[15px] lg:text-[15px]">
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
  const openScheduleCall = useScheduleCall();

  return (
    <section className="sticky top-0 z-40 w-full px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto flex h-[64px] w-full max-w-[1360px] items-center justify-between rounded-full border border-[#ececec] bg-white/95 px-5 shadow-[0_10px_28px_rgba(0,0,0,0.06)] backdrop-blur md:h-[72px] md:px-7 lg:px-10">
        <Image src="/brand/navawork-logo.png" alt="Navawork" width={154} height={31} className="h-[26px] w-[130px] md:h-[28px] md:w-[140px]" />
        <div className="ml-auto hidden items-center gap-5 lg:flex">
          <nav className="flex items-center gap-4 text-[15px] font-normal text-[#111111]">
            <a href="#" className="relative overflow-hidden rounded-full px-5 py-2 leading-none transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100">
              <span className="relative z-10">Services</span>
            </a>
            <a href="#" className="relative overflow-hidden rounded-full px-5 py-2 leading-none transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100">
              <span className="relative z-10">Our Works</span>
            </a>
            <a href="#" className="relative overflow-hidden rounded-full px-5 py-2 leading-none transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100">
              <span className="relative z-10">Our Process</span>
            </a>
            <a href="#" className="relative overflow-hidden rounded-full px-5 py-2 leading-none transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100">
              <span className="relative z-10">About Us</span>
            </a>
          </nav>
          <button
            type="button"
            onClick={openScheduleCall}
            className="relative h-[44px] overflow-hidden rounded-full bg-[#111111] px-8 text-[15px] font-normal text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100"
          >
            <span className="relative z-10">Schedule a Call</span>
          </button>
        </div>
        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] transition-all duration-200 hover:scale-105 lg:hidden"
        >
          <span className={`block h-[2px] w-6 bg-[#111111] transition-transform duration-200 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block h-[2px] w-6 bg-[#111111] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-6 bg-[#111111] transition-transform duration-200 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full px-4 sm:px-6 lg:hidden">
          <nav className="mx-auto flex max-w-[1360px] flex-col rounded-2xl border border-[#ececec] bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <a href="#" onClick={() => setMenuOpen(false)} className="relative w-fit overflow-hidden rounded-full px-5 py-2 text-[18px] font-normal text-[#111111] transition-all duration-300 hover:text-white hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100">
              <span className="relative z-10">Services</span>
            </a>
            <a href="#" onClick={() => setMenuOpen(false)} className="relative w-fit overflow-hidden rounded-full px-5 py-2 text-[18px] font-normal text-[#111111] transition-all duration-300 hover:text-white hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100">
              <span className="relative z-10">Our Works</span>
            </a>
            <a href="#" onClick={() => setMenuOpen(false)} className="relative w-fit overflow-hidden rounded-full px-5 py-2 text-[18px] font-normal text-[#111111] transition-all duration-300 hover:text-white hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100">
              <span className="relative z-10">Our Process</span>
            </a>
            <a href="#" onClick={() => setMenuOpen(false)} className="relative w-fit overflow-hidden rounded-full px-5 py-2 text-[18px] font-normal text-[#111111] transition-all duration-300 hover:text-white hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100">
              <span className="relative z-10">About Us</span>
            </a>
            <button
              type="button"
              onClick={() => { setMenuOpen(false); openScheduleCall(); }}
              className="relative mt-3 h-[48px] w-full overflow-hidden rounded-full bg-[#111111] text-[16px] font-normal text-white transition-all duration-300 hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100"
            >
              <span className="relative z-10">Schedule a Call</span>
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
