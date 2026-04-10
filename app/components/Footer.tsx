import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white px-4 py-8 text-[#111111] sm:px-6 lg:py-10">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-8 md:flex-row md:justify-between">
        <div>
          <Image src="/brand/navawork-logo.png" alt="Navawork" width={154} height={31} className="h-[31px] w-[154px]" />
          <p className="mt-6 text-[12px] leading-relaxed text-[#6b7280] lg:text-[15px]">© 2026 Navawork, All rights reserved</p>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-3 pt-1 text-[12px] text-[#111111] sm:gap-x-12 lg:gap-x-[90px] lg:text-[15px]">
          <a href="#" className="justify-self-start">
            Contact Us
          </a>
          <a href="#" className="justify-self-start">
            Support
          </a>
          <a href="#" className="justify-self-start">
            Careers
          </a>
          <a href="#" className="justify-self-start">
            Terms of Service
          </a>
          <div className="flex items-center gap-2 justify-self-start">
            <span className="text-[12px] text-[#111111] lg:text-[15px]">Follow us on</span>
            <Image src="/brand/linkedin.png" alt="LinkedIn" width={23} height={23} className="h-[23px] w-[23px]" />
          </div>
          <a href="#" className="justify-self-start">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

