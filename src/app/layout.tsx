import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundDecorations } from "@/components/layout/BackgroundDecorations";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "first™ - Stories & Games for Kids",
  description:
    "Get full access to all stories and games. Start your free trial today!",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`}>
      <body className="relative flex min-h-full flex-col overflow-x-hidden bg-white font-sans text-[#4F4F4F] antialiased">
        <BackgroundDecorations />
        <Navbar />
        <main className="relative flex flex-1 flex-col z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
