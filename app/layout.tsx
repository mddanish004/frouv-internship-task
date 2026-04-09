import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navawork — Design, Brand & Growth Agency",
  description:
    "From Design and Brand Identity to Go-to-Market Strategy, Navawork creates and executes comprehensive solutions that drive real business growth and market dominance.",
  metadataBase: new URL("https://navawork.com"),
  openGraph: {
    title: "Navawork — Design, Brand & Growth Agency",
    description:
      "We build brands and launch them to market success. Managed services, predictable pricing, and 92% client retention.",
    siteName: "Navawork",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navawork — Design, Brand & Growth Agency",
    description:
      "We build brands and launch them to market success. Managed services, predictable pricing, and 92% client retention.",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
