"use client";

import React, { useId, useState } from "react";
import { EyeIcon, MailIcon } from "./icons";

type Props = {
  type?: "text" | "email" | "password";
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  adornment?: "mail" | "eye" | "none";
  error?: string;
  autoComplete?: string;
  name?: string;
};

/**
 * Figma input: 352x53, radius 9.5, 1px #CFCFCF border, placeholder 18px #BDBDBD,
 * focus = 2px #514CFF, error = 2px #FF3E42. Adornment sits 24px from the right edge.
 */
export function FormInput({
  type = "text",
  value,
  onChange,
  placeholder,
  adornment = "none",
  error,
  autoComplete,
  name,
}: Props) {
  const id = useId();
  const [revealed, setRevealed] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && revealed ? "text" : type;

  const borderClass = error
    ? "border-2 border-[#FF3E42]"
    : "border border-[#CFCFCF] focus-within:border-2 focus-within:border-[#514CFF]";

  return (
    <div className="w-full">
      <div
        className={`relative flex h-[53px] w-full items-center rounded-[9.5px] bg-white ${borderClass}`}
      >
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
        <input
          id={id}
          name={name}
          type={inputType}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className="h-full w-full rounded-[9.5px] bg-transparent pl-[21px] pr-[52px] text-[18px] font-normal text-[#4F4F4F] outline-none placeholder:text-[#BDBDBD]"
        />

        {adornment === "mail" && (
          <span className="pointer-events-none absolute right-[24px] flex items-center">
            <MailIcon />
          </span>
        )}

        {adornment === "eye" && (
          <button
            type="button"
            onClick={() => setRevealed((prev) => !prev)}
            aria-label={revealed ? "Hide password" : "Show password"}
            className="absolute right-[22px] flex items-center"
          >
            <EyeIcon crossed={revealed} />
          </button>
        )}
      </div>

      {error && (
        <p className="mt-[6px] pl-[4px] text-[13px] font-semibold text-[#FF3E42]">
          {error}
        </p>
      )}
    </div>
  );
}
