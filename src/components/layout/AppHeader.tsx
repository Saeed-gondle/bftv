"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export const AppHeader: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Sign Up (1/3)", href: "/signup" },
    { name: "Sign In", href: "/login" },
    { name: "Reset Password", href: "/reset-password" },
    { name: "Choose Plan (2/3)", href: "/choose-plan" },
    { name: "Payment (3/3)", href: "/payment" },
    { name: "Completed", href: "/completed" },
    { name: "UI Matrix", href: "/components-matrix" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-[#eaeaea] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-transform hover:scale-[1.02]">
          <div className="relative h-8 w-24">
            <Image
              src="/logo.png"
              alt="First Brand Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full bg-[#f0f0ff] text-[#514cff] border border-[#d6d4ff]">
            Frontend Assessment
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-[#514cff] text-white shadow-xs"
                    : "text-[#555555] hover:text-[#111111] hover:bg-[#f5f5f7]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Interactive Funnel Action */}
        <div className="hidden sm:flex items-center gap-2">
          <Link
            href="/"
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-[#514cff] bg-[#f0f0ff] hover:bg-[#e4e2ff] transition-all"
          >
            ⚡ Full Interactive Funnel
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="/"
            className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-[#514cff] text-white"
          >
            Wizard
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-lg text-[#555555] hover:bg-[#f3f4f6] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#eaeaea] bg-white px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <p className="text-[10px] font-bold uppercase tracking-wider text-[#999999] px-3 py-1">
            Navigate Assessment Pages
          </p>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#514cff] text-white font-bold"
                    : "text-[#444444] hover:bg-[#f4f4f6]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
