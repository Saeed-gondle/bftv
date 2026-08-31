import React from "react";

const GRADIENT_PURPLE = "linear-gradient(90deg, #9697F2 0%, #5657E2 100%)";
const GRADIENT_GREEN = "linear-gradient(90deg, #78F694 0%, #37AE50 100%)";

type Props = {
  children: React.ReactNode;
  variant?: "purple" | "green";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

/**
 * Primary CTA — Figma: 355x62, radius 15, gradient #9697F2 -> #5657E2, label 20px bold white.
 * Width is fluid (max 355) so it never overflows on narrow phones.
 */
export function GradientButton({
  children,
  variant = "purple",
  type = "button",
  disabled = false,
  onClick,
  className = "",
}: Props) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundImage: disabled
          ? undefined
          : variant === "green"
            ? GRADIENT_GREEN
            : GRADIENT_PURPLE,
      }}
      className={`flex h-[62px] w-full max-w-[355px] items-center justify-center rounded-[15px] text-[20px] font-bold leading-none text-white transition-[filter,opacity] duration-150 hover:brightness-[1.04] active:brightness-95 disabled:cursor-not-allowed disabled:bg-[#BDBDBD] disabled:brightness-100 ${className}`}
    >
      {children}
    </button>
  );
}
