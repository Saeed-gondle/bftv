"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  StepProgress,
  CTAButton,
  CardPaymentInput,
  GooglePayButton,
  VisaIcon,
  MastercardIcon,
  PaypalLogo,
} from "@/components/ui";

function PaymentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const plan = searchParams?.get("plan") || "yearly";
  const discount = Number(searchParams?.get("discount")) || 0;

  const [paymentMethod, setPaymentMethod] = useState<"card" | "gpay" | "paypal">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  // Pricing calculations
  const isYearly = plan === "yearly";
  const basePrice = isYearly ? 47.90 : 7.99;
  const finalPrice = discount > 0 ? (basePrice * (1 - discount / 100)).toFixed(2) : basePrice.toFixed(2);
  const monthlyRate = isYearly ? (discount > 0 ? (5.99 * (1 - discount / 100)).toFixed(2) : "5.99") : "7.99";

  const handlePay = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (paymentMethod === "card") {
      const newErrors: { [key: string]: string } = {};
      const rawCard = cardNumber.replace(/\s+/g, "");
      if (rawCard.length < 15) {
        newErrors.cardNumber = "Please enter a valid card number";
      }
      if (!cardHolder.trim()) {
        newErrors.cardHolder = "Name on card is required";
      }
      if (cardExpiry.length < 5) {
        newErrors.cardExpiry = "Valid MM/YY required";
      }
      if (cardCvv.length < 3) {
        newErrors.cardCvv = "CVV is required";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/completed");
    }, 600);
  };

  const handleExpiryChange = (val: string) => {
    const clean = val.replace(/\D/g, "").slice(0, 4);
    if (clean.length >= 3) {
      setCardExpiry(`${clean.slice(0, 2)}/${clean.slice(2)}`);
    } else {
      setCardExpiry(clean);
    }
    if (errors.cardExpiry) setErrors((prev) => ({ ...prev, cardExpiry: "" }));
  };

  return (
    <div className="w-full flex justify-center items-center py-4">
      {/* Outer Card Container */}
      <div className="w-full max-w-[920px] bg-white rounded-[32px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-[#EDEDED] p-6 sm:p-10 md:p-12 flex flex-col justify-between">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#F0F0F0] mb-8">
          <Link href="/choose-plan" className="flex items-center gap-2 text-xs font-bold text-[#888888] hover:text-[#222222] transition-colors">
            <span>← Back</span>
          </Link>
          <div className="relative h-7 w-20">
            <Image
              src="/logo.png"
              alt="first™"
              fill
              className="object-contain"
              priority
            />
          </div>
          <StepProgress currentStep={3} totalSteps={3} label="Purchase info" />
        </div>

        {/* 2-Column Checkout Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Left Column: Payment Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <h1 className="text-[24px] sm:text-[28px] font-black text-[#222222] tracking-tight mb-2">
              Purchase info
            </h1>
            <p className="text-[13px] text-[#777777] font-medium mb-6">
              Choose your preferred payment method to begin your trial.
            </p>

            {/* Payment Method Selector Tabs */}
            <div className="grid grid-cols-3 gap-2.5 mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                  paymentMethod === "card"
                    ? "border-[#514cff] bg-[#F7F7FF] text-[#514cff] shadow-xs"
                    : "border-[#E0E0E0] bg-white text-[#666666] hover:bg-[#FAFAFA]"
                }`}
              >
                <div className="flex items-center gap-1">
                  <VisaIcon />
                  <MastercardIcon />
                </div>
                <span className="text-[11px] font-bold">Credit Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("gpay")}
                className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                  paymentMethod === "gpay"
                    ? "border-[#514cff] bg-[#F7F7FF] text-[#514cff] shadow-xs"
                    : "border-[#E0E0E0] bg-white text-[#666666] hover:bg-[#FAFAFA]"
                }`}
              >
                <div className="h-[14px] flex items-center">
                  <span className="text-xs font-bold text-[#444444]">G Pay</span>
                </div>
                <span className="text-[11px] font-bold">Google Pay</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("paypal")}
                className={`py-3 px-2 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                  paymentMethod === "paypal"
                    ? "border-[#514cff] bg-[#F7F7FF] text-[#514cff] shadow-xs"
                    : "border-[#E0E0E0] bg-white text-[#666666] hover:bg-[#FAFAFA]"
                }`}
              >
                <div className="h-[14px] flex items-center">
                  <PaypalLogo className="h-3.5" />
                </div>
                <span className="text-[11px] font-bold">PayPal</span>
              </button>
            </div>

            {/* Selected Method Details */}
            {paymentMethod === "card" && (
              <form onSubmit={handlePay} className="flex flex-col gap-4">
                <CardPaymentInput
                  label="Card Number"
                  value={cardNumber}
                  onChange={(val) => {
                    setCardNumber(val);
                    if (errors.cardNumber) setErrors((prev) => ({ ...prev, cardNumber: "" }));
                  }}
                  error={errors.cardNumber}
                />

                <div className="flex flex-col gap-1">
                  <label className="text-[13px] font-semibold text-[#444444]">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name on card"
                    value={cardHolder}
                    onChange={(e) => {
                      setCardHolder(e.target.value);
                      if (errors.cardHolder) setErrors((prev) => ({ ...prev, cardHolder: "" }));
                    }}
                    className={`w-full h-[52px] rounded-[14px] border ${
                      errors.cardHolder ? "border-[#FF454B] bg-[#fff8f8]" : "border-[#d9d9d9] bg-[#fcfcfc]"
                    } px-4 text-[15px] font-medium text-[#222222] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#514cff] focus:bg-white focus:shadow-[0_0_0_3px_rgba(81,76,255,0.12)] transition-all`}
                  />
                  {errors.cardHolder && (
                    <span className="text-[12px] font-medium text-[#FF454B]">
                      {errors.cardHolder}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-[#444444]">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      maxLength={5}
                      value={cardExpiry}
                      onChange={(e) => handleExpiryChange(e.target.value)}
                      className={`w-full h-[52px] rounded-[14px] border ${
                        errors.cardExpiry ? "border-[#FF454B] bg-[#fff8f8]" : "border-[#d9d9d9] bg-[#fcfcfc]"
                      } px-4 text-[15px] font-medium text-[#222222] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#514cff] focus:bg-white focus:shadow-[0_0_0_3px_rgba(81,76,255,0.12)] transition-all`}
                    />
                    {errors.cardExpiry && (
                      <span className="text-[12px] font-medium text-[#FF454B]">
                        {errors.cardExpiry}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-[13px] font-semibold text-[#444444]">
                      CVV / CVC
                    </label>
                    <input
                      type="password"
                      placeholder="123"
                      maxLength={4}
                      value={cardCvv}
                      onChange={(e) => {
                        setCardCvv(e.target.value.replace(/\D/g, ""));
                        if (errors.cardCvv) setErrors((prev) => ({ ...prev, cardCvv: "" }));
                      }}
                      className={`w-full h-[52px] rounded-[14px] border ${
                        errors.cardCvv ? "border-[#FF454B] bg-[#fff8f8]" : "border-[#d9d9d9] bg-[#fcfcfc]"
                      } px-4 text-[15px] font-medium text-[#222222] placeholder:text-[#AAAAAA] focus:outline-none focus:border-[#514cff] focus:bg-white focus:shadow-[0_0_0_3px_rgba(81,76,255,0.12)] transition-all`}
                    />
                    {errors.cardCvv && (
                      <span className="text-[12px] font-medium text-[#FF454B]">
                        {errors.cardCvv}
                      </span>
                    )}
                  </div>
                </div>
              </form>
            )}

            {paymentMethod === "gpay" && (
              <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] text-center gap-4">
                <p className="text-sm font-medium text-[#555555]">
                  Pay swiftly and securely using your saved Google account cards.
                </p>
                <GooglePayButton onClick={() => handlePay()} className="w-full max-w-[280px]" />
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="flex flex-col items-center justify-center p-8 rounded-2xl bg-[#FAFAFA] border border-[#EAEAEA] text-center gap-4">
                <p className="text-sm font-medium text-[#555555]">
                  You will be redirected to PayPal to authorize your subscription.
                </p>
                <button
                  type="button"
                  onClick={() => handlePay()}
                  className="w-full max-w-[280px] h-[50px] rounded-xl bg-[#0070BA] hover:bg-[#005EA6] text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
                >
                  Pay with PayPal
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-[#F8FAFD] border border-[#E8EEF8]">
            <div>
              <h3 className="text-[16px] font-bold text-[#222222] mb-4 pb-3 border-b border-[#E2E8F4]">
                Order Summary
              </h3>

              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-[#444444]">
                  {isYearly ? "Annual Plan (7 Days Free)" : "Monthly Plan (7 Days Free)"}
                </span>
                <span className="text-sm font-bold text-[#111111]">${monthlyRate}/mo</span>
              </div>

              <div className="flex items-center justify-between text-xs text-[#777777] mb-4">
                <span>Billing cycle</span>
                <span>{isYearly ? "Billed annually" : "Billed monthly"}</span>
              </div>

              {discount > 0 && (
                <div className="flex items-center justify-between text-xs font-bold text-[#27B68F] mb-4 bg-[#E8F8F2] p-2 rounded-lg">
                  <span>Coupon discount applied</span>
                  <span>-{discount}%</span>
                </div>
              )}

              <div className="border-t border-[#E2E8F4] pt-4 mt-2 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#666666]">
                  <span>Due Today</span>
                  <span className="font-bold text-[#27B68F]">$0.00 (Free Trial)</span>
                </div>
                <div className="flex items-center justify-between text-sm font-black text-[#222222]">
                  <span>After 7 Days</span>
                  <span>${finalPrice} {isYearly ? "/ year" : "/ month"}</span>
                </div>
              </div>
            </div>

            {/* Disclaimers & Action */}
            <div className="mt-8 pt-4 border-t border-[#E2E8F4] flex flex-col gap-4">
              <p className="text-[11px] text-[#777777] leading-relaxed">
                By clicking Start Trial, you authorize first™ to charge your card ${finalPrice} at the end of your 7-day trial unless cancelled.
              </p>

              <CTAButton
                variant="green"
                onClick={() => handlePay()}
                disabled={isLoading}
                showShine={true}
                className="w-full h-[54px] text-[16px]"
              >
                {isLoading ? "Processing..." : "Start Free Trial!"}
              </CTAButton>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-sm font-medium text-[#777777]">Loading checkout...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
