import React from "react";

/** Envelope icon — 21x15 outline, stroke #828282 (matches Figma input adornment) */
export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="21"
      height="15"
      viewBox="0 0 21 15"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="0.75"
        y="0.75"
        width="19.5"
        height="13.5"
        rx="2.25"
        stroke="#828282"
        strokeWidth="1.5"
      />
      <path
        d="M1.6 2.1L10.5 8.4L19.4 2.1"
        stroke="#828282"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Eye icon — 16x19.5 outline, stroke #828282 */
export function EyeIcon({
  crossed = false,
  className = "",
}: {
  crossed?: boolean;
  className?: string;
}) {
  return (
    <svg
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1 8C1 8 4.4 2.4 10 2.4C15.6 2.4 19 8 19 8C19 8 15.6 13.6 10 13.6C4.4 13.6 1 8 1 8Z"
        stroke="#828282"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8" r="3" stroke="#828282" strokeWidth="1.5" />
      {crossed && (
        <path
          d="M2.5 14.5L17.5 1.5"
          stroke="#828282"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

/** Small yellow sparkle/star used across the illustrations (#FCC025) */
export function Sparkle({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8.5 0L10.02 5.6L15.6 4.05L11.55 8.5L15.6 12.95L10.02 11.4L8.5 17L6.98 11.4L1.4 12.95L5.45 8.5L1.4 4.05L6.98 5.6L8.5 0Z"
        fill="#FCC025"
      />
    </svg>
  );
}

/** Tiny retro TV prop from the sign-in illustration */
export function TinyTv({ className = "" }: { className?: string }) {
  return (
    <svg
      width="39"
      height="30"
      viewBox="0 0 39 30"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="1.5" y="16.5" width="3" height="6" rx="1.5" fill="#D68022" />
      <rect x="0" y="14" width="6" height="4" rx="2" fill="#E89838" />
      <rect x="6" y="0" width="33" height="15.5" rx="4" fill="#717E93" />
      <rect x="6" y="5.5" width="33" height="18" rx="4" fill="#53647C" />
      <rect x="7" y="10" width="26" height="19" rx="3.5" fill="#405066" />
      <rect x="8.5" y="11.5" width="23" height="16" rx="2.5" fill="#324254" />
      <rect x="2.5" y="3" width="20.5" height="11" rx="2.5" fill="#F9BB3D" />
      <circle cx="35" cy="9" r="2.6" fill="#8D98A9" />
      <circle cx="35" cy="16.5" r="2" fill="#8D98A9" />
    </svg>
  );
}
