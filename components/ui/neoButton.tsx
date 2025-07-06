import React from "react";
import { cn } from "@/lib/utils";

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function NeoButton({ children, className = "", ...props }: NeoButtonProps) {
  return (
    <button
      className={cn(
        "border-2 border-black px-4 py-2 font-semibold text-black transition-all duration-300 translate-x-[-4px] translate-y-[-4px] shadow-[4px_4px_0px_black] hover:translate-x-[-7px] hover:translate-y-[-7px] hover:shadow-[7px_7px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none rounded-md",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
