"use client";

import React, { useState } from "react";

export type CheckboxState = "checked" | "checked-hover" | "empty" | "empty-hover";

export interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  forceState?: CheckboxState;
  label?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
  id?: string;
}

export function Checkbox({
  checked,
  defaultChecked = false,
  forceState,
  label,
  onChange,
  className = "",
  id,
}: CheckboxProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isChecked = checked !== undefined ? checked : internalChecked;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (forceState) return;
    const next = !isChecked;
    setInternalChecked(next);
    onChange?.(next);
  };

  const getStyleClass = () => {
    if (forceState === "checked") {
      return "bg-[#514cff] border-[#514cff] text-white";
    }
    if (forceState === "checked-hover") {
      return "bg-[#514cff] border-[#514cff] text-white ring-2 ring-[#7a77ff]/30";
    }
    if (forceState === "empty") {
      return "bg-white border-[#C4C4C4]";
    }
    if (forceState === "empty-hover") {
      return "bg-white border-[#514cff] ring-2 ring-[#514cff]/20";
    }

    if (isChecked) {
      return "bg-[#514cff] border-[#514cff] text-white shadow-xs";
    }
    return "bg-white border-[#C4C4C4] hover:border-[#514cff] hover:ring-2 hover:ring-[#514cff]/20";
  };

  const showCheckmark =
    forceState === "checked" || forceState === "checked-hover" || (!forceState && isChecked);

  return (
    <label
      id={id}
      onClick={handleClick}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none text-left group ${className}`}
    >
      {/* Checkbox box on the LEFT */}
      <div
        className={`w-[18px] h-[18px] rounded-[5px] border-1.5 transition-all flex items-center justify-center shrink-0 ${getStyleClass()}`}
      >
        {showCheckmark && (
          <svg
            className="w-3 h-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>

      {/* Label text on the RIGHT */}
      {label && (
        <span className="text-[13px] font-medium text-[#555555] group-hover:text-[#222222] transition-colors leading-tight">
          {label}
        </span>
      )}
    </label>
  );
}
