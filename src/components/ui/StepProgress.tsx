import React from "react";

export interface StepProgressProps {
  currentStep: number; // 1, 2, or 3
  totalSteps?: number;
  label?: string;
  className?: string;
}

export function StepProgress({
  currentStep = 1,
  totalSteps = 3,
  label = "1/3 Sign up",
  className = "",
}: StepProgressProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className={`w-[240px] ${className}`}>
      <div className="flex gap-[4px] h-[4px]">
        {steps.map((step) => {
          const isActive = step <= currentStep;
          return (
            <div
              key={step}
              className={`h-[4px] flex-1 rounded-[2px] transition-colors duration-300 ${
                isActive ? "bg-[#7c78ff]" : "bg-[#e8e8e8]"
              }`}
            />
          );
        })}
      </div>
      {label && (
        <div className="mt-[6px] text-[10px] text-[#777777] font-normal select-none">
          {label}
        </div>
      )}
    </div>
  );
}
