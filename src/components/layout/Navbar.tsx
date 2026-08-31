"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [activeLang, setActiveLang] = useState<"EN" | "ES">("EN");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Charaters", href: "#characters" },
    { label: "Education", href: "#education" },
    { label: "Curriculum", href: "#curriculum" },
  ];

  const isCustomMobilePage =
    pathname?.startsWith("/choose-plan") ||
    pathname?.startsWith("/payment") ||
    pathname?.startsWith("/completed");

  return (
    <header
      className={`w-full max-w-[1440px] mx-auto px-6 sm:px-10 py-3 sm:py-4 flex items-center justify-between z-30 select-none ${
        isCustomMobilePage ? "hidden lg:flex" : "flex"
      }`}
    >
      {/* Brand Logo */}
      <Link href="/" className="flex items-center group">
        <div className="relative h-7 sm:h-8 w-20 sm:w-24 transition-transform group-hover:scale-105">
          <Image
            src="/logo.png"
            alt="first™"
            fill
            className="object-contain"
            priority
          />
        </div>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        <nav className="flex items-center gap-8 lg:gap-10">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[15px] font-semibold text-[#555555] hover:text-[#111111] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Language Switcher */}
        <div className="flex items-center gap-2 text-[14px] font-bold text-[#444444] border-l border-[#E5E5E5] pl-6">
          <button
            type="button"
            onClick={() => setActiveLang("EN")}
            className={`cursor-pointer transition-colors ${
              activeLang === "EN" ? "text-[#222222] font-black underline underline-offset-4 decoration-2" : "text-[#999999] hover:text-[#444444]"
            }`}
          >
            EN
          </button>
          <span className="text-[#C4C4C4] font-normal">|</span>
          <button
            type="button"
            onClick={() => setActiveLang("ES")}
            className={`cursor-pointer transition-colors ${
              activeLang === "ES" ? "text-[#222222] font-black underline underline-offset-4 decoration-2" : "text-[#999999] hover:text-[#444444]"
            }`}
          >
            ES
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex md:hidden items-center gap-2.5">
        <div className="flex items-center gap-1 text-[12px] font-bold text-[#444444]">
          <button
            onClick={() => setActiveLang("EN")}
            className={activeLang === "EN" ? "text-[#222222] font-black underline underline-offset-2" : "text-[#999999]"}
          >
            EN
          </button>
          <span className="text-[#C4C4C4] font-normal">|</span>
          <button
            onClick={() => setActiveLang("ES")}
            className={activeLang === "ES" ? "text-[#222222] font-black underline underline-offset-2" : "text-[#999999]"}
          >
            ES
          </button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          type="button"
          className="p-1 text-[#444444] hover:text-[#111111] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-4 right-4 bg-white/98 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-[#EDEDED] flex flex-col gap-3 z-50 animate-in fade-in zoom-in-95 duration-150">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-[#333333] hover:bg-[#F5F5F7]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
