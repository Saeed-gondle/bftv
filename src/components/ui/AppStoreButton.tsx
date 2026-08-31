"use client";

import React from "react";
import { AppleLogo, GooglePlayLogo } from "./Icons";

export interface AppStoreButtonProps {
  store?: "apple" | "google" | "google-play" | string;
  storeType?: "apple" | "google-play" | string;
  title?: string;
  label?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function AppStoreButton({
  store,
  storeType = store === "google" ? "google-play" : (store as any) || "apple",
  title,
  label = title || "Open your App",
  href,
  onClick,
  className = "",
}: AppStoreButtonProps) {
  const isApple = storeType === "apple" || store === "apple";

  const content = (
    <>
      {isApple ? (
        <AppleLogo className="w-[20px] h-[20px] text-[#111111]" />
      ) : (
        <GooglePlayLogo className="w-[18px] h-[20px]" />
      )}
      <span className="leading-none text-[15px] sm:text-[16px]">{label}</span>
      <span className="text-[20px] font-black leading-none select-none">›</span>
    </>
  );

  const buttonClasses = `h-[56px] px-6 rounded-[16px] border-2 border-white btn-app-yellow-gradient flex items-center justify-center gap-2.5 text-[#333333] font-bold transition-all active:scale-[0.98] hover:brightness-105 select-none shadow-[0_4px_16px_rgba(255,202,4,0.3)] cursor-pointer ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
}

export function AppDownloadBanner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full max-w-[320px] rounded-[20px] bg-[#5959e7] p-8 flex flex-col justify-between items-center gap-4 shadow-lg ${className}`}
    >
      <AppStoreButton store="apple" className="w-full" />
      <AppStoreButton store="google" className="w-full" />
    </div>
  );
}
