"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Charaters", href: "#characters" },
  { label: "Education", href: "#education" },
  { label: "Curriculum", href: "#curriculum" },
];

/**
 * Desktop navigation — Figma: logo 148x49 at (81,60); nav items 18px #4F4F4F ending
 * at x=1806 on a 1920 canvas (≈114px from the right edge).
 */
export function DesktopNav() {
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  return (
    <header className="relative z-20 hidden w-full pt-2.5 md:block">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between px-[81px] xl:pr-[114px]">
        <Link href="/" aria-label="babyfirst TV home">
          <Image
            src="/logo.png"
            alt="babyfirst TV"
            width={428}
            height={90}
            priority
            className="h-[49px] w-[148px] object-contain object-left"
          />
        </Link>

        <nav className="flex items-center gap-[42px]">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[18px] leading-none text-[#4F4F4F] transition-colors hover:text-[#5657E2]"
            >
              {link.label}
            </Link>
          ))}

          <span className="ml-[13px] flex items-center gap-[10px] text-[18px] leading-none">
            {(["EN", "ES"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={
                  lang === code
                    ? "font-bold text-[#4F4F4F]"
                    : "text-[#BDBDBD] transition-colors hover:text-[#4F4F4F]"
                }
              >
                {code}
              </button>
            ))}
          </span>
        </nav>
      </div>
    </header>
  );
}
