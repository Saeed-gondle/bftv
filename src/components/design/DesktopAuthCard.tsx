import React from "react";

type Props = {
  /** Small section title in the left column, e.g. "Sign in". */
  title: string;
  children: React.ReactNode;
  /** Purple panel headline, one entry per line. */
  panelTitle: string[];
  /** Purple panel body copy, one entry per line. */
  panelBody: string[];
  panelExtra?: React.ReactNode;
};

/**
 * Desktop card — Figma: 1000x700, radius 30, shadow 0 0 43.9 rgba(0,0,0,.1).
 * Left half holds the form (72.5px gutter, title at y=316), right half is the
 * purple panel (gradient 139deg #8485F1 → #4D4FCA) with 84px inner gutter.
 */
export function DesktopAuthCard({
  title,
  children,
  panelTitle,
  panelBody,
  panelExtra,
}: Props) {
  return (
    <div className="relative z-10 flex w-full max-w-[1000px] overflow-hidden rounded-[30px] bg-white shadow-[0_0_44px_rgba(0,0,0,0.10)] xl:h-[700px]">
      {/* left: form */}
      <div className="flex w-1/2 flex-col px-[6%] pb-[71px] pt-[126px] xl:px-[72.5px]">
        <div className="flex items-center gap-[14px]">
          <span className="whitespace-nowrap text-[18px] font-bold leading-none text-[#4F4F4F]">
            {title}
          </span>
          <span className="h-px flex-1 bg-[#E0E0E0]" />
        </div>

        {children}
      </div>

      {/* right: purple panel */}
      <div
        className="relative flex w-1/2 flex-col justify-start px-[8%] pt-[178px] text-white xl:px-[84px]"
        style={{
          backgroundImage:
            "linear-gradient(139deg, #8485F1 0%, #4D4FCA 70%)",
        }}
      >
        <h2 className="text-[42px] font-extrabold leading-[1.16] tracking-[-0.01em] xl:text-[56px]">
          {panelTitle.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <p className="mt-[52px] text-[20px] font-normal leading-[1.5] xl:text-[24px]">
          {panelBody.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>

        {panelExtra}
      </div>
    </div>
  );
}

/** Step tracker under the desktop card — bars 114x6 (gap 5) + 16px caption. */
export function DesktopStepTracker({
  step,
  label,
}: {
  step: number;
  label: string;
}) {
  return (
    <div className="relative z-10 mt-[62px] flex flex-col items-center">
      <div className="flex gap-[5px]">
        {[1, 2, 3].map((index) => (
          <span
            key={index}
            className={`h-[6px] w-[114px] rounded-[2px] ${
              index <= step ? "bg-[#9192FF]" : "bg-[#E6E6E6]"
            }`}
          />
        ))}
      </div>
      <p className="mt-[16px] text-[16px] leading-none text-[#828282]">{label}</p>
    </div>
  );
}
