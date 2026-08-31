import React from "react";

/**
 * Official Apple Icon (Vector)
 */
export function AppleLogo({ className = "w-[19px] h-[19px] text-[#222222]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 170 170"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.79-11.72-14.24-5.26-8.24-9.37-17.51-12.33-27.81-2.96-10.3-4.44-20.15-4.44-29.54 0-12.83 3.34-23.71 10.02-32.64 6.68-8.93 15.11-13.48 25.29-13.66 4.79 0 10.08 1.25 15.86 3.76 5.79 2.5 9.48 3.76 11.09 3.76 1.4 0 5.26-1.31 11.58-3.94 6.32-2.62 11.51-3.83 15.56-3.63 11.66.57 20.91 4.7 27.75 12.38-10.37 6.26-15.42 14.88-15.15 25.86.27 8.65 3.53 15.85 9.77 21.6 6.24 5.75 13.56 9.07 21.96 9.97-2.22 6.55-4.89 12.82-8.01 18.8zM119.22 33.64c0-7.39 2.68-14.18 8.04-20.37 5.36-6.19 11.96-10.32 19.8-12.4 1.13 7.82-1.35 14.88-7.44 21.18-6.09 6.3-13.06 10.16-20.9 11.59z" />
    </svg>
  );
}

/**
 * Official Google Play Icon (Vector)
 */
export function GooglePlayLogo({ className = "w-[17px] h-[19px]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#00C3FF"
        d="M26.3 22.8c-2.3 2.5-3.6 6.1-3.6 10.8v444.8c0 4.7 1.3 8.3 3.6 10.8l.8.8 248.9-248.9v-5.8L27.1 22z"
      />
      <path
        fill="#00E676"
        d="M358.4 336.8l-82.4-82.4v-5.8l82.4-82.4 1.8 1 97.6 55.4c27.9 15.8 27.9 41.8 0 57.7l-97.6 55.5-1.8 1z"
      />
      <path
        fill="#FF334B"
        d="M276 248.6L26.3 498.4c4.1 4.3 11 4.9 18.8.5l313.3-178-82.4-72.3z"
      />
      <path
        fill="#FFD400"
        d="M276 263.4l82.4-72.3L45.1 13.1c-7.8-4.4-14.7-3.8-18.8.5L276 263.4z"
      />
    </svg>
  );
}

/**
 * Official Google 4-Color 'G' Logo
 */
export function GoogleGLogo({ className = "w-[15px] h-[15px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

/**
 * Official Google Pay Full Lockup Icon
 */
export function GooglePayLogoFull({ className = "h-[16px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.87 11.23c0-.62-.05-1.22-.16-1.8H5.55v3.4h2.98c-.13 1.09-.52 2.02-1.11 2.64v2.21h2.86c1.67-1.54 2.63-3.8 2.63-6.45z"
        fill="#4285F4"
      />
      <path
        d="M5.55 16.63c1.5 0 2.76-.5 3.68-1.35l-1.8-1.4c-.5.33-1.13.53-1.88.53-1.44 0-2.67-.97-3.11-2.28H.55v2.28c1.1 2.19 3.36 3.69 5.86 3.69l-.86-.47z"
        fill="#34A853"
      />
      <path
        d="M2.44 12.13c-.11-.33-.18-.68-.18-1.05 0-.36.07-.72.18-1.05V7.75H.55C.18 8.5 0 9.34 0 10.23c0 .89.18 1.73.55 2.48l1.89-.58z"
        fill="#FBBC05"
      />
      <path
        d="M5.55 5.8c.82 0 1.55.28 2.13.83L10.27 4.1C9.17 3.07 7.5 2.5 5.55 2.5c-2.5 0-4.76 1.5-5.86 3.69L2.44 8.47c.44-1.31 1.67-2.67 3.11-2.67z"
        fill="#EA4335"
      />
      <path
        d="M20.25 4.88h-3.4v10.42h1.61v-3.79h1.79c1.9 0 3.35-1.4 3.35-3.32 0-1.91-1.45-3.31-3.35-3.31zm-.1 5.15h-1.69V6.36h1.69c1.07 0 1.76.8 1.76 1.83 0 1.04-.69 1.84-1.76 1.84zM29.58 8.16c-1.31 0-2.3.93-2.3 2.19 0 1.34 1.13 2.08 2.29 2.08.79 0 1.48-.3 1.87-.79v.67c0 1.08-.65 1.69-1.63 1.69-.87 0-1.44-.45-1.62-.97l-1.43.59c.47 1.09 1.58 1.85 3.05 1.85 2.04 0 3.23-1.22 3.23-3.71V8.34h-1.57v.75c-.39-.56-1.12-.93-1.89-.93zm.19 3.03c-.76 0-1.37-.53-1.37-1.24 0-.74.62-1.27 1.37-1.27.73 0 1.36.53 1.36 1.27 0 .71-.63 1.24-1.36 1.24zM42.34 8.34l-2.02 5.09-2.07-5.09h-1.8l3.03 6.89-1.64 3.65h1.71l4.63-10.54h-1.84z"
        fill="#5F6368"
      />
    </svg>
  );
}

/**
 * Official PayPal Vector Badge
 */
export function PaypalLogo({ className = "h-[16px]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 3.5h7.2c3.5 0 6.1 1.7 5.5 5.5-.7 4.5-3.8 6.5-7.5 6.5h-2.9L12.5 3.5z"
        fill="#003087"
      />
      <path
        d="M14.8 8.5h6.2c3.2 0 5.4 1.5 4.8 4.9-.7 4-3.4 5.8-6.7 5.8h-2.6l-1.7 8.3H9.8L14.8 8.5z"
        fill="#0079C1"
      />
      <path
        d="M16.5 13.5h5c2.4 0 4.1 1.2 3.7 3.8-.5 3.1-2.6 4.5-5.1 4.5h-2l-1.3 6.7h-4.3l4-15z"
        fill="#00457C"
      />
      <text x="32" y="22" fill="#003087" fontWeight="bold" fontSize="16" fontFamily="sans-serif">
        Pay
      </text>
      <text x="63" y="22" fill="#0079C1" fontWeight="bold" fontSize="16" fontFamily="sans-serif">
        Pal
      </text>
    </svg>
  );
}

/**
 * Official Visa Logo Badge
 */
export function VisaIcon() {
  return (
    <span className="w-[20px] h-[13px] rounded-[2px] border border-[#d1d5db] bg-white flex items-center justify-center p-[1px] shadow-[0_0.5px_1px_rgba(0,0,0,0.06)]">
      <svg className="w-[16px] h-[9px]" viewBox="0 0 36 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.37 11.23L16.48.77h2.64l-2.11 10.46h-2.64zm9.49-10.22c-.52-.2-1.33-.42-2.35-.42-2.58 0-4.4 1.37-4.41 3.34 0 1.45 1.29 2.27 2.28 2.76 1.02.49 1.36.81 1.36 1.25 0 .68-.81.99-1.56.99-1.04 0-1.6-.16-2.45-.54l-.34-.16-.37 2.3c.62.28 1.77.53 2.96.54 2.74 0 4.52-1.36 4.54-3.45.01-1.15-.68-2.03-2.19-2.75-.91-.47-1.47-.78-1.47-1.25 0-.43.47-.88 1.5-.88.85-.02 1.47.18 1.95.39l.23.11.42-2.28zm8.68 6.64l1.24-3.37.71 3.37h-1.95zm2.88 3.58l-2.45-10.46h-2.19c-.68 0-1.2.2-1.49.89L25.32 11.23h2.82l.56-1.55h3.45l.33 1.55h2.48zM9.89.77L7.31 7.91l-.28-1.43C6.54 4.8 5.14 3.25 3.56 2.42l2.36 8.81h2.83l4.22-10.46H9.89z"
          fill="#1A1F71"
        />
        <path
          d="M4.88.77H.48l-.05.23c3.43.87 5.7 2.97 6.64 5.51L6.15.77H4.88z"
          fill="#F7B600"
        />
      </svg>
    </span>
  );
}

/**
 * Official Mastercard Logo Badge
 */
export function MastercardIcon() {
  return (
    <span className="w-[20px] h-[13px] rounded-[2px] border border-[#d1d5db] bg-white flex items-center justify-center p-[1px] shadow-[0_0.5px_1px_rgba(0,0,0,0.06)]">
      <svg className="w-[16px] h-[10px]" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="8" r="6" fill="#EB001B" />
        <circle cx="17" cy="8" r="6" fill="#F79E1B" />
        <path
          d="M12 3.35a5.98 5.98 0 012.35 4.65c0 1.86-.85 3.52-2.35 4.65A5.98 5.98 0 019.65 8c0-1.86.85-3.52 2.35-4.65z"
          fill="#FF5F00"
        />
      </svg>
    </span>
  );
}

/**
 * Official American Express (AMEX) Badge
 */
export function AmexIcon() {
  return (
    <span className="w-[20px] h-[13px] rounded-[2px] bg-[#006FCF] text-white text-[5.5px] font-black tracking-tighter flex items-center justify-center uppercase shadow-[0_0.5px_1px_rgba(0,0,0,0.06)] select-none">
      AMEX
    </span>
  );
}

/**
 * Mail Icon
 */
export function MailIcon({ className = "w-[15px] h-[12px]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.75"
        y="0.75"
        width="13.5"
        height="10.5"
        rx="1.5"
        stroke="#999999"
        strokeWidth="1.4"
      />
      <path
        d="M1.5 2.5L7.5 7L13.5 2.5"
        stroke="#999999"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Lock / Security Icon
 */
export function LockIcon({ className = "w-4 h-4 text-[#999999]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

/**
 * Eye Icon (Show / Hide Password)
 */
export function EyeIcon({ className = "w-4 h-4 text-[#999999]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function EyeOffIcon({ className = "w-4 h-4 text-[#999999]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
}

/**
 * Ticket / Promo Voucher Icon
 */
export function TicketIcon({ className = "w-[15px] h-[15px] text-[#AAAAAA]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}

/**
 * Check Circle & Cross Circle
 */
export function CheckCircleIcon({ className = "w-[17px] h-[17px] text-[#28B867]" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center border-2 border-current rounded-full ${className} text-[11px] font-bold`}>
      ✓
    </span>
  );
}

export function CrossCircleIcon({ className = "w-[17px] h-[17px] text-[#FF454B]" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center border-2 border-current rounded-full ${className} text-[12px] font-bold leading-none`}>
      ×
    </span>
  );
}

/**
 * Arrow / Chevron Icons
 */
export function ArrowLeftIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

/**
 * TV Devices Icons (Apple TV, Android TV, Fire TV, Roku)
 */
export function AppleTvIcon() {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:border-[#514cff] transition-all">
      <AppleLogo className="w-6 h-6 text-[#111111]" />
      <span className="text-[11px] font-bold text-[#333333]">Apple TV</span>
    </div>
  );
}

export function AndroidTvIcon() {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:border-[#514cff] transition-all">
      <svg className="w-6 h-6 text-[#34A853]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.996-3.4572c.1556-.2696.0633-.614-.2063-.7696-.2696-.1556-.614-.0633-.7696.2063l-2.0231 3.5041c-1.4646-.6672-3.1364-1.042-4.9085-1.042s-3.4439.3748-4.9085 1.042L4.0389 5.3009c-.1556-.2696-.5-.3619-.7696-.2063-.2696.1556-.3619.5-.2063.7696l1.996 3.4572C2.0371 11.0829 0 14.5057 0 18.5283h24c0-4.0226-2.0371-7.4454-5.1185-9.2069" />
      </svg>
      <span className="text-[11px] font-bold text-[#333333]">Android TV</span>
    </div>
  );
}

export function FireTvIcon() {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:border-[#514cff] transition-all">
      <svg className="w-6 h-6 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-9l6 4.5-6 4.5z" />
      </svg>
      <span className="text-[11px] font-bold text-[#333333]">Fire TV</span>
    </div>
  );
}

export function RokuTvIcon() {
  return (
    <div className="flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl bg-white border border-[#e5e7eb] shadow-sm hover:border-[#514cff] transition-all">
      <span className="text-[#662D91] font-black text-[15px] tracking-tight leading-none">Roku</span>
      <span className="text-[11px] font-bold text-[#333333]">Roku TV</span>
    </div>
  );
}
