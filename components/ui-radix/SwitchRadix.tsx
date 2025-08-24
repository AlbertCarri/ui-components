'use client'

import * as Switch from "@radix-ui/react-switch";

type SwitchRadixProps = {
  id: string;
  label: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export function SwitchRadix({
  id,
  label,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled = false,
  className = "",
}: SwitchRadixProps) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor={id}
        className={`text-sm font-medium ${disabled ? "text-gray-400" : ""}`}
      >
        {label}
      </label>
      <Switch.Root
        id={id}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={`w-12 h-6 rounded-full relative transition-colors 
          ${disabled ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300"} 
          data-[state=checked]:bg-blue-600 ${className}`}
      >
        <Switch.Thumb
          className={`block w-5 h-5 bg-white rounded-full shadow-md transition-transform 
            translate-x-0 data-[state=checked]:translate-x-6`}
        />
      </Switch.Root>
    </div>
  );
}

