import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement> {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Display40({ children, className = "", as: Component = "h1", ...props }: TypographyProps) {
  return (
    <Component
      className={`text-[40px] font-bold text-[#4b4b4b] leading-tight tracking-tight ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Display30({ children, className = "", as: Component = "h2", ...props }: TypographyProps) {
  return (
    <Component
      className={`text-[30px] font-bold text-[#4b4b4b] leading-snug tracking-tight ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Paragraph20({ children, className = "", as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component
      className={`text-[20px] font-normal text-[#4b4b4b] leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Paragraph18({ children, className = "", as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component
      className={`text-[18px] font-normal text-[#4b4b4b] leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Paragraph16({ children, className = "", as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component
      className={`text-[16px] font-normal text-[#4b4b4b] leading-normal ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function Paragraph14({ children, className = "", as: Component = "p", ...props }: TypographyProps) {
  return (
    <Component
      className={`text-[14px] font-normal text-[#4b4b4b] leading-normal ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
