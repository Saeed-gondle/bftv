"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function BackgroundDecorations() {
  const pathname = usePathname();

  // Exclude decorative background circles on payment and checkout/completed success pages
  if (
    pathname?.startsWith("/payment") ||
    pathname?.startsWith("/completed") ||
    pathname?.startsWith("/checkout")
  ) {
    return null;
  }

  return (
    <>
      {/* ── Decorative Background Images (Large Screens / Desktop) ── */}

      {/* Bottom-left: image-down-righ.png */}
      <div
        className="hidden lg:block fixed pointer-events-none select-none z-0"
        style={{
          bottom: 0,
          left: 0,
          width: "360px",
          height: "360px",
        }}
      >
        <Image
          src="/image-down-righ.png"
          alt=""
          fill
          className="object-contain object-left-bottom"
          priority
        />
      </div>

      {/* Top-right: image-ellipse-right.png */}
      <div
        className="hidden lg:block fixed pointer-events-none select-none z-0"
        style={{
          top: "100px",
          right: "-20px",
          width: "360px",
          height: "360px",
        }}
      >
        <Image
          src="/image-ellipse-right.png"
          alt=""
          fill
          className="object-contain object-right-top"
          priority
        />
      </div>
    </>
  );
}
