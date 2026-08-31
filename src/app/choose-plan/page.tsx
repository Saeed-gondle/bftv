"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CouponCode } from "@/components/ui/CouponCode";

export default function ChoosePlanPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "monthly">("yearly");
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [appliedCoupon, setAppliedCoupon] = useState<string>("");
  const [isCouponOpenMobile, setIsCouponOpenMobile] = useState(false);
  const [couponInputMobile, setCouponInputMobile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleApplyCoupon = (code: string) => {
    const upper = code.toUpperCase().trim();
    setAppliedCoupon(upper);
    
    if (upper === "DUMMYCOUPON" || upper === "SAVE50" || upper === "DISCOUNT50" || upper === "TEST50") {
      setDiscountPercent(50);
    } else if (upper === "78BCD1998" || upper === "SAVE20" || upper === "BABY20") {
      setDiscountPercent(20);
    } else if (upper === "FIRST25") {
      setDiscountPercent(25);
    } else if (upper === "FREE100") {
      setDiscountPercent(100);
    } else {
      setDiscountPercent(0);
    }
  };

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/payment?plan=${selectedPlan}${discountPercent > 0 ? `&discount=${discountPercent}` : ""}`);
    }, 400);
  };

  // Base pricing
  const annualBaseRate = 5.99;
  const annualDiscountedRate = discountPercent > 0 
    ? (3.33 * (1 - discountPercent / 100)).toFixed(2)
    : "3.33";
  const annualBilled = discountPercent > 0
    ? (39.99 * (1 - discountPercent / 100)).toFixed(2)
    : "39.99";

  const monthlyBaseRate = 7.99;
  const monthlyDiscountedRate = discountPercent > 0
    ? (5.99 * (1 - discountPercent / 100)).toFixed(2)
    : "5.99";

  return (
    <>
      {/* =====================================================================
          DESKTOP LAYOUT (lg and up)
          - White split card: left=plan selection & coupon, right=purple panel with 6 white icons
          - Bottom progress stepper (2/3 Choose plan)
          ===================================================================== */}
      <div className="hidden lg:flex w-full flex-col items-center justify-center py-4 relative">
        
        {/* Main Centered Card (840px x 500px) */}
        <div className="w-full max-w-[840px] min-h-[500px] bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#EDEDED] overflow-hidden flex flex-row relative z-10">
          
          {/* Left Half: Choose your plan */}
          <div className="w-[52%] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              {/* Header with line */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[14px] font-bold text-[#333333] tracking-tight">
                  Choose your plan
                </span>
                <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
              </div>

              {/* Two Pricing Cards Side-by-Side */}
              <div className="grid grid-cols-2 gap-3.5 mb-5 pt-2">
                
                {/* Card 1: Yearly / Annual Plan */}
                <div
                  onClick={() => setSelectedPlan("yearly")}
                  className={`relative rounded-[16px] p-3.5 pt-4 cursor-pointer transition-all flex flex-col justify-between select-none ${
                    selectedPlan === "yearly"
                      ? "border-[2px] border-[#3CC48A] bg-[#F8FFF8] shadow-[0_6px_20px_rgba(60,196,138,0.15)]"
                      : "border border-[#D9D9D9] bg-white hover:border-[#3CC48A]"
                  }`}
                >
                  {/* Best Value / Save 50% Top Angled Badge */}
                  <div className="absolute -top-2.5 right-2 bg-gradient-to-r from-[#FFD439] to-[#FFB800] text-[#333333] text-[9.5px] font-black px-2 py-0.5 rounded-[5px] shadow-sm transform rotate-[-4deg] tracking-tight border border-white">
                    Save 50%
                  </div>

                  <div>
                    {/* Radio Indicator */}
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center mb-2.5 transition-colors ${
                        selectedPlan === "yearly"
                          ? "border-[#3CC48A] bg-[#3CC48A] text-white"
                          : "border-[#C4C4C4] bg-white"
                      }`}
                    >
                      {selectedPlan === "yearly" && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] font-black text-[#277480] tracking-tight mb-0.5">
                      Yearly
                    </h3>

                    {/* Pricing */}
                    <span className="text-[11px] text-[#A0A0A0] line-through font-semibold block leading-none mb-1">
                      $7.99
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[20px] font-black text-[#333333] tracking-tight leading-none">
                        ${annualDiscountedRate}
                      </span>
                      <span className="text-[10px] font-semibold text-[#777777]">
                        /mo
                      </span>
                    </div>
                  </div>

                  <p className="text-[9.5px] text-[#666666] font-medium leading-tight mt-3 pt-2 border-t border-[#E8F3EE]">
                    Billed annually at ${annualBilled} + tax
                  </p>
                </div>

                {/* Card 2: Monthly Plan */}
                <div
                  onClick={() => setSelectedPlan("monthly")}
                  className={`relative rounded-[16px] p-3.5 pt-4 cursor-pointer transition-all flex flex-col justify-between select-none ${
                    selectedPlan === "monthly"
                      ? "border-[2px] border-[#3CC48A] bg-[#F8FFF8] shadow-[0_6px_20px_rgba(60,196,138,0.15)]"
                      : "border border-[#D9D9D9] bg-white hover:border-[#BDBDBD]"
                  }`}
                >
                  <div>
                    {/* Radio Indicator */}
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center mb-2.5 transition-colors ${
                        selectedPlan === "monthly"
                          ? "border-[#3CC48A] bg-[#3CC48A] text-white"
                          : "border-[#C4C4C4] bg-white"
                      }`}
                    >
                      {selectedPlan === "monthly" && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] font-black text-[#555555] tracking-tight mb-0.5">
                      Monthly
                    </h3>

                    {/* Pricing */}
                    <span className="text-[11px] text-[#A0A0A0] line-through font-semibold block leading-none mb-1">
                      $7.99
                    </span>
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-[20px] font-black text-[#333333] tracking-tight leading-none">
                        ${monthlyDiscountedRate}
                      </span>
                      <span className="text-[10px] font-semibold text-[#777777]">
                        /mo
                      </span>
                    </div>
                  </div>

                  <p className="text-[9.5px] text-[#666666] font-medium leading-tight mt-3 pt-2 border-t border-[#F0F0F0]">
                    Billed monthly at ${monthlyDiscountedRate} + tax
                  </p>
                </div>

              </div>

              {/* Coupon Accordion */}
              <div className="my-1">
                <CouponCode
                  onApply={handleApplyCoupon}
                  initialCode={appliedCoupon}
                />
              </div>
            </div>

            {/* Action Button: Start Your Free Trial! (Purple) */}
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={handleContinue}
                disabled={isLoading}
                className="w-[245px] h-[46px] rounded-[10px] btn-purple-gradient text-white text-[14px] font-bold shadow-[0_4px_14px_rgba(91,88,223,0.3)] hover:brightness-105 active:brightness-95 transition-all flex items-center justify-center cursor-pointer disabled:opacity-60"
              >
                {isLoading ? "Please wait..." : "Start Your Free Trial!"}
              </button>
            </div>
          </div>

          {/* Right Half: Purple Features Panel */}
          <div className="w-[48%] bg-[#5350E9] p-8 md:p-10 flex flex-col justify-center text-white relative">
            <div className="max-w-[320px]">
              <h2 className="text-[32px] font-black leading-[1.1] tracking-tight mb-7">
                Join now<br />
                and get:
              </h2>

              {/* 6 Features Grid (2 rows x 3 cols) */}
              <div className="grid grid-cols-3 gap-y-6 gap-x-2 text-center">
                
                {/* 1. 7 days free trial */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center mb-1.5 text-white">
                    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 12 20 22 4 22 4 12" />
                      <rect x="2" y="7" width="20" height="5" />
                      <line x1="12" y1="22" x2="12" y2="7" />
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                    </svg>
                  </div>
                  <span className="text-[10.5px] font-medium leading-tight opacity-95">
                    7 days<br />free trial
                  </span>
                </div>

                {/* 2. Full app access */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center mb-1.5 text-white">
                    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L14.7 4.9L18.6 5.5L19 9.5L21.9 12.1L19.7 15.4L20.3 19.3L16.4 19.7L13.8 22.5L10.5 20.4L6.9 21L6.5 17.1L3.8 14.4L6 11.2L5.4 7.3L9.3 6.9L12 2Z" />
                      <path d="M10 14.2L7.8 12L6.8 13L10 16.2L16.2 10L15.2 9L10 14.2Z" fill="#5350E9" />
                    </svg>
                  </div>
                  <span className="text-[10.5px] font-medium leading-tight opacity-95">
                    Full app<br />access
                  </span>
                </div>

                {/* 3. Cancel any time */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center mb-1.5 text-white">
                    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm3.53 12.47a.75.75 0 11-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 01-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 011.06-1.06L12 10.94l2.47-2.47a.75.75 0 111.06 1.06L13.06 12l2.47 2.47z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[10.5px] font-medium leading-tight opacity-95">
                    Cancel<br />any time
                  </span>
                </div>

                {/* 4. Great Kids content */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center mb-1.5 text-white">
                    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="6" />
                      <path d="M6 12h4m-2-2v4m8-2h.01m2-2h.01" />
                    </svg>
                  </div>
                  <span className="text-[10.5px] font-medium leading-tight opacity-95">
                    Great Kids<br />content
                  </span>
                </div>

                {/* 5. 24/7 live babyfirst TV */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center mb-1.5 text-white">
                    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
                      <polyline points="17 2 12 7 7 2" />
                    </svg>
                  </div>
                  <span className="text-[10.5px] font-medium leading-tight opacity-95">
                    24/7 live<br />babyfirst TV
                  </span>
                </div>

                {/* 6. Learn with any device */}
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 flex items-center justify-center mb-1.5 text-white">
                    <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="14" height="11" rx="2" />
                      <path d="M6 18h6m-3-4v4" />
                      <rect x="15" y="8" width="7" height="13" rx="1.5" />
                    </svg>
                  </div>
                  <span className="text-[10.5px] font-medium leading-tight opacity-95">
                    Learn with<br />any device
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Stepper (Desktop bottom) */}
        <div className="mt-8 flex flex-col items-center gap-1.5 z-10">
          <div className="flex items-center gap-1.5">
            <div className="w-[64px] h-[5px] rounded-full bg-[#514cff]" />
            <div className="w-[64px] h-[5px] rounded-full bg-[#514cff]" />
            <div className="w-[64px] h-[5px] rounded-full bg-[#DDDCFF]" />
          </div>
          <span className="text-[11px] font-semibold text-[#9090A0] tracking-tight">
            2/3 Choose plan
          </span>
        </div>
      </div>

      {/* =====================================================================
          MOBILE LAYOUT (below lg)
          - Header: first™ logo left, Log out + email right
          - Stepper: 2/3 Choose plan
          - 3 top features (Learn with any device, Full app access, Cancel any time) with green icons
          - "Choose your plan" divider
          - Annual ($3.33/mo, Best Value) vs Monthly ($5.99/mo) cards
          - "Have a coupon code?" accordion
          - "Start Your Free Trial!" CTA button
          ===================================================================== */}
      <div className="block lg:hidden w-full min-h-screen flex flex-col bg-white">
        
        {/* Mobile Top Header */}
        <div className="w-full px-5 pt-3 pb-2 flex items-center justify-between">
          <Link href="/" className="relative h-7 w-20">
            <Image
              src="/logo.png"
              alt="first™"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          <div className="text-right">
            <Link href="/login" className="text-[12px] font-bold text-[#333333] hover:text-[#514cff] block leading-tight">
              Log out
            </Link>
            <span className="text-[10px] text-[#888888] font-medium leading-none">
              user@gmail.com
            </span>
          </div>
        </div>

        {/* Mobile Stepper Bar */}
        <div className="w-full px-5 pt-1 pb-3 bg-white flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 w-full">
            <div className="flex-1 h-[4px] rounded-full bg-[#514cff]" />
            <div className="flex-1 h-[4px] rounded-full bg-[#514cff]" />
            <div className="flex-1 h-[4px] rounded-full bg-[#E2E2FC]" />
          </div>
          <span className="text-[11px] font-semibold text-[#888888] tracking-tight text-left">
            2/3 Choose plan
          </span>
        </div>

        {/* Section 1: "Join now and get" Features */}
        <div className="w-full px-5 pt-4 pb-5 flex flex-col items-center">
          <h2 className="text-[18px] font-black text-[#222222] tracking-tight text-center mb-4">
            Join now and get
          </h2>

          {/* 3 Features Row */}
          <div className="w-full grid grid-cols-3 divide-x divide-[#E5E5E5] text-center">
            
            {/* Feature 1: Learn with any device */}
            <div className="flex flex-col items-center px-1">
              <div className="w-10 h-10 rounded-xl bg-[#27B68F] text-white flex items-center justify-center p-2 mb-2 shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="13" height="11" rx="2" />
                  <path d="M5 18h7m-3-4v4" />
                  <rect x="14" y="8" width="8" height="13" rx="1.5" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-[#4F4F4F] leading-tight">
                Learn with<br />any device
              </span>
            </div>

            {/* Feature 2: Full app access */}
            <div className="flex flex-col items-center px-1">
              <div className="w-10 h-10 rounded-xl bg-[#27B68F] text-white flex items-center justify-center p-2 mb-2 shadow-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.7 4.9L18.6 5.5L19 9.5L21.9 12.1L19.7 15.4L20.3 19.3L16.4 19.7L13.8 22.5L10.5 20.4L6.9 21L6.5 17.1L3.8 14.4L6 11.2L5.4 7.3L9.3 6.9L12 2Z" />
                  <path d="M10 14.2L7.8 12L6.8 13L10 16.2L16.2 10L15.2 9L10 14.2Z" fill="#27B68F" />
                  <path d="M9 12.5L11 14.5L15 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <span className="text-[11px] font-bold text-[#4F4F4F] leading-tight">
                Full app<br />access
              </span>
            </div>

            {/* Feature 3: Cancel any time */}
            <div className="flex flex-col items-center px-1">
              <div className="w-10 h-10 rounded-xl bg-[#27B68F] text-white flex items-center justify-center p-2 mb-2 shadow-sm">
                <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold leading-none">
                  ×
                </div>
              </div>
              <span className="text-[11px] font-bold text-[#4F4F4F] leading-tight">
                Cancel<br />any time
              </span>
            </div>

          </div>
        </div>

        {/* Section 2: "Choose your plan" Divider & Cards */}
        <div className="w-full px-5 pt-2 pb-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
              <span className="text-[13px] font-bold text-[#333333] tracking-tight">
                Choose your plan
              </span>
              <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
            </div>

            {/* Two Plan Cards */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              
              {/* Card 1: Annual Plan */}
              <div
                onClick={() => setSelectedPlan("yearly")}
                className={`relative rounded-[16px] p-3.5 pt-4 cursor-pointer transition-all flex flex-col justify-between select-none ${
                  selectedPlan === "yearly"
                    ? "border-[2px] border-[#3CC48A] bg-[#F8FFF8] shadow-sm"
                    : "border border-[#D9D9D9] bg-white"
                }`}
              >
                {/* Best Value Badge */}
                <div className="absolute -top-2.5 right-2 bg-[#FFD439] text-[#222222] text-[10px] font-black px-2 py-0.5 rounded-[5px] shadow-sm transform rotate-[-4deg] tracking-tight border border-white">
                  Best Value
                </div>

                <div>
                  {/* Radio Indicator */}
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mb-2 transition-colors ${
                      selectedPlan === "yearly"
                        ? "border-[#3CC48A] bg-[#3CC48A] text-white"
                        : "border-[#C4C4C4] bg-white"
                    }`}
                  >
                    {selectedPlan === "yearly" && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-[15px] font-black text-[#277480] tracking-tight mb-0.5">
                    Annual
                  </h3>

                  <span className="text-[11px] text-[#A0A0A0] line-through font-semibold block leading-none mb-1">
                    $5.99
                  </span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[20px] font-black text-[#333333] tracking-tight leading-none">
                      ${annualDiscountedRate}
                    </span>
                    <span className="text-[10px] font-semibold text-[#777777]">
                      /mo
                    </span>
                  </div>
                </div>

                <p className="text-[9.5px] text-[#666666] font-medium leading-tight mt-3">
                  Billed annually<br />at ${annualBilled}
                </p>
              </div>

              {/* Card 2: Monthly Plan */}
              <div
                onClick={() => setSelectedPlan("monthly")}
                className={`relative rounded-[16px] p-3.5 pt-4 cursor-pointer transition-all flex flex-col justify-between select-none ${
                  selectedPlan === "monthly"
                    ? "border-[2px] border-[#3CC48A] bg-[#F8FFF8] shadow-sm"
                    : "border border-[#D9D9D9] bg-white"
                }`}
              >
                <div>
                  {/* Radio Indicator */}
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center mb-2 transition-colors ${
                      selectedPlan === "monthly"
                        ? "border-[#3CC48A] bg-[#3CC48A] text-white"
                        : "border-[#C4C4C4] bg-white"
                    }`}
                  >
                    {selectedPlan === "monthly" && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-[15px] font-black text-[#555555] tracking-tight mb-0.5">
                    Monthly
                  </h3>

                  <span className="text-[11px] text-[#A0A0A0] line-through font-semibold block leading-none mb-1">
                    $7.99
                  </span>
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[20px] font-black text-[#333333] tracking-tight leading-none">
                      ${monthlyDiscountedRate}
                    </span>
                    <span className="text-[10px] font-semibold text-[#777777]">
                      /mo
                    </span>
                  </div>
                </div>

                <p className="text-[9.5px] text-[#666666] font-medium leading-tight mt-3">
                  Billed monthly
                </p>
              </div>

            </div>

            {/* Section 3: Coupon Accordion (Mobile) */}
            <div className="w-full flex flex-col items-center mb-6">
              <button
                type="button"
                onClick={() => setIsCouponOpenMobile(!isCouponOpenMobile)}
                className="text-[12.5px] font-bold text-[#666666] flex items-center gap-1 hover:text-[#222222]"
              >
                <span>{isCouponOpenMobile ? "Enter coupon code" : "Have a coupon code?"}</span>
                <span className="text-[11px] font-black">{isCouponOpenMobile ? "▲" : "▼"}</span>
              </button>

              {isCouponOpenMobile && (
                <div className="w-full mt-3 animate-in fade-in duration-150">
                  <div className="w-full h-[46px] rounded-[12px] border-2 border-[#514cff] bg-white px-3.5 flex items-center justify-between">
                    <input
                      type="text"
                      value={couponInputMobile}
                      placeholder="Enter code here"
                      onChange={(e) => {
                        const val = e.target.value;
                        setCouponInputMobile(val);
                        handleApplyCoupon(val);
                      }}
                      className="w-full bg-transparent text-[13px] font-bold text-[#333333] placeholder:text-[#AAAAAA] outline-none uppercase"
                    />
                    <div className="text-[#AAAAAA] ml-2">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                        <path d="M13 5v2m0 10v2m0-6v2" />
                      </svg>
                    </div>
                  </div>

                  {discountPercent > 0 && (
                    <div className="mt-1.5 text-center text-[11px] font-bold text-[#28b867]">
                      ✓ {discountPercent}% discount applied!
                    </div>
                  )}

                  <p className="text-[10px] text-[#888888] font-medium text-center mt-2">
                    *Discount coupons void free trials
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Mobile CTA Button */}
          <div className="w-full mt-2">
            <button
              type="button"
              onClick={handleContinue}
              disabled={isLoading}
              className="w-full h-[52px] rounded-[14px] btn-purple-gradient text-white text-[15px] font-bold shadow-[0_4px_16px_rgba(91,88,223,0.30)] flex items-center justify-center cursor-pointer disabled:opacity-60"
            >
              {isLoading ? "Please wait..." : "Start Your Free Trial!"}
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
