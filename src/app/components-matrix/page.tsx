"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ColorSwatches,
  Display40,
  Display30,
  Paragraph20,
  Paragraph18,
  Paragraph16,
  Paragraph14,
  EmailInput,
  PasswordInput,
  CardPaymentInput,
  StepProgress,
  Checkbox,
  PricingCard,
  CTAButton,
  GooglePayButton,
  AppStoreButton,
  AppDownloadBanner,
  CouponCode,
  AppleLogo,
  GooglePlayLogo,
  GoogleGLogo,
  VisaIcon,
  MastercardIcon,
  AmexIcon,
} from "@/components/ui";

export default function ComponentsMatrixPage() {
  const [emailNormal, setEmailNormal] = useState("");
  const [emailTyping, setEmailTyping] = useState("john.doe@example");
  const [emailFilled, setEmailFilled] = useState("alex@softwiz.com");
  const [emailError, setEmailError] = useState("invalid-email");
  const [cardNormal, setCardNormal] = useState("");
  const [cardFilled, setCardFilled] = useState("4532758912345678");
  const [cardError, setCardError] = useState("411111");
  const [chk1, setChk1] = useState(false);
  const [chk2, setChk2] = useState(true);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "monthly">("yearly");

  return (
    <div className="w-full max-w-7xl mx-auto py-6 px-4 space-y-12">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-3xl bg-white border border-[#EAEAEA] shadow-sm">
        <div>
          <span className="text-xs font-black uppercase tracking-wider text-[#514cff] bg-[#f0f0ff] px-2.5 py-1 rounded-full border border-[#d6d4ff]">
            Design System Reference Matrix
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#222222] mt-2">
            Softwiz Assessment UI Elements
          </h1>
          <p className="text-sm text-[#666666] mt-1">
            Exact design token variables, typography scales, atomic input state matrices, buttons, and badges.
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-[#514cff] text-white text-xs font-bold shadow-sm hover:bg-[#433de0] transition-colors"
          >
            Launch Live Funnel →
          </Link>
        </div>
      </div>

      {/* 1. Color Palette Swatches */}
      <section className="p-6 rounded-3xl bg-white border border-[#EAEAEA] shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-[#222222] border-b pb-2 border-[#F0F0F0]">
          1. Color Palette Tokens
        </h2>
        <ColorSwatches />
      </section>

      {/* 2. Typography Hierarchy Scale */}
      <section className="p-6 rounded-3xl bg-white border border-[#EAEAEA] shadow-xs space-y-6">
        <h2 className="text-lg font-bold text-[#222222] border-b pb-2 border-[#F0F0F0]">
          2. Typography Scale
        </h2>
        <div className="space-y-4">
          <div>
            <span className="text-xs text-[#888888] font-bold">Display 40px (Bold 700):</span>
            <Display40>Get full access to all stories</Display40>
          </div>
          <div>
            <span className="text-xs text-[#888888] font-bold">Display 30px (Black 900):</span>
            <Display30>Choose your plan</Display30>
          </div>
          <div>
            <span className="text-xs text-[#888888] font-bold">Paragraph 20px (Medium 500):</span>
            <Paragraph20>Start your 7-day free trial on any device.</Paragraph20>
          </div>
          <div>
            <span className="text-xs text-[#888888] font-bold">Paragraph 16px (Regular 400):</span>
            <Paragraph16>Curated audiobooks, safe games, and interactive stories.</Paragraph16>
          </div>
          <div>
            <span className="text-xs text-[#888888] font-bold">Paragraph 14px (Regular 400):</span>
            <Paragraph14>Subscription will automatically renew after free trial.</Paragraph14>
          </div>
        </div>
      </section>

      {/* 3. Input Fields Matrix */}
      <section className="p-6 rounded-3xl bg-white border border-[#EAEAEA] shadow-xs space-y-6">
        <h2 className="text-lg font-bold text-[#222222] border-b pb-2 border-[#F0F0F0]">
          3. Input Components State Matrix
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#666666]">Email: Normal</span>
            <EmailInput value={emailNormal} onChange={setEmailNormal} placeholder="Normal state" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#666666]">Email: Focused / Typing</span>
            <EmailInput value={emailTyping} onChange={setEmailTyping} state="focused" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#666666]">Email: Filled</span>
            <EmailInput value={emailFilled} onChange={setEmailFilled} state="filled" />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#666666]">Email: Error</span>
            <EmailInput value={emailError} onChange={setEmailError} error="Invalid email address" state="error" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#F0F0F0]">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#666666]">Card Input: Normal</span>
            <CardPaymentInput value={cardNormal} onChange={setCardNormal} />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#666666]">Card Input: Filled & Formatted</span>
            <CardPaymentInput value={cardFilled} onChange={setCardFilled} />
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#666666]">Card Input: Error State</span>
            <CardPaymentInput value={cardError} onChange={setCardError} error="Incomplete card number" />
          </div>
        </div>
      </section>

      {/* 4. Steppers & Checkboxes */}
      <section className="p-6 rounded-3xl bg-white border border-[#EAEAEA] shadow-xs space-y-6">
        <h2 className="text-lg font-bold text-[#222222] border-b pb-2 border-[#F0F0F0]">
          4. Progress Indicators & Checkboxes
        </h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#666666]">Step Progress Capsule:</span>
            <div className="flex flex-wrap gap-4 items-center">
              <StepProgress currentStep={1} totalSteps={3} label="Sign up" />
              <StepProgress currentStep={2} totalSteps={3} label="Choose plan" />
              <StepProgress currentStep={3} totalSteps={3} label="Purchase info" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#666666]">Checkboxes:</span>
            <div className="flex gap-4">
              <Checkbox checked={chk1} onChange={setChk1} label="Unchecked" />
              <Checkbox checked={chk2} onChange={setChk2} label="Checked" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pricing Cards */}
      <section className="p-6 rounded-3xl bg-white border border-[#EAEAEA] shadow-xs space-y-6">
        <h2 className="text-lg font-bold text-[#222222] border-b pb-2 border-[#F0F0F0]">
          5. Pricing Cards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          <PricingCard
            variant="yearly"
            title="Yearly Plan"
            price="$5.99"
            billingPeriod="month"
            billingDetails="Billed annually at $47.90 + tax"
            savingsBadge="SAVE 25%"
            strikethroughPrice="$7.99"
            selected={selectedPlan === "yearly"}
            onSelect={() => setSelectedPlan("yearly")}
          />
          <PricingCard
            variant="monthly"
            title="Monthly Plan"
            price="$7.99"
            billingPeriod="month"
            billingDetails="Billed monthly at $7.99 + tax"
            selected={selectedPlan === "monthly"}
            onSelect={() => setSelectedPlan("monthly")}
          />
        </div>
      </section>

      {/* 6. Buttons & Download Banner */}
      <section className="p-6 rounded-3xl bg-white border border-[#EAEAEA] shadow-xs space-y-6">
        <h2 className="text-lg font-bold text-[#222222] border-b pb-2 border-[#F0F0F0]">
          6. Buttons & Logos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <CTAButton variant="purple" showShine={true}>
            Purple Button
          </CTAButton>
          <CTAButton variant="green" showShine={true}>
            Green Button
          </CTAButton>
          <CTAButton variant="green" disabled={true}>
            Disabled State
          </CTAButton>
          <GooglePayButton />
        </div>

        <div className="pt-4 border-t border-[#F0F0F0]">
          <span className="text-xs font-bold text-[#666666] mb-3 block">Yellow App Store & Google Play Download Buttons:</span>
          <div className="flex flex-wrap gap-4">
            <AppStoreButton store="apple" />
            <AppStoreButton store="google" />
          </div>
        </div>
      </section>

      {/* 7. Accordion Coupon Code */}
      <section className="p-6 rounded-3xl bg-white border border-[#EAEAEA] shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-[#222222] border-b pb-2 border-[#F0F0F0]">
          7. Accordion Coupon Code Component
        </h2>
        <div className="max-w-md">
          <CouponCode onApply={(c) => console.log("Coupon applied:", c)} />
        </div>
      </section>
    </div>
  );
}
