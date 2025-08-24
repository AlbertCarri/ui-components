'use client'

import * as Label from "@radix-ui/react-label";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
};

export function Input({ label, id, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label.Root htmlFor={id} className="text-sm font-medium">
        {label}
      </Label.Root>
      <input
        id={id}
        className={`border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className ?? ""}`}
        {...props}
      />
    </div>
  );
}

