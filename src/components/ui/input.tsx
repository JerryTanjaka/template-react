import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input({ className, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "h-9 w-full rounded-md border border-[#2a2a3e] bg-[#181136] px-3 py-1 text-sm text-white placeholder:text-slate-400 outline-none focus:border-[#a089df] focus:ring-1 focus:ring-[#a089df] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }