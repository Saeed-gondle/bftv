"use client";

import React, { useState } from "react";
import { VisaIcon, MastercardIcon, AmexIcon } from "./Icons";
import { InputState } from "./EmailInput";

export interface CardPaymentInputProps {
  label?: string;
  state?: InputState;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  onChange?: (val: string) => void;
  className?: string;
  id?: string;
  disabled?: boolean;
}

export function CardPaymentInput({
  label = "Card Number",
  state,
  value,
  defaultValue = "",
  placeholder = "1234 1234 1234 1234",
  error,
  onChange,
  className = "",
  id = "card-number-input",
  disabled = false,
}: CardPaymentInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  const currentValue = value !== undefined ? value : internalValue;

  const isError = Boolean(error) || state === "error";

  let stateBorder = "border-[#d9d9d9]";
  let stateBg = "bg-[#fcfcfc]";
  let stateGlow = "";

  if (isError) {
    stateBorder = "border-[#FF454B]";
    stateBg = "bg-[#fff8f8]";
    stateGlow = "shadow-[0_0_0_3px_rgba(255,69,75,0.12)]";
  } else if (isFocused || state === "focused" || state === "typing") {
    stateBorder = "border-[#514cff]";
    stateBg = "bg-white";
    stateGlow = "shadow-[0_0_0_3px_rgba(81,76,255,0.12)]";
  } else if (currentValue && currentValue.length > 0 || state === "filled") {
    stateBorder = "border-[#c4c4c4]";
    stateBg = "bg-white";
  }

  const formatCardNumber = (val: string) => {
    const cleaned = val.replace(/\D/g, "").slice(0, 16);
    return cleaned.replace(/(\d{4})/g, "$1 ").trim();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setInternalValue(formatted);
    onChange?.(formatted);
  };

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
        <input
          id={id}
          type="text"
          value={currentValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full bg-transparent text-[15px] font-medium text-[#222222] placeholder:text-[#AAAAAA] focus:outline-none"
        />

        <div className="ml-2 flex items-center gap-1.5 shrink-0">
          <VisaIcon />
          <MastercardIcon />
          <AmexIcon />
        </div>
      </div>

      {error && (
        <span className="text-[12px] font-medium text-[#FF454B] text-left mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
}
