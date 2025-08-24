"use client";

import * as motion from "motion/react-client";
import { Input } from "@/components/ui-radix/InputRadix";
import CodeBlock from "@/components/CodeBlock";

export default function InputLabel() {
  const code = `  import * as Label from "@radix-ui/react-label";

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
        className={\`border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 \${className ?? ""}\`}
        \{...props}
      />
    </div>
  );
}

`;

  const codeTest = `  <Input
  id="email"
  label="Email"
  type="email"
  placeholder="ejemplo@email.com"
/>

<Input
  id="password"
  label="Contraseña"
  type="password"
  placeholder="********"
/>

`;
  return (
    <div className="flex flex-col mt-6 py-14 px-16 text-gray-200 ">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="title-xl">Componente Input</h1>
        <br></br>
        <p className="text-base">
          Este componente implementa un campo de entrada de texto con su
          etiqueta asociada, utilizando la librería Radix UI, en particular el
          módulo @radix-ui/react-label. La finalidad de usar Radix aquí es
          asegurar accesibilidad y buenas prácticas en la relación entre el
          label y el input.
        </p>
        <br></br>
        <p className="code">npm install @radix-ui/react-label</p>
        <br></br>
        <h2 className="title-lg">Estructura del componente</h2>
        <CodeBlock code={code} language="tsx" height={520} />
        <h2 className="title-lg">Contenedor principal (div)</h2>
        <ul className="bullet">
          <li>
            Está estilizado con Tailwind para disponer los elementos en una
            columna y con un pequeño espaciado entre ellos (flex flex-col
            gap-2), lo que mejora la legibilidad del formulario.
          </li>
        </ul>
        <h2 className="title-lg">Props reutilizables</h2>
        <ul className="bullet">
          <li>
            <span className="highlight">label</span>: texto que se mostrará arriba del input (ej. “Email”,
            “Nombre”, “Contraseña”).
          </li>
          <li>
            <span className="highlight">id</span>: sirve tanto para identificar el input como para asociar el
            Label.
          </li>
          <li>
            El resto de las props (...props) se extienden sobre el {"<input>"},
            lo que permite definir type, placeholder, value, onChange, etc.
          </li>
          <li>
            <span className="highlight">className</span> se combina con las clases base, para que el componente
            pueda adaptarse a distintos estilos sin perder consistencia.
          </li>
        </ul>
        <h2 className="title-lg">Label.Root</h2>
        <ul className="bullet">
          <li>
            Es el equivalente al elemento HTML {"<label>"}, pero con la lógica
            accesible que aporta Radix.
          </li>
          <li>
            Se utiliza la prop {'htmlFor="email"'} para asociar la etiqueta con
            el campo de entrada cuyo id es {'"email"'}.
          </li>
          <li>
            Esto garantiza que al hacer clic en el texto “Email”, el foco se
            mueva automáticamente al input correspondiente.
          </li>
          <li>
            Además, se aplica estilo tipográfico con Tailwind (text-sm
            font-medium) para que la etiqueta se vea clara y diferenciada.
          </li>
        </ul>
        <h2 className="title-lg">input</h2>
        <ul className="bullet">
          <li>
            Es un campo de entrada estándar de tipo email, lo cual ofrece
            validación nativa del navegador para direcciones de correo.
          </li>
          <li>
            Incluye un placeholder para dar un ejemplo del formato esperado.
          </li>
          <li>
            El estilo con Tailwind agrega borde, padding y esquinas redondeadas.
          </li>
          <li>
            Se añaden estados de foco (focus:outline-none focus:ring-2
            focus:ring-blue-500) para resaltar el campo cuando el usuario
            interactúa con él, mejorando la experiencia y accesibilidad.
          </li>
        </ul>
        <h2 className="title-lg">Ejemplos de uso:</h2>
        <br></br>
        <CodeBlock code={codeTest} language="tsx" height={400} />
        <br></br>
        <Input
          id="email"
          label="Email"
          type="email"
          placeholder="ejemplo@email.com"
        />
        <br></br>
        <Input
          id="password"
          label="Contraseña"
          type="password"
          placeholder="********"
        />
      </motion.div>
    </div>
  );
}
