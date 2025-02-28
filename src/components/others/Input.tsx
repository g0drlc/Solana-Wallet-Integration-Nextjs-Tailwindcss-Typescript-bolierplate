import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input className={`border border-gray-300 p-2 rounded w-full ${className}`} {...props} />
  );
}