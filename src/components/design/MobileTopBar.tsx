import React from "react";
import Image from "next/image";

type Props = {
  /** 1-based index of the active step (1..3). Pass 0 to hide the tracker. */
  step?: number;
  label?: string;
  /** Optional account row shown on the right (post sign-in screens). */
  account?: { email: string; onLogout?: () => void };
};

/**
 * Mobile header — Figma: logo 176x37 at (20,62), three 114x6 bars at y=114 (gap 5),
 * step caption 16px #828282 at y=133.
 */
export function MobileTopBar({ step = 0, label, account }: Props) {
  return (
    <div className="w-full pt-[62px]">
      <div className="flex items-start justify-between px-[20px]">
        <Image
          src="/logo.png"
          alt="babyfirst TV"
          width={428}
          height={90}
          priority
          className="h-[37px] w-[176px] object-contain object-left"
        />

        {account && (
          <div className="flex flex-col items-end pt-[2px]">
            <button
              type="button"
              onClick={account.onLogout}
              className="text-[18px] font-semibold leading-none text-[#4F4F4F] underline"
            >
              Log out
            </button>
            <span className="mt-[6px] text-[13px] leading-none text-[#BDBDBD]">
              {account.email}
            </span>
          </div>
        )}
      </div>

      {step > 0 && (
        <div className="px-[21px] pt-[15px]">
          <div className="flex gap-[5px]">
            {[1, 2, 3].map((index) => (
              <span
                key={index}
                className={`h-[6px] w-full max-w-[114px] flex-1 rounded-[2px] ${
                  index <= step ? "bg-[#9192FF]" : "bg-[#E6E6E6]"
                }`}
              />
            ))}
          </div>
          {label && (
            <p className="mt-[9px] text-[16px] leading-none text-[#828282]">
              {label}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
