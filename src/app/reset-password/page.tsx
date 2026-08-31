"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@/components/ui/PasswordInput";

type ResetStep = "request" | "sent" | "new_password" | "success";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [step, setStep] = useState<ResetStep>("request");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRequestReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("sent");
    }, 400);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError("");
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep("success");
    }, 400);
  };

  return (
    <>
      {/* =====================================================================
          DESKTOP LAYOUT (lg and up)
          - White split card: left=form, right=purple panel
          - Bottom progress stepper
          ===================================================================== */}
      <div className="hidden lg:flex w-full flex-col items-center justify-center py-4 relative">
        {/* ── Main Split Card ── */}
        <div className="relative z-10 w-full max-w-[840px] min-h-[500px] bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#E8E8E8] overflow-hidden flex flex-row">
          
          {/* LEFT: Form Panel */}
          <div className="flex-1 flex flex-col justify-between px-10 py-10">
            <div>
              {/* Header row */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[14px] font-semibold text-[#333333] tracking-tight whitespace-nowrap">
                  {step === "new_password" ? "Set new password" : step === "success" ? "Password reset" : "Reset password"}
                </span>
                <div className="flex-1 h-px bg-[#E5E5E5]" />
              </div>

              {step === "request" && (
                <form onSubmit={handleRequestReset} className="flex flex-col gap-[14px]">
                  <p className="text-[13px] text-[#666666] leading-relaxed mb-2">
                    Enter your email address and we&apos;ll send you a link to reset your password.
                  </p>

                  {/* Email field */}
                  <div className="relative w-full">
                    <input
                      id="reset-email"
                      type="email"
                      value={email}
                      placeholder="Your Email"
                      autoComplete="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailError) setEmailError("");
                      }}
                      className={`w-full h-[48px] rounded-[10px] border bg-white pl-4 pr-12 text-[13px] font-medium text-[#222222] placeholder:text-[#AAAAAA] focus:outline-none transition-all ${
                        emailError
                          ? "border-[#FF454B] bg-[#FFF8F8] focus:shadow-[0_0_0_3px_rgba(255,69,75,0.12)]"
                          : "border-[#D5D5D5] focus:border-[#514cff] focus:shadow-[0_0_0_3px_rgba(81,76,255,0.10)]"
                      }`}
                    />
                    {/* Mail icon */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#AAAAAA] pointer-events-none">
                      <svg width="18" height="14" viewBox="0 0 20 16" fill="none">
                        <path
                          d="M18.333 0H1.667C0.75 0 0 0.75 0 1.667v12.666C0 15.25.75 16 1.667 16h16.666C19.25 16 20 15.25 20 14.333V1.667C20 .75 19.25 0 18.333 0zm0 3.333L10 9.167 1.667 3.333V1.667L10 7.5l8.333-5.833v1.666z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    {emailError && (
                      <span className="text-[11px] font-medium text-[#FF454B] mt-1 block">
                        {emailError}
                      </span>
                    )}
                  </div>

                  {/* Send link button */}
                  <div className="mt-5 flex justify-center">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-[245px] h-[46px] rounded-[10px] btn-purple-gradient text-white text-[14px] font-bold shadow-[0_4px_14px_rgba(91,88,223,0.28)] hover:brightness-105 active:brightness-95 transition-all flex items-center justify-center cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? "Sending..." : "Send link to email"}
                    </button>
                  </div>
                </form>
              )}

              {step === "sent" && (
                <div className="flex flex-col items-center text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-[#EBF0FF] text-[#514cff] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-[18px] font-bold text-[#222222] mb-2">Check your inbox</h3>
                  <p className="text-[13px] text-[#666666] max-w-[300px] mb-6">
                    We&apos;ve sent a reset link to <strong className="text-[#333333]">{email}</strong>. Follow the instructions to reset your password.
                  </p>
                  <div className="flex flex-col gap-2.5 items-center">
                    <button
                      onClick={() => setStep("new_password")}
                      className="text-[13px] font-bold text-[#514cff] hover:underline"
                    >
                      Simulate opening reset link →
                    </button>
                    <button
                      onClick={() => setStep("request")}
                      className="text-[12px] font-medium text-[#888888] hover:text-[#555555]"
                    >
                      Didn&apos;t receive email? Try again
                    </button>
                  </div>
                </div>
              )}

              {step === "new_password" && (
                <form onSubmit={handleUpdatePassword} className="flex flex-col gap-[14px]">
                  <p className="text-[13px] text-[#666666] mb-2">
                    Create a new strong password for your account.
                  </p>

                  <PasswordInput
                    value={newPassword}
                    onChange={(val) => {
                      setNewPassword(val);
                      if (passwordError) setPasswordError("");
                    }}
                    placeholder="New password"
                    id="new-password"
                  />

                  <PasswordInput
                    value={confirmPassword}
                    onChange={(val) => {
                      setConfirmPassword(val);
                      if (passwordError) setPasswordError("");
                    }}
                    placeholder="Confirm new password"
                    error={passwordError}
                    id="confirm-password"
                  />

                  <div className="mt-5 flex justify-center">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-[245px] h-[46px] rounded-[10px] btn-purple-gradient text-white text-[14px] font-bold shadow-[0_4px_14px_rgba(91,88,223,0.28)] hover:brightness-105 active:brightness-95 transition-all flex items-center justify-center cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? "Saving..." : "Update password"}
                    </button>
                  </div>
                </form>
              )}

              {step === "success" && (
                <div className="flex flex-col items-center text-center py-6">
                  <div className="w-12 h-12 rounded-full bg-[#E5F8EE] text-[#27B68F] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-[20px] font-black text-[#222222] mb-2">Password reset!</h3>
                  <p className="text-[13px] text-[#666666] max-w-[300px] mb-6">
                    Your password has been successfully updated. You can now sign in with your new password.
                  </p>
                  <Link
                    href="/login"
                    className="w-[245px] h-[46px] rounded-[10px] btn-purple-gradient text-white text-[14px] font-bold shadow-[0_4px_14px_rgba(91,88,223,0.28)] flex items-center justify-center hover:brightness-105"
                  >
                    Back to sign in
                  </Link>
                </div>
              )}
            </div>

            {/* Footer */}
            {step !== "success" && (
              <div className="mt-8 text-center text-[12px] text-[#666666]">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="font-bold text-[#333333] underline underline-offset-2 hover:text-[#514cff] transition-colors"
                >
                  sign in
                </Link>
              </div>
            )}
          </div>

          {/* RIGHT: Purple Panel */}
          <div className="w-[46%] flex-shrink-0 bg-[#5350E9] flex flex-col justify-center px-12 py-12 rounded-r-[28px]">
            <h2
              className="text-white font-black leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Reset
              <br />
              Your
              <br />
              Password
            </h2>
            <p className="text-white/90 text-[14px] font-medium leading-relaxed">
              Enter your email to recover your account and get back to exploring great content for your kids.
            </p>
          </div>
        </div>

        {/* Bottom progress stepper */}
        <div className="mt-8 flex flex-col items-center gap-1.5 z-10">
          <div className="flex items-center gap-1.5">
            <div className="w-[64px] h-[5px] rounded-full bg-[#514cff]" />
            <div className="w-[64px] h-[5px] rounded-full bg-[#DDDCFF]" />
            <div className="w-[64px] h-[5px] rounded-full bg-[#DDDCFF]" />
          </div>
          <span className="text-[11px] font-semibold text-[#9090A0] tracking-tight">
            Account recovery
          </span>
        </div>
      </div>

      {/* =====================================================================
          MOBILE LAYOUT (below lg)
          - Blue gradient top section with illustration
          - "Reset password" heading + subtext
          - Email field / OTP / New Password
          - Purple rounded "Send link to email" button full-width
          - "Remember your password? sign in" footer
          ===================================================================== */}
      <div className="block lg:hidden w-full min-h-screen flex flex-col bg-white">
        
        {/* Mobile top progress bar */}
        <div className="w-full px-6 pt-4 pb-2 bg-white flex flex-col gap-2">
          <div className="flex items-center gap-1.5 w-full">
            <div className="flex-1 h-[4px] rounded-full bg-[#514cff]" />
            <div className="flex-1 h-[4px] rounded-full bg-[#E2E2FC]" />
            <div className="flex-1 h-[4px] rounded-full bg-[#E2E2FC]" />
          </div>
          <span className="text-[11px] font-semibold text-[#888888] tracking-tight text-left">
            Account recovery
          </span>
        </div>

        {/* Top purple/gradient illustration area */}
        <div
          className="relative w-full flex flex-col items-center pt-2 pb-8 px-6"
          style={{
            background:
              "linear-gradient(180deg, #EEF0FF 0%, #F7F8FF 60%, #FFFFFF 100%)",
          }}
        >
          {/* Illustration image */}
          <div className="relative w-[260px] h-[160px] mb-2">
            <Image
              src="/reset-pass-illus.png"
              alt="Reset password illustration"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          <h1 className="text-[28px] font-black text-[#222222] tracking-tight text-center leading-tight mb-2">
            {step === "new_password" ? "New password" : step === "success" ? "Password reset" : "Reset password"}
          </h1>
          <p className="text-[13px] font-medium text-[#555555] text-center leading-snug mb-0 max-w-[280px]">
            {step === "new_password"
              ? "Create a new strong password for your account"
              : step === "sent"
              ? `Check your inbox at ${email}`
              : "Enter your email and we'll send you a link to reset your password"}
          </p>
        </div>

        {/* Form section */}
        <div className="flex-1 flex flex-col px-6 pt-6 pb-8">
          <p className="text-[13px] font-semibold text-[#888888] mb-4">
            {step === "new_password" ? "Set password" : "Email address"}
          </p>

          {step === "request" && (
            <form onSubmit={handleRequestReset} className="flex flex-col gap-3">
              {/* Email field */}
              <div className="relative w-full">
                <input
                  id="reset-email-mobile"
                  type="email"
                  value={email}
                  placeholder="Your Email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError("");
                  }}
                  className={`w-full h-[50px] rounded-[12px] border bg-white pl-4 pr-12 text-[14px] font-medium text-[#222222] placeholder:text-[#AAAAAA] focus:outline-none transition-all ${
                    emailError
                      ? "border-[#FF454B]"
                      : "border-[#D5D5D5] focus:border-[#514cff] focus:shadow-[0_0_0_3px_rgba(81,76,255,0.10)]"
                  }`}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[#AAAAAA] pointer-events-none">
                  <svg width="18" height="14" viewBox="0 0 20 16" fill="none">
                    <path
                      d="M18.333 0H1.667C0.75 0 0 0.75 0 1.667v12.666C0 15.25.75 16 1.667 16h16.666C19.25 16 20 15.25 20 14.333V1.667C20 .75 19.25 0 18.333 0zm0 3.333L10 9.167 1.667 3.333V1.667L10 7.5l8.333-5.833v1.666z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {emailError && (
                  <span className="text-[11px] font-medium text-[#FF454B] mt-0.5 block">
                    {emailError}
                  </span>
                )}
              </div>

              {/* Continue Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[52px] rounded-[14px] btn-purple-gradient text-white text-[15px] font-bold shadow-[0_4px_16px_rgba(91,88,223,0.30)] hover:brightness-105 active:brightness-95 transition-all flex items-center justify-center cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send link to email"}
                </button>
              </div>
            </form>
          )}

          {step === "sent" && (
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-12 h-12 rounded-full bg-[#EBF0FF] text-[#514cff] flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[13px] text-[#666666] mb-6 leading-relaxed">
                We sent a link to <strong className="text-[#333333]">{email}</strong>.
              </p>
              <button
                onClick={() => setStep("new_password")}
                className="w-full h-[50px] rounded-[12px] btn-purple-gradient text-white text-[14px] font-bold mb-3"
              >
                Open Reset Form (Demo)
              </button>
              <button
                onClick={() => setStep("request")}
                className="text-[12px] font-semibold text-[#888888]"
              >
                Try different email
              </button>
            </div>
          )}

          {step === "new_password" && (
            <form onSubmit={handleUpdatePassword} className="flex flex-col gap-3">
              <div className="relative w-full">
                <PasswordInputMobile
                  value={newPassword}
                  onChange={(val) => {
                    setNewPassword(val);
                    if (passwordError) setPasswordError("");
                  }}
                  placeholder="New password"
                />
              </div>

              <div className="relative w-full">
                <PasswordInputMobile
                  value={confirmPassword}
                  onChange={(val) => {
                    setConfirmPassword(val);
                    if (passwordError) setPasswordError("");
                  }}
                  placeholder="Confirm password"
                  error={passwordError}
                />
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[52px] rounded-[14px] btn-purple-gradient text-white text-[15px] font-bold shadow-[0_4px_16px_rgba(91,88,223,0.30)] flex items-center justify-center"
                >
                  {isLoading ? "Saving..." : "Update password"}
                </button>
              </div>
            </form>
          )}

          {step === "success" && (
            <div className="flex flex-col items-center text-center py-4">
              <div className="w-12 h-12 rounded-full bg-[#E5F8EE] text-[#27B68F] flex items-center justify-center mb-3">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-[13px] text-[#666666] mb-6">
                Your password is ready to use!
              </p>
              <Link
                href="/login"
                className="w-full h-[52px] rounded-[14px] btn-purple-gradient text-white text-[15px] font-bold flex items-center justify-center shadow-[0_4px_16px_rgba(91,88,223,0.30)]"
              >
                Continue to sign in
              </Link>
            </div>
          )}

          {/* Footer */}
          {step !== "success" && (
            <div className="mt-6 text-center text-[12px] text-[#666666]">
              Remember your password?{" "}
              <Link
                href="/login"
                className="font-bold text-[#333333] underline underline-offset-2"
              >
                sign in
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function PasswordInputMobile({
  value,
  onChange,
  placeholder = "••••",
  error,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
}) {
  const [show, setShow] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <div className="flex flex-col gap-0.5">
      <div
        className={`relative w-full h-[50px] rounded-[12px] border bg-white flex items-center px-4 transition-all ${
          error
            ? "border-[#FF454B]"
            : focused
            ? "border-[#514cff] shadow-[0_0_0_3px_rgba(81,76,255,0.10)]"
            : "border-[#D5D5D5]"
        }`}
      >
        <input
          type={show ? "text" : "password"}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent text-[14px] font-medium text-[#222222] placeholder:text-[#AAAAAA] focus:outline-none"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="ml-2 text-[#AAAAAA] hover:text-[#555555] transition-colors focus:outline-none"
          tabIndex={-1}
        >
          {show ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
              <line x1="1" y1="1" x2="23" y2="23"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          )}
        </button>
      </div>
      {error && (
        <span className="text-[11px] font-medium text-[#FF454B] mt-0.5 block pl-1">
          {error}
        </span>
      )}
    </div>
  );
}
