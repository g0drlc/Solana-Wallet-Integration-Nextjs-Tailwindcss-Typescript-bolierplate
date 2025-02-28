import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button className={`px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 ${className}`} {...props}>
      {children}
    </button>
  );
}