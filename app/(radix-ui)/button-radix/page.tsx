"use client";

import * as motion from "motion/react-client";
import { Button } from "@/components/ui-radix/ButtonRadix";
import CodeBlock from "@/components/CodeBlock";

export default function ButtonRadix() {
  const code = `  import { Slot } from "@radix-ui/react-slot";
  type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  };

  export function Button({ asChild, className, ...props }: ButtonProps) {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={\`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 \${className}\`}
        {...props}
      />
    );
  }
`;
  const codeTest = `
    <Button onClick={() => console.log("click")} className="bg-blue-600 hover:bg-blue-700">Guardar</Button>

`;
  const codeTest2 = `  <Button asChild>
      <a href="/home" className="bg-amber-900 hover:bg-amber-800">Ir al Home</a>
  </Button>

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
        <h1 className="title-xl">Componente Button</h1>
        <br></br>
        <p className="text-base">
          Este componente es un botón reutilizable construido sobre Radix UI
          usando el componente Slot. La idea es ofrecer un botón accesible y
          estilado con TailwindCSS, pero al mismo tiempo hacerlo flexible y
          componible para distintos contextos.
        </p>
        <CodeBlock code={code} language="tsx" height={400} />
        <h2 className="title-lg">Tipado de las props:</h2>
        <br></br>
        <p className="code">
          {
            "type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {asChild?: boolean;}"
          }
        </p>
        <ul className="bullet">
          <li>
            Extiendo de las props nativas de button en HTML (onClick, disabled,
            etc.), para que el componente sea compatible con el comportamiento
            estándar.
          </li>
          <li>
            Agrego una prop personalizada asChild, que me permite decidir si el
            componente debe renderizarse como un button nativo o heredar el
            comportamiento y estilos en otro elemento.
          </li>
        </ul>
        <br></br>
        <h2 className="title-lg">Uso de Slot de Radix</h2>
        <br></br>
        <p className="code">{'const Comp = asChild ? Slot : "button";'}</p>
        <ul className="bullet">
          <li>
            Si asChild es false o no está definido, se renderiza un {"<button>"}{" "}
            normal.
          </li>
          <li>
            Si asChild es true, uso el componente Slot de Radix, que actúa como
            un “passthrough” (paso de atributos y estilos) al hijo que se pase.
          </li>
          <li>
            Esto es útil, por ejemplo, cuando quiero que mi botón estilado en
            realidad se renderice como un {"<a>"} o un Next.js Link, pero
            manteniendo el estilo y las props.
          </li>
        </ul>
        <br></br>
        <h2 className="title-lg">Estilos con TailwindCSS</h2>
        <ul className="bullet">
          <li>Le doy estilos base (padding, rounded, colores).</li>
          <li>
            Dejo abierta la posibilidad de sobrescribir o extender estilos con
            la prop className.
          </li>
        </ul>
        <br></br>
        <h2 className="title-lg">Ejemplos de uso</h2>
        <CodeBlock code={codeTest} language="tsx" height={100} />
        <br></br>
        <Button onClick={() => alert("click")} className="bg-blue-600 hover:bg-blue-700">Guardar</Button>
        <br></br>
        <CodeBlock code={codeTest2} language="tsx" height={160} />
        <br></br>
        <Button asChild className="bg-amber-900 hover:bg-amber-800">
          <a href="#">Ir al Home</a>
        </Button>
      </motion.div>
    </div>
  );
}
