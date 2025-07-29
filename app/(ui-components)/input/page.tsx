"use client";

import { Input } from "@/components/ui/Input";
import CodeBlock from "@/components/CodeBlock";

export default function Page() {
  const code = `    'use client'
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
            <label htmlFor={name} className="text-sm font-medium text-gray-300">
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
        className={\`px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition \${className}\`}
       />
     </div>
  );
};

  `;

  const codeTest = `    import { Input } from "@/components/ui/Input";

  export default function FormExample() {
    return (
      <form className="space-y-4 p-4">
        <Input
           name="email"
           classNameLabel="text-xl mt-8"
           className="text-xl"
          label="Correo electrónico"
          placeholder="ejemplo@correo.com"
          type="email"
          required
        />

          <Input
          name="password"
          classNameLabel="text-xl mt-8"
          className="text-xl"
          label="Contraseña"
          type="password"
          placeholder="••••••"
        />
        </form>
      );
    }`;

  return (
    <div className="flex flex-col mt-6 py-4 px-10 text-gray-200">
      <h1 className="title-xl">¿Qué hace este componente Input?</h1>
      <p className="text-base">
        El componente Input es una caja de texto reutilizable que permite
        ingresar datos en un formulario (como nombre, correo, contraseña, etc.).
        Este Input es flexible y configurable: podés usarlo en distintos lugares
        y con distintos comportamientos, sin tener que volver a escribir el
        mismo HTML, estilos o lógica. Ejemplo: lo usás una vez para un campo de
        email, otra para contraseña, otra para nombre, etc. Solo cambiás las
        props, y el componente se adapta. Lo que hace especial a este componente
        es que:
      </p>
      <ul className="bullet">
        <li>
          Está hecho en React con TypeScript, lo que da seguridad y
          autocompletado al usarlo.
        </li>
        <li>
          Acepta varias propiedades (props) para que lo puedas usar en muchos
          contextos distintos sin reescribir código.
        </li>
        <li>
          Viene pre-estilado con TailwindCSS, por lo que todos los Input del
          proyecto mantienen un diseño coherente.
        </li>
        <li>
          Permite agregarle un label (etiqueta) opcional arriba del campo.
        </li>
      </ul>
      <CodeBlock code={code} language="tsx" height={400} />
      <h2 className="title-lg">Explicación de cada prop (propiedad)</h2>
      <p className="text-base leading-8">
        <span className="highlight">label?: string;</span> Texto opcional que aparece arriba del input
        <br />
        <span className="highlight">classNameLabel?: string;</span> Estilo del label.
        <br />
        <span className="highlight">name: string;</span> Identificador del campo (para HTML y formularios)
        <br />
        <span className="highlight">type?: string;</span>{'  Tipo de input: "text";`, "email", "password"'}, etc.
        <br />
        <span className="highlight">placeholder?: string;</span> Texto gris que aparece dentro del input como ayuda
        <br />
        <span className="highlight">value?: string;</span> Valor actual del input (se usa en formularios
        controlados)
        <br />
        <span className="highlight">onChange?: {"(e: React.ChangeEvent<HTMLInputElement>) => void"};</span> Función
        que se llama cuando el usuario escribe
        <br />
        <span className="highlight">className?: string;</span> Clases CSS extra que quieras agregar
        <br />
        <span className="highlight">disabled?: boolean;</span> Si está deshabilitado (no se puede escribir)
        <br />
        <span className="highlight">required?: boolean;</span> Si es obligatorio llenarlo
      </p>
      <p className="text-base">
        Todas las props con ? son opcionales (no es obligatorio pasarlas). Solo
        name es requerida.
      </p>
      <h2 className="title-lg">¿Cómo funciona el componente internamente?</h2>
      <ul className="bullet">
        <li>Crea un div que contiene el label y el input.</li>
        <li>Si pasás una prop label, la muestra arriba del input.</li>
        <li>
          El {"<input />"} se configura según las props que le pasás: tipo,
          valor, si está deshabilitado, etc.
        </li>
        <li>
          El className combina los estilos base con los personalizados que podés
          pasar externamente.
        </li>
      </ul>
      <h2 className="title-lg">Ejemplos de uso:</h2>
      <CodeBlock code={codeTest} language="tsx" height={200} />
      <h2 className="title-lg">¿Qué hace esto?</h2>
      <h3 className="title-md">Ejemplo 1:</h3>
      <ul className="bullet">
        <li>
          Muestra un campo de texto con un label arriba que dice “Correo
          electrónico”.
        </li>
        <li>
          El campo es de tipo email, con el texto de ayuda en gris
          (“ejemplo@correo.com”).
        </li>
        <li>Es obligatorio llenarlo (required).</li>
      </ul>
      <Input
        name="email"
        classNameLabel="text-xl mt-8"
        className="text-xl"
        label="Correo electrónico"
        placeholder="ejemplo@correo.com"
        type="email"
        required
      />
      <h3 className="title-md">Ejemplo 2:</h3>
      <ul className="bullet">
        <li>Muestra un campo para ingresar una contraseña.</li>
        <li>El tipo password oculta los caracteres.</li>
        <li>Tiene una etiqueta que dice {'"Contraseña"'}.</li>
      </ul>

      <Input
        name="password"
        classNameLabel="text-xl mt-8"
        className="text-xl"
        label="Contraseña"
        type="password"
        placeholder="••••••"
      />

      <h2 className="mt-8 text-3xl text-white">
        ¿Y si quiero cambiar estilos?
      </h2>
      <p className="text-base">
        Podés agregar la clase className para personalizarlo. Lo que agregues aquí se superpone a los valores ya declarados.
        Eso es lo bueno de Tailwindcss, es muy flexible.
        <br />
        Ejemplo: className={'"border-red-500 bg-yellow-200"'}
      </p>
    </div>
  );
}


