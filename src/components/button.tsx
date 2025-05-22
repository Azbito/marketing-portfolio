import { ButtonHTMLAttributes, ReactNode } from "react";

export function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      {...props}
      className="bg-black w-40 hover:bg-black/80 transition-all cursor-pointer rounded-md px-4 py-2"
    >
      {children}
    </button>
  );
}
