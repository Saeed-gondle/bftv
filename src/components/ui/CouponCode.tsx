"use client";

import React, { useState } from "react";
import { TicketIcon, CheckCircleIcon, CrossCircleIcon } from "./Icons";

export type CouponStatus = "idle" | "empty" | "valid" | "valid-badge" | "invalid";

export interface CouponCodeProps {
  status?: CouponStatus;
  isExpanded?: boolean;
  headerVariant?: "muted" | "purple" | "default";
  defaultCode?: string;
  initialCode?: string;
  onApply?: (code: string) => boolean | void;
  className?: string;
}

export function CouponCode({
  status,
  isExpanded: initialExpanded,
  headerVariant = "default",
  defaultCode = "",
  initialCode,
  onApply,
  className = "",
}: CouponCodeProps) {
  const resolvedDefaultCode = initialCode !== undefined ? initialCode : defaultCode;
  const [isOpen, setIsOpen] = useState(
    initialExpanded ?? (Boolean(resolvedDefaultCode) || (status !== undefined && status !== "idle"))
  );
  const [code, setCode] = useState(
    resolvedDefaultCode || (status && status !== "idle" && status !== "empty" ? "78BCD1998" : "")
  );
  const [internalStatus, setInternalStatus] = useState<CouponStatus>(status || "idle");

  const activeStatus = status !== undefined ? status : internalStatus;
  const isCurrentlyOpen = initialExpanded !== undefined ? initialExpanded : isOpen;

  const handleToggle = () => {
    if (initialExpanded === undefined) {
      setIsOpen(!isCurrentlyOpen);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toUpperCase();
    setCode(val);
    const VALID_COUPONS = [
      "78BCD1998",
      "DUMMYCOUPON",
      "TEST50",
      "DISCOUNT50",
      "SAVE20",
      "SAVE50",
      "FIRST25",
      "BABY20",
      "FREE100",
    ];

    if (!val) {
      setInternalStatus("empty");
    } else if (VALID_COUPONS.includes(val)) {
      setInternalStatus("valid-badge");
    } else if (val.length >= 6) {
      setInternalStatus("invalid");
    }
    onApply?.(val);
  };

  const getInputClasses = () => {
    if (activeStatus === "valid" || activeStatus === "valid-badge") {
      return "border-2 border-[#28b867] text-[#555555]";
    }
    if (activeStatus === "invalid") {
      return "border-2 border-[#ff454b] text-[#555555]";
    }
    return "border border-[#d9d9d9] focus-within:border-2 focus-within:border-[#514cff] text-[#555555]";
  };

  return (
    <div className={`w-full max-w-[360px] mx-auto flex flex-col items-center select-none ${className}`}>
      {/* Header / Accordion Trigger */}
      <button
        type="button"
        onClick={handleToggle}
        className="h-auto py-1 text-[13px] font-bold text-[#555555] hover:text-[#222222] flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
      >
        <span>Have a coupon code{isCurrentlyOpen ? "!" : "?"}</span>
        <span className="text-[12px] leading-none font-black">{isCurrentlyOpen ? "▲" : "▼"}</span>
      </button>

      {/* Expanded Content */}
      {isCurrentlyOpen && (
        <div className="w-full flex flex-col items-center mt-3 animate-in fade-in duration-200">
          <div
            className={`w-full h-[46px] rounded-[12px] bg-white px-3.5 flex items-center justify-between transition-all ${getInputClasses()}`}
          >
            <input
              type="text"
              value={code}
              placeholder="e.g. 78BCD1998"
              onChange={handleInputChange}
              className="w-full h-full bg-transparent text-[13px] font-bold text-[#333333] placeholder:text-[#BBBBBB] outline-none"
            />

            <div className="shrink-0 ml-2 flex items-center">
              {(activeStatus === "idle" || activeStatus === "empty" || (!code && activeStatus !== "valid" && activeStatus !== "invalid")) && (
                <TicketIcon />
              )}
              {activeStatus === "valid" && <CheckCircleIcon />}
              {activeStatus === "valid-badge" && <CheckCircleIcon />}
              {activeStatus === "invalid" && <CrossCircleIcon />}
            </div>
          </div>

          {/* Floating Badges */}
          {activeStatus === "valid-badge" && (
            <div className="block w-max -mt-[1px] px-3 py-1 bg-[#28b867] text-white text-[10px] font-bold rounded-b-[6px] shadow-sm animate-in fade-in slide-in-from-top-1">
              Cool, we got you covered
            </div>
          )}

          {activeStatus === "invalid" && (
            <div className="block w-max -mt-[1px] px-3 py-1 bg-[#ff5555] text-white text-[10px] font-bold rounded-b-[6px] shadow-sm animate-in fade-in slide-in-from-top-1">
              Invalid code
            </div>
          )}

          {/* Disclaimer Note */}
          <div className="mt-2 text-center text-[11px] text-[#777777] font-medium">
            *Discount coupons void free trials
          </div>
        </div>
      )}
    </div>
  );
}
