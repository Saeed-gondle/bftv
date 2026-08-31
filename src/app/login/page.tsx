"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { EmailInput } from "@/components/ui/EmailInput";
import { PasswordInput } from "@/components/ui/PasswordInput";
import { loginUser } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!email || !email.includes("@")) {
      setEmailError("Please enter a valid email address");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password || password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!hasError) {
      setIsLoading(true);
      const res = loginUser(email, password);
      setTimeout(() => {
        setIsLoading(false);
        if (res.success) {
          router.push("/choose-plan");
        } else {
          setAuthError(res.message || "Invalid credentials");
        }
      }, 400);
    }
  };

  return (
    <>
      {/* =====================================================================
          DESKTOP LAYOUT (lg and up)
          - Decorative circle photos on left/right edges
          - White split card: left=form, right=purple panel
          - Bottom progress stepper
          ===================================================================== */}
      <div className="hidden lg:flex w-full flex-col items-center justify-center py-4 relative">
        {/* ── Main Split Card ── */}
        <div className="relative z-10 w-full max-w-[840px] min-h-[500px] bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-[#E8E8E8] overflow-hidden flex flex-row">
          {/* LEFT: Form Panel */}
          <div className="flex-1 flex flex-col justify-between px-10 py-10">
            {/* Header row */}
            <div>
              <div className="flex items-center gap-4 mb-9">
                <span className="text-[14px] font-semibold text-[#333333] tracking-tight whitespace-nowrap">
                  Sign in
                </span>
                <div className="flex-1 h-px bg-[#E5E5E5]" />
              </div>

              {authError && (
                <div className="mb-4 p-3 rounded-xl bg-[#FFF2F2] border border-[#FFD0D0] text-xs font-semibold text-[#FF454B]">
                  {authError}
                </div>
              )}

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-[14px]"
              >
                {/* Email field – icon on RIGHT matching the screenshot */}
                <div className="relative w-full">
                  <input
                    id="signup-email"
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
                  {/* Mail icon – right side */}
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

                {/* Password field – icon on RIGHT */}
                <div className="relative w-full">
                  <PasswordInput
                    value={password}
                    onChange={(val) => {
                      setPassword(val);
                      if (passwordError) setPasswordError("");
                    }}
                    placeholder="Create password"
                    error={passwordError}
                    id="signup-password"
                  />
                </div>

                {/* Forgot password link */}
                <div className="flex justify-end mt-1.5">
                  <Link
                    href="/reset-password"
                    className="text-[12px] font-bold text-[#514cff] hover:underline transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Continue Button – centered, fixed width matching Figma */}
                <div className="mt-5 flex justify-center">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-[245px] h-[46px] rounded-[10px] btn-purple-gradient text-white text-[14px] font-bold shadow-[0_4px_14px_rgba(91,88,223,0.28)] hover:brightness-105 active:brightness-95 transition-all flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Signing in…" : "Continue"}
                  </button>
                </div>
              </form>
            </div>

            {/* Footer – "Don't have an account? sign up" */}
            <div className="mt-8 text-center text-[12px] text-[#666666]">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="font-bold text-[#333333] underline underline-offset-2 hover:text-[#514cff] transition-colors"
              >
                sign up
              </Link>
            </div>
          </div>

          {/* RIGHT: Purple Panel */}
          <div className="w-[46%] flex-shrink-0 bg-[#5350E9] flex flex-col justify-center px-12 py-12 rounded-r-[28px]">
            <h2
              className="text-white font-black leading-[1.1] tracking-tight mb-5"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)" }}
            >
              Welcome
              <br />
              Back!
            </h2>
            <p className="text-white/90 text-[14px] font-medium leading-relaxed">
              Sign in to continue exploring interactive stories, songs, and games with your kids.
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
            1/3 Sign up/in
          </span>
        </div>
      </div>

      {/* =====================================================================
          MOBILE LAYOUT (below lg)
          - Blue gradient top section with Hello! character illustration
          - "Welcome Back!" heading + "Sign in to continue exploring..." subtext
          - "Sign in" section header
          - Email + Password fields (icon on right)
          - Purple rounded "Continue" button full-width
          - "Don't have an account? sign up" footer
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
            1/3 Sign in
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
              src="/signin-illus.png"
              alt="Sign in illustration"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>

          <h1 className="text-[28px] font-black text-[#222222] tracking-tight text-center leading-tight mb-2">
            Welcome Back!
          </h1>
          <p className="text-[13px] font-medium text-[#555555] text-center leading-snug mb-0">
            Sign in to continue exploring interactive
            <br />
            stories, songs, and games with your kids.
          </p>
        </div>

        {/* Form section */}
        <div className="flex-1 flex flex-col px-6 pt-6 pb-8">
          <p className="text-[13px] font-semibold text-[#888888] mb-4">
            Sign in
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Email field – border input, icon on right */}
            <div className="relative w-full">
              <input
                id="signup-email-mobile"
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
                    d="M18.333 0H1.667C0.75 0 0 .75 0 1.667v12.666C0 15.25.75 16 1.667 16h16.666C19.25 16 20 15.25 20 14.333V1.667C20 .75 19.25 0 18.333 0zm0 3.333L10 9.167 1.667 3.333V1.667L10 7.5l8.333-5.833v1.666z"
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

            {/* Password field – show bullets + eye toggle on right */}
            <div className="relative w-full">
              <PasswordInputMobile
                value={password}
                onChange={(val) => {
                  setPassword(val);
                  if (passwordError) setPasswordError("");
                }}
                error={passwordError}
              />
            </div>

            {/* Forgot password link */}
            <div className="flex justify-end mt-1">
              <Link
                href="/reset-password"
                className="text-[12px] font-bold text-[#514cff] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Continue button – full-width on mobile per design */}
            <div className="mt-5">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-[52px] rounded-[14px] btn-purple-gradient text-white text-[15px] font-bold shadow-[0_4px_16px_rgba(91,88,223,0.30)] hover:brightness-105 active:brightness-95 transition-all flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in…" : "Continue"}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center text-[12px] text-[#666666]">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="font-bold text-[#333333] underline underline-offset-2"
            >
              sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────
   Inline mobile-only password input with eye toggle on RIGHT
   (matches the screenshot: bullets + eye icon on the right side)
   ───────────────────────────────────────────────────────── */
function PasswordInputMobile({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (v: string) => void;
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
          placeholder="••••"
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
        <span className="text-[11px] font-medium text-[#FF454B] mt-0.5 block">
          {error}
        </span>
      )}
    </div>
  );
}
