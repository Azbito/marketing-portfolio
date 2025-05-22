import { ButtonHTMLAttributes, ReactNode } from "react";

export function Button({
  children,
  className,
  isDark = true,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  isDark?: boolean;
  className?: string;
}) {
  return (
    <button
      {...props}
      className={`w-40 transition-all cursor-pointer rounded-md px-4 py-2
        ${
          isDark
            ? "bg-black hover:bg-black/80  text-white"
            : "bg-white hover:bg-white/80 text-black"
        } ${className}`}
    >
      {children}
    </button>
  );
}
