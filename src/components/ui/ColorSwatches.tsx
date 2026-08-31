import React from "react";

export function ColorSwatches({ className = "" }: { className?: string }) {
  return (
    <div className={`w-[330px] flex flex-col gap-[16px] ${className}`}>
      {/* Row 1: Dark neutrals */}
      <div className="flex items-center gap-[10px]">
        <div
          title="#333333 (Primary Neutral)"
          className="w-[66px] h-[66px] rounded-full bg-[#333333] shadow-sm transition-transform hover:scale-105"
        />
        <div
          title="#505050 (Mid Neutral)"
          className="w-[66px] h-[66px] rounded-full bg-[#505050] shadow-sm transition-transform hover:scale-105"
        />
        <div
          title="#BCBCBC (Light Neutral / Muted)"
          className="w-[66px] h-[66px] rounded-full bg-[#bcbcbc] shadow-sm transition-transform hover:scale-105"
        />
      </div>

      {/* Row 2: Brand Purples */}
      <div className="flex items-center gap-[10px]">
        <div
          title="#5A59E8 (Brand Primary Purple)"
          className="w-[66px] h-[66px] rounded-full bg-[#5a59e8] shadow-sm transition-transform hover:scale-105"
        />
        <div
          title="#8988F7 (Brand Light Purple)"
          className="w-[66px] h-[66px] rounded-full bg-[#8988f7] shadow-sm transition-transform hover:scale-105"
        />
      </div>

      {/* Row 3: Large Accents */}
      <div className="flex items-center gap-[10px]">
        <div
          title="#7778E8 (Hero Purple Gradient)"
          className="w-[112px] h-[112px] rounded-full bg-gradient-to-br from-[#7778e8] to-[#7779e8] shadow-md transition-transform hover:scale-105"
        />
        <div
          title="#42C465 (Brand Success Green)"
          className="w-[112px] h-[112px] rounded-full bg-[#42c465] shadow-md transition-transform hover:scale-105"
        />
      </div>
    </div>
  );
}
