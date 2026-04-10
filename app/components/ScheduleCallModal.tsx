"use client";

import { createContext, useCallback, useContext, useState, useRef, useEffect, type ReactNode, type FormEvent } from "react";

type ModalView = "closed" | "form" | "success" | "error";

const ScheduleCallCtx = createContext<() => void>(() => {});

export function useScheduleCall() {
  return useContext(ScheduleCallCtx);
}

export function ScheduleCallProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<ModalView>("closed");
  const [loading, setLoading] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => setView("form"), []);
  const close = useCallback(() => {
    setView("closed");
    setLoading(false);
  }, []);

  useEffect(() => {
    if (view === "closed") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [view, close]);

  useEffect(() => {
    if (view !== "closed") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [view]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate network request — swap this for a real API call later
    await new Promise((r) => setTimeout(r, 900));

    const random = Math.random();
    setLoading(false);
    setView(random > 0.1 ? "success" : "error");
  };

  return (
    <ScheduleCallCtx.Provider value={open}>
      {children}

      {view !== "closed" && (
        <div
          ref={overlayRef}
          onClick={(e) => {
            if (e.target === overlayRef.current) close();
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4 animate-[fadeIn_200ms_ease-out]"
        >
          {view === "form" && (
            <div className="relative w-full max-w-[440px] rounded-2xl border border-[#ececec] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] animate-[slideUp_250ms_ease-out] sm:p-8">
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-[20px] leading-none text-[#9CA3AF] transition-colors hover:bg-[#f5f5f5] hover:text-[#111827]"
              >
                ×
              </button>

              <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-[#d8b4fe] bg-[#faf5ff] px-4 py-1.5 text-[12px] font-medium text-[#A855F7] sm:text-[13px]">
                Schedule a Call
              </div>
              <h3 className="mt-4 text-center text-[20px] font-semibold leading-tight tracking-[-0.2px] text-[#111827] sm:text-[24px]">
                Let&apos;s Connect
              </h3>
              <p className="mt-2 text-center text-[13px] leading-relaxed text-[#6b7280] sm:text-[14px]">
                Fill in your details and we&apos;ll reach out to schedule a call.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-medium text-[#111827] sm:text-[14px]">Name</span>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="h-11 rounded-xl border border-[#E5E7EB] bg-white px-4 text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 sm:h-12 sm:text-[15px]"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-medium text-[#111827] sm:text-[14px]">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="h-11 rounded-xl border border-[#E5E7EB] bg-white px-4 text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 sm:h-12 sm:text-[15px]"
                  />
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-[13px] font-medium text-[#111827] sm:text-[14px]">Mobile Number</span>
                  <input
                    required
                    type="tel"
                    name="mobile"
                    placeholder="+1 (555) 000-0000"
                    className="h-11 rounded-xl border border-[#E5E7EB] bg-white px-4 text-[14px] text-[#111827] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 sm:h-12 sm:text-[15px]"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="relative mt-2 flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#111111] text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100 disabled:pointer-events-none disabled:opacity-60 sm:text-[15px]"
                >
                  <span className="relative z-10">
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="opacity-75" />
                        </svg>
                        Submitting…
                      </span>
                    ) : (
                      "Submit Request"
                    )}
                  </span>
                </button>
              </form>
            </div>
          )}

          {(view === "success" || view === "error") && (
            <div className="relative w-full max-w-[400px] rounded-2xl border border-[#ececec] bg-white p-6 text-center shadow-[0_20px_60px_rgba(0,0,0,0.12)] animate-[slideUp_250ms_ease-out] sm:p-8">
              <div
                className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${
                  view === "success" ? "bg-[#f0fdf4]" : "bg-[#fef2f2]"
                }`}
              >
                {view === "success" ? (
                  <svg className="h-7 w-7 text-[#16a34a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7 text-[#dc2626]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                )}
              </div>

              <h3 className="mt-5 text-[20px] font-semibold leading-tight text-[#111827] sm:text-[22px]">
                {view === "success" ? "Request Submitted!" : "Something Went Wrong"}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#6b7280] sm:text-[14px]">
                {view === "success"
                  ? "Thank you! Our team will get in touch with you shortly to schedule your call."
                  : "We couldn\u2019t process your request. Please try again or contact us directly."}
              </p>

              <button
                type="button"
                onClick={close}
                className="relative mt-6 h-11 w-full overflow-hidden rounded-full bg-[#111111] text-[14px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(148,0,217,0.35)] before:absolute before:inset-0 before:rounded-full before:bg-linear-to-b before:from-[#c11bff] before:to-[#9400d9] before:scale-x-0 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100 sm:text-[15px]"
              >
                <span className="relative z-10">{view === "success" ? "Got it" : "Try Again"}</span>
              </button>
            </div>
          )}
        </div>
      )}
    </ScheduleCallCtx.Provider>
  );
}
