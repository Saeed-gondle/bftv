import React from "react";

/**
 * Desktop background art — Figma:
 *  • bottom-left: illustration inside a circle (cx -58.5, cy 1155.5, r 455.5) with a
 *    50% pink (#FBBCD1 → #FF99BC) wash on top;
 *  • right edge: circle (cx 2026, cy 569, r 386) at 70% opacity with a 41% mint
 *    (#5FDDB7) wash.
 * Both are decorative and never intercept pointer events.
 */
export function DesktopDecor() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden select-none overflow-hidden md:block"
    >
      {/* bottom-left blob */}
      <div className="absolute bottom-0 left-0 h-[911px] w-[911px] -translate-x-[514px] translate-y-[700px] overflow-hidden rounded-full">
        <div
          className="absolute h-[433px] w-[650px] bg-cover bg-center"
          style={{
            left: "353px",
            top: "-41px",
            backgroundImage: "url('/design/desktop-illus-left.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(251,188,209,0.5) 0%, rgba(255,153,188,0.5) 100%)",
          }}
        />
      </div>

      {/* right edge circle */}
      <div className="absolute right-0 top-[183px] h-[772px] w-[772px] translate-x-[386px] overflow-hidden rounded-full opacity-70">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/design/desktop-illus-right.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#5FDDB7]/[0.41]" />
      </div>
    </div>
  );
}
