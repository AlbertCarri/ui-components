"use client";

import React from "react";

type InputProps = {
  label?: string;
  classNameLabel?: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
};

export const Input: React.FC<InputProps> = ({
  label,
  classNameLabel = "",
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
  disabled = false,
  required = false,
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={name}
          className={`text-sm font-medium text-gray-300 ${classNameLabel}`}
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={`px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition ${className}`}
      />
    </div>
  );
};
