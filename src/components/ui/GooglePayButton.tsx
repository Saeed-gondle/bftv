"use client";

import React from "react";
import { GoogleGLogo } from "./Icons";

export interface GooglePayButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  withShadow?: boolean;
  className?: string;
}

export function GooglePayButton({
  withShadow = false,
  className = "",
  ...props
}: GooglePayButtonProps) {
  return (
    <button
      type="button"
      className={`w-[78px] h-[36px] rounded-[6px] border-2 border-[#666666] bg-white text-[11px] font-bold text-[#333333] flex items-center justify-center gap-[4px] transition-all hover:bg-neutral-50 active:scale-[0.98] select-none ${
        withShadow ? "shadow-[0_1px_2px_rgba(0,0,0,0.15)]" : ""
      } ${className}`}
      {...props}
    >
      <GoogleGLogo className="w-[14px] h-[14px]" />
      <span className="leading-none text-[11px] font-bold text-[#333333]">Pay</span>
    </button>
  );
}
