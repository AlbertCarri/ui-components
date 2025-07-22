"use client";

import { Button } from "@/components/Button";
import CodeBlock from "@/components/CodeBlock";

export default function Page() {
  const code = `  import React from "react";
  
  type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
    };
  
  export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
    type = "button",
    className = "",
    }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={\`px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 
        disabled:bg-gray-400 transition \${className}\`}
      >
        {children}
      </button>
      );
    };
  `;

  const codeTest = `    import React from "react";
    import { Button } from "@/components/Button";

    export default function Page() {
    return <Button type="button" onClick={() => alert("Hiciste click!!!")}>
             Button
           </Button>
    }`;

  return (
    <div className="flex flex-col mt-18 ml-60 bg-gray-950 text-gray-200">
      <h1 className="text-3xl font-bold">Button</h1>
      <p className="tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit quisquam alias voluptate autem explicabo incidunt maxime, quis ullam amet, corporis repellat necessitatibus molestias. Voluptatibus a laboriosam ullam accusamus? Dignissimos.</p>
      <CodeBlock code={code} language="tsx" height={400} />
      <h3 className="text-2xl">Ejemplo de uso real</h3>
      <CodeBlock code={codeTest} language="tsx" height={200} />
      <Button
        type="button"
        onClick={() => alert("Hiciste click!!!")}
        className="mx-auto"
      >
        Button
      </Button>
    </div>
  );
}

