"use client";

import { Button } from "@/components/ui/Button";
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
        className={\`max-w-fit px-4 py-2 rounded disabled:bg-gray-400 transition cursor-pointer \${className}\`}
      >
        {children}
      </button>
      );
    };
  `;

  const codeTest = `    import React from "react";
    import { Button } from "@/components/Button";

    export default function Page() {
    return <Button
             type="button"
             onClick={() => alert("Hiciste click!!!")}
             className="mx-auto mt-4 bg-blue-700 text-blue-100 hover:bg-blue-900"
             >
             Button
           </Button>
    }`;

  return (
    <div className="flex flex-col mt-6 py-4 px-8 text-gray-200">
      <h1 className="title-xl">
        Button reutilizable usando TypeScript
      </h1>
      <p className="text-base">
        Un componente es reutilizable cuando puede usarse en múltiples partes de
        una aplicación sin necesidad de duplicar lógica ni estructura. En este
        caso, podés usar {"<Button>"} en cualquier parte del proyecto, ya que:
      </p>
      <ul className="bullet">
        <li>
          Acepta children, por lo tanto el contenido puede ser texto, íconos o
          incluso un spinner.
        </li>
        <li>
          Permite aplicar estilos externos con className, lo que lo hace
          flexible para distintos contextos visuales.
        </li>
        <li>
          Maneja su tipo (type) para funcionar como submit, reset o button según
          el formulario donde se use.
        </li>
        <li>
          Maneja su estado disabled, lo que lo hace más seguro y accesible.
        </li>
      </ul>
      <CodeBlock code={code} language="tsx" height={400} />
      <h2 className="title-lg">
        2. Propiedades (props) bien definidas
      </h2>
      <p className="text-base">
        Usás TypeScript para tipar las props, lo cual mejora la
        autocompletación, el chequeo de errores en tiempo de desarrollo y la
        documentación implícita.
      </p>
      <ul className="bullet">
        <li>
          children: lo que se renderiza dentro del botón (texto, íconos, etc.).
        </li>
        <li>onClick: función opcional que se ejecuta al hacer clic.</li>
        <li>disabled: permite inhabilitar el botón.</li>
        <li>
          type: importante en formularios (evita bugs por comportamientos
          inesperados).
        </li>
        <li>
          className: permite modificar estilos desde afuera sin romper el diseño
          base.
        </li>
      </ul>
      <h2 className="title-lg">
        3. Estilado claro y escalable (Tailwind CSS)
      </h2>
      <ul className="bullet">
        <li>
          <span className="highlight">max-w-fit</span>: hace que el botón se
          adapte al contenid
        </li>
        <li>
          <span className="highlight">px-4 py-2</span>: padding adecuado para
          que el botón tenga presencia.
        </li>
        <li>
          <span className="highlight">rounded</span>: bordes redondeados para
          mejor estética.
        </li>
        <li>
          <span className="highlight">disabled:bg-gray-400</span>: estilo
          específico si está desactivado.
        </li>
        <li>
          <span className="highlight">transition</span>: suaviza cambios
          visuales al aplicar hover, focus, etc.
        </li>
        <li>
          <span className="highlight">{"${className}"}</span>: permite que el
          desarrollador personalice más sin alterar el componente base.
        </li>
      </ul>

      <CodeBlock code={codeTest} language="tsx" height={200} />
      <h2 className="mt-8 text-3xl text-white">Ejemplo funcionando:</h2>
      <Button
        type="button"
        onClick={() => alert("Hiciste click!!!")}
        className="mx-auto mt-4 bg-blue-700 text-blue-100 hover:bg-blue-900"
      >
        Button
      </Button>
    </div>
  );
}
