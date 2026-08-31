"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CompletedPage() {
  const [deviceType, setDeviceType] = useState<"ios" | "android">("ios");

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center overflow-x-hidden bg-white text-[#333333]">
      
      {/* ── Background Curved Dome Graphic (Clipped to prevent scrollbars) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Desktop Dome: large ellipse starting right behind the middle of the baby icon */}
        <div 
          className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-[160vw] max-w-[2200px] h-[1000px] rounded-t-[100%] overflow-hidden"
          style={{
            top: "295px",
            background: "linear-gradient(180deg, #4A44CD 0%, #3B35BC 45%, #2B25A0 100%)",
            boxShadow: "0 -20px 60px rgba(59, 53, 188, 0.25)"
          }}
        >
          <div className="relative w-full h-full opacity-60">
            <Image
              src="/Ellipse 368.png"
              alt=""
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>

        {/* Mobile Dome: curve rising up on smaller screens */}
        <div 
          className="block lg:hidden absolute left-1/2 -translate-x-1/2 w-[220vw] h-[900px] rounded-t-[100%] overflow-hidden"
          style={{
            top: "250px",
            background: "linear-gradient(180deg, #4A44CD 0%, #3B35BC 45%, #2B25A0 100%)",
          }}
        >
          <div className="relative w-full h-full opacity-60">
            <Image
              src="/Ellipse 368.png"
              alt=""
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>

      {/* =====================================================================
          MAIN CONTENT (Relative z-10)
          ===================================================================== */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-6 sm:pt-10 pb-16 flex flex-col items-center text-center">

        {/* ── 1. Headline ── */}
        <h1 
          className="font-black tracking-tight mb-6 sm:mb-8 leading-[1.12]"
          style={{
            color: "#4743C9",
            fontSize: "clamp(30px, 4.5vw, 46px)",
          }}
        >
          Thank you
          <br />
          for joining us!
        </h1>

        {/* ── 2. Baby App Icon with Celebratory Sparkles ── */}
        <div className="relative mb-8 sm:mb-10 flex items-center justify-center">
          
          {/* Floating Yellow Sparkle Stars */}
          <div className="absolute -top-3 -right-6 text-[#FCC025] animate-pulse">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
          </div>
          <div className="absolute top-10 -right-10 text-[#FCC025]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
          </div>
          <div className="absolute -bottom-2 -left-8 text-[#FCC025]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
          </div>

          {/* Floating Colored Confetti Dots */}
          <div className="absolute -top-4 -left-6 w-3 h-3 rounded-full bg-[#FF8DAF] opacity-80" />
          <div className="absolute top-6 -left-12 w-4 h-4 rounded-full bg-[#5CE1B6] opacity-80" />
          <div className="absolute -bottom-4 right-12 w-2.5 h-2.5 rounded-full bg-[#54D5FF] opacity-80" />

          {/* Main App Icon Container (Squircle with Baby Character) */}
          <div className="relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] rounded-[26px] sm:rounded-[30px] shadow-[0_16px_36px_rgba(40,30,120,0.22)] overflow-hidden bg-white border-2 border-white/80 transition-transform hover:scale-105 duration-300">
            <Image
              src="/baby.png"
              alt="babyfirst App"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Green Verified Checkmark Circle Badge (Top-Left) */}
          <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#31C48D] to-[#4BE0A5] text-white border-[3px] border-white flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        {/* =====================================================================
            3. STORE ACTIONS (Desktop vs Mobile specific)
            ===================================================================== */}
        
        {/* ── DESKTOP BUTTONS: Google Play + App Store Badges side-by-side ── */}
        <div className="hidden lg:flex items-center justify-center gap-4 mb-10 z-10">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[56px] w-[185px] rounded-[12px] overflow-hidden hover:scale-105 transition-transform shadow-md bg-black flex items-center justify-center"
          >
            <Image
              src="/Google play sownload.png"
              alt="Get it on Google Play"
              fill
              className="object-contain p-1"
            />
          </a>

          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[56px] w-[185px] rounded-[12px] overflow-hidden hover:scale-105 transition-transform shadow-md bg-black flex items-center justify-center"
          >
            <Image
              src="/App store  download.png"
              alt="Download on the App Store"
              fill
              className="object-contain p-1"
            />
          </a>
        </div>

        {/* ── MOBILE CTA BUTTON: Glowing Yellow Button with Apple / Android icon ── */}
        <div className="block lg:hidden w-full max-w-[340px] mb-8 z-10">
          <div className="relative group">
            {/* Glowing Golden Ambient Shadow */}
            <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-r from-[#FFD700] via-[#FFAE00] to-[#FF8800] opacity-75 blur-xl group-hover:opacity-100 transition duration-300 pointer-events-none" />

            <a
              href={deviceType === "ios" ? "https://apps.apple.com" : "https://play.google.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full h-[60px] rounded-[20px] bg-gradient-to-b from-[#FFE54C] via-[#FFCA18] to-[#FFB000] text-[#222222] font-black text-[18px] flex items-center justify-between px-6 shadow-[0_6px_20px_rgba(0,0,0,0.20),inset_0_2px_2px_rgba(255,255,255,0.6)] hover:brightness-105 active:scale-[0.98] transition-all border-2 border-white/40"
            >
              {/* Left Brand Icon */}
              <div className="flex items-center gap-2.5">
                {deviceType === "ios" ? (
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 170 170">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.85-11.71-14.44-6.3-10.15-11.13-21.72-14.48-34.73-3.36-13-5.04-25.26-5.04-36.78 0-14.57 3.59-26.68 10.77-36.33 7.18-9.65 16.31-14.64 27.39-14.97 4.12 0 8.92 1.16 14.41 3.48 5.49 2.32 9.4 3.53 11.72 3.64 2.12-.22 6.09-1.48 11.91-3.79 5.82-2.31 10.37-3.41 13.65-3.3 12.39.78 22.38 5.65 29.98 14.62-10.76 6.53-16.03 15.65-15.81 27.39.22 9.13 3.75 16.85 10.59 23.16 6.85 6.3 14.89 9.89 24.13 10.76-2.28 7.07-5.05 14.45-8.32 22.14zM119.22 31.84c0-7.39 2.66-14.24 7.99-20.55 5.33-6.3 11.85-10.43 19.57-12.39.87 7.72-1.63 14.89-7.5 21.52-5.87 6.63-12.55 10.43-20.06 11.42z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.1556-.269.0634-.613-.2056-.7686-.269-.1556-.613-.0634-.7686.2056l-2.023 3.504C15.3023 8.167 13.7015 7.784 12 7.784c-1.7015 0-3.3023.383-4.8824 1.0212L5.0946 5.3012c-.1556-.269-.4996-.3612-.7686-.2056-.269.1556-.3612.4996-.2056.7686l1.996 3.4572C2.6874 11.1963.3444 14.7706.0002 19h23.9996c-.3442-4.2294-2.6872-7.8037-6.1176-9.6786"/>
                  </svg>
                )}
                <span>Open your App</span>
              </div>

              {/* Right Chevron */}
              <svg className="w-5 h-5 stroke-current stroke-[3] fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Toggle Device Prompt */}
          <div className="mt-3.5">
            <button
              type="button"
              onClick={() => setDeviceType(deviceType === "ios" ? "android" : "ios")}
              className="text-[13px] font-medium text-white/80 hover:text-white underline underline-offset-4 transition-colors"
            >
              {deviceType === "ios" ? "Have an android phone?" : "Have an iPhone?"}
            </button>
          </div>
        </div>

        {/* ── 4. "or install on TV" Section ── */}
        <div className="w-full max-w-[500px] flex flex-col items-center z-10 mt-2 sm:mt-4">
          
          {/* Horizontal Divider Line with text */}
          <div className="w-full flex items-center justify-center gap-3 mb-5 sm:mb-6">
            <div className="flex-1 h-[1px] bg-white/25" />
            <span className="text-[13px] sm:text-[14px] font-bold text-white/90 tracking-wide select-none">
              or install on TV
            </span>
            <div className="flex-1 h-[1px] bg-white/25" />
          </div>

          {/* 3 TV App Icon Cards */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            
            {/* Apple TV Icon Card */}
            <a
              href="https://www.apple.com/apple-tv-app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[80px] h-[80px] sm:w-[94px] sm:h-[94px] rounded-[20px] sm:rounded-[24px] bg-black border border-white/15 flex items-center justify-center p-4 shadow-[0_8px_20px_rgba(0,0,0,0.35)] hover:scale-105 hover:border-white/40 transition-all"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/apple-tv.png"
                  alt="Apple TV"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            {/* Fire TV Icon Card */}
            <a
              href="https://www.amazon.com/firetv"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[80px] h-[80px] sm:w-[94px] sm:h-[94px] rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-[#FF6B35] via-[#FF501A] to-[#E03A00] border border-white/20 flex items-center justify-center p-4 shadow-[0_8px_20px_rgba(230,60,0,0.35)] hover:scale-105 hover:border-white/40 transition-all"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/firetv.png"
                  alt="Fire TV"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            {/* Roku TV Icon Card */}
            <a
              href="https://www.roku.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-[80px] h-[80px] sm:w-[94px] sm:h-[94px] rounded-[20px] sm:rounded-[24px] bg-[#662D91] border border-white/20 flex items-center justify-center p-3.5 shadow-[0_8px_20px_rgba(102,45,145,0.35)] hover:scale-105 hover:border-white/40 transition-all"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/roku.png"
                  alt="Roku"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

          </div>
        </div>

        {/* ── 5. Back / Navigation Footer Link ── */}
        <div className="mt-12 sm:mt-14 z-10">
          <Link
            href="/"
            className="text-[13px] font-bold text-white/70 hover:text-white transition-colors underline underline-offset-4"
          >
            ← Back to Homepage
          </Link>
        </div>

      </div>

    </div>
  );
}
