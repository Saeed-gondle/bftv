"use client";

import React, { useState } from "react";
import { MailIcon } from "./Icons";

export type InputState = "normal" | "focused" | "typing" | "filled" | "error";

export interface EmailInputProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  id?: string;
  error?: string;
  state?: InputState;
  disabled?: boolean;
  className?: string;
}

export const EmailInput: React.FC<EmailInputProps> = ({
  label = "Your Email",
  value,
  onChange,
  placeholder = "name@example.com",
  id = "email-input",
  error,
  state: overrideState,
  disabled = false,
  className = "",
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const isError = Boolean(error) || overrideState === "error";

  let stateBorder = "border-[#d9d9d9]";
  let stateBg = "bg-[#fcfcfc]";
  let stateGlow = "";

  if (isError) {
    stateBorder = "border-[#FF454B]";
    stateBg = "bg-[#fff8f8]";
    stateGlow = "shadow-[0_0_0_3px_rgba(255,69,75,0.12)]";
  } else if (isFocused || overrideState === "focused" || overrideState === "typing") {
    stateBorder = "border-[#514cff]";
    stateBg = "bg-white";
    stateGlow = "shadow-[0_0_0_3px_rgba(81,76,255,0.12)]";
  } else if (value && value.length > 0 || overrideState === "filled") {
    stateBorder = "border-[#c4c4c4]";
    stateBg = "bg-white";
  }

  return (
    <div className={`w-full flex flex-col gap-1 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="text-[13px] font-semibold text-[#444444] tracking-tight text-left"
        >
          {label}
        </label>
      )}

      <div
        className={`relative w-full h-[52px] rounded-[14px] border ${stateBorder} ${stateBg} ${stateGlow} transition-all flex items-center px-4`}
      >
        <div className="flex items-center justify-center mr-3 text-[#888888]">
          <MailIcon className="w-[18px] h-[15px]" />
        </div>

        <input
          id={id}
          type="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent text-[15px] font-medium text-[#222222] placeholder:text-[#AAAAAA] focus:outline-none"
        />
      </div>

      {error && (
        <span className="text-[12px] font-medium text-[#FF454B] text-left mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};
