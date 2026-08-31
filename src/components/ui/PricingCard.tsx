"use client";

import React from "react";

export interface PricingPlan {
  id?: string;
  title?: string;
  price?: string;
  period?: string;
  originalPrice?: string;
  billingText?: string;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export interface PricingCardProps {
  plan?: PricingPlan;
  id?: string;
  title?: string;
  price?: string;
  billingPeriod?: string;
  period?: string;
  billingDetails?: string;
  billingText?: string;
  strikethroughPrice?: string;
  originalPrice?: string;
  savingsBadge?: string;
  selected?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  isDisabled?: boolean;
  variant?: "yearly" | "monthly" | "default";
  onSelect?: () => void;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  id = plan?.id || "plan",
  title = plan?.title || "Plan",
  price = plan?.price || "$5.99",
  billingPeriod = plan?.period || "/mo",
  period = billingPeriod,
  billingDetails = plan?.billingText || "Billed annually",
  billingText = billingDetails,
  strikethroughPrice = plan?.originalPrice,
  originalPrice = strikethroughPrice,
  savingsBadge,
  selected = plan?.isSelected || false,
  isSelected = selected,
  disabled = plan?.isDisabled || false,
  isDisabled = disabled,
  variant = "default",
  onSelect,
  className = "",
}) => {
  const active = isSelected;
  const isYearly = variant === "yearly" || savingsBadge !== undefined;

  const handleClick = () => {
    if (!isDisabled && onSelect) {
      onSelect();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative w-full rounded-[20px] p-6 transition-all cursor-pointer flex flex-col justify-between select-none ${
        active
          ? "border-[3px] border-[#27B68F] bg-[#F8FFF8] shadow-[0_4px_20px_rgba(39,182,143,0.15)]"
          : "border border-[#E0E0E0] bg-white hover:border-[#514cff] hover:shadow-sm"
      } ${isDisabled ? "opacity-60 cursor-not-allowed" : ""} ${className}`}
    >
      {/* Top row: Radio + Savings Badge */}
      <div className="flex items-center justify-between mb-4">
        {/* Custom Radio checkmark */}
        <div
          className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
            active
              ? "border-[#27B68F] bg-[#27B68F] text-white"
              : "border-[#C4C4C4] bg-white"
          }`}
        >
          {active && (
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          )}
        </div>

        {/* Savings Badge */}
        {savingsBadge && (
          <span className="px-2.5 py-1 text-[11px] font-black tracking-wide rounded-full bg-[#E8F8F2] text-[#27B68F] border border-[#BDEBD9]">
            {savingsBadge}
          </span>
        )}
      </div>

      {/* Plan Title */}
      <div className="mb-2">
        <h3 className="text-[17px] sm:text-[19px] font-black text-[#222222] tracking-tight">
          {title}
        </h3>
      </div>

      {/* Pricing Row */}
      <div className="mb-3">
        {originalPrice && (
          <span className="text-[13px] text-[#A0A0A0] line-through font-semibold block mb-0.5">
            {originalPrice}
          </span>
        )}
        <div className="flex items-baseline gap-1">
          <span className="text-[28px] sm:text-[32px] font-black text-[#222222] tracking-tight">
            {price}
          </span>
          <span className="text-[13px] font-bold text-[#666666]">
            {period.startsWith("/") ? period : `/${period}`}
          </span>
        </div>
      </div>

      {/* Billing Footnote Text */}
      <div className="pt-2 border-t border-[#EDEDED]/60 text-[12px] text-[#666666] font-medium leading-tight">
        {billingText}
      </div>
    </div>
  );
};
