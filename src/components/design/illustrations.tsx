import React from "react";
import Image from "next/image";
import { Sparkle, TinyTv } from "./icons";

/**
 * Sign-in illustration (Figma, 393px canvas, y 158 → 340).
 * Percentages keep every prop in the exact relative spot at any width.
 */
export function SignInArt() {
  return (
    <div className="relative mx-auto aspect-[393/182] w-full max-w-[393px]">
      <Piece src="/design/signin-char2.png" left="36.25%" top="6.66%" width="18.34%" height="71.85%" />
      <Piece src="/design/signin-char3.png" left="50.51%" top="35.01%" width="17.88%" height="43.51%" />
      <Piece src="/design/signin-char1.png" left="22.43%" top="49.55%" width="16.12%" height="50.37%" />
      <Piece src="/design/kid-hero.png" left="57.98%" top="0.31%" width="15.62%" height="33.72%" />

      <span className="absolute" style={{ left: "28.5%", top: "11.59%", width: "4.2%" }}>
        <Sparkle size={17} className="h-auto w-full" />
      </span>
      <span className="absolute" style={{ left: "23%", top: "25.55%", width: "2.9%" }}>
        <Sparkle size={12} className="h-auto w-full" />
      </span>
      <span className="absolute" style={{ left: "74.58%", top: "6.37%", width: "2.47%" }}>
        <Sparkle size={10} className="h-auto w-full" />
      </span>
      <span className="absolute" style={{ left: "72.24%", top: "43.52%", width: "9.92%" }}>
        <TinyTv className="h-auto w-full" />
      </span>
    </div>
  );
}

/** Reset-password illustration (Figma, y 178 → 308): kid right, character left. */
export function ResetArt() {
  return (
    <div className="relative mx-auto aspect-[393/130] w-full max-w-[393px]">
      <Piece src="/design/kid-hero.png" left="64.89%" top="0%" width="15.62%" height="47.2%" />
      <Piece src="/design/reset-char.png" left="11.45%" top="32.57%" width="15.42%" height="67.48%" />
    </div>
  );
}

/** Success illustration (Figma, y 211 → 272): kid only. */
export function SuccessArt() {
  return (
    <div className="relative mx-auto aspect-[393/61] w-full max-w-[393px]">
      <Piece src="/design/kid-hero.png" left="64.89%" top="0%" width="15.62%" height="100%" />
    </div>
  );
}

function Piece({
  src,
  left,
  top,
  width,
  height,
}: {
  src: string;
  left: string;
  top: string;
  width: string;
  height: string;
}) {
  return (
    <span className="absolute" style={{ left, top, width, height }}>
      <Image
        src={src}
        alt=""
        fill
        sizes="393px"
        aria-hidden="true"
        className="object-contain"
      />
    </span>
  );
}
