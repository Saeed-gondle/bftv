"use client";

import React from "react";

export type CTAButtonVariant = "green" | "purple";

export interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CTAButtonVariant;
  shine?: boolean;
  showShine?: boolean;
  errorMessage?: string;
  className?: string;
}

export function CTAButton({
  children,
  variant = "green",
  shine = false,
  showShine = false,
  disabled = false,
  errorMessage,
  className = "",
  type = "button",
  ...props
}: CTAButtonProps) {
  const isShining = shine || showShine;

  const getGradientClass = () => {
    if (disabled) {
      return "bg-[#D1D5DB] text-white cursor-not-allowed opacity-80";
    }
    if (variant === "green") {
      return "btn-green-gradient hover:brightness-105 active:brightness-95 shadow-[0_4px_16px_rgba(39,182,143,0.35)]";
    }
    return "btn-purple-gradient hover:brightness-105 active:brightness-95 shadow-[0_4px_16px_rgba(91,88,223,0.35)]";
  };

  return (
    <div className="relative inline-flex flex-col items-center w-full">
      <button
        type={type}
        disabled={disabled}
        className={`relative h-[56px] sm:h-[60px] w-full rounded-[16px] text-[15px] sm:text-[16px] font-bold text-white transition-all select-none flex items-center justify-center cursor-pointer ${
          isShining && !disabled ? "btn-shine-effect" : ""
        } ${getGradientClass()} ${className}`}
        {...props}
      >
        {children}
      </button>

      {errorMessage && (
        <div className="text-[#FF454B] text-[12px] font-medium text-center mt-2 select-none">
          {errorMessage}
        </div>
      )}
    </div>
  );
}
