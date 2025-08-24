"use client";

import * as motion from "motion/react-client";
import { SwitchRadix } from "@/components/ui-radix/SwitchRadix";
import CodeBlock from "@/components/CodeBlock";

export default function Switch() {
  const code = `  'use client'

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
          className={\`text-sm font-medium \${disabled ? "text-gray-400" : ""}\`}
        >
          {label}
        </label>
        <Switch.Root
          id={id}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
          className={\`w-12 h-6 rounded-full relative transition-colors 
            \${disabled ? "bg-gray-200 cursor-not-allowed" : "bg-gray-300"} 
            data-[state=checked]:bg-blue-600 \${className}\`}
        >
          <Switch.Thumb
            className={\`block w-5 h-5 bg-white rounded-full shadow-md transition-transform 
              translate-x-0 data-[state=checked]:translate-x-6\`}
          />
        </Switch.Root>
      </div>
    );
  }
  }
`;
  const codeTest = `  <SwitchRadix
    id="dark-mode"
    label="Modo oscuro"
    defaultChecked={true}
    onCheckedChange={(val) => console.log("Dark mode:", val)}
  />

  <SwitchRadix
    id="notifications"
    label="Notificaciones"
    checked={false}
    onCheckedChange={(val) => console.log("Notificaciones:", val)}
    disabled
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
        <h1 className="title-xl">Componente Switch</h1>
        <br></br>
        <p className="text-base">
          Este componente implementa un interruptor (Switch) accesible y
          reutilizable utilizando la librería Radix UI (@radix-ui/react-switch).
          Un switch es ideal cuando el usuario debe activar o desactivar una
          configuración binaria (por ejemplo, modo oscuro, notificaciones, modo
          avión). Es un componente accesible, reutilizable y adaptable. Gracias
          a Radix, se garantiza la accesibilidad y la lógica de interacción; y
          gracias a TypeScript y Tailwind, se obtiene un API tipada, clara y con
          estilos consistentes. Es un ejemplo de cómo construir un componente
          genérico que puede integrarse en cualquier parte de la aplicación
          donde haya que representar configuraciones binarias.
        </p>
        <br></br>
        <p className="code">npm install @radix-ui/react-switch</p>
        <CodeBlock code={code} language="tsx" height={1200} />
        <h2 className="title-lg">Estructura del componente</h2>
        <br></br>
        <h3 className="title-md">Props personalizables (SwitchRadixProps)</h3>
        <ul className="bullet">
          <li>
            id: identifica de manera única el switch y lo conecta con su
            etiqueta (label).
          </li>
          <li>label: el texto visible al lado del switch.</li>
          <li>checked: estado controlado del switch (lo maneja el padre).</li>
          <li>
            defaultChecked: estado inicial cuando se usa de forma no controlada.
          </li>
          <li>
            onCheckedChange: callback que recibe el nuevo valor cada vez que el
            switch cambia.
          </li>
          <li>disabled: deshabilita la interacción y cambia estilos.</li>
          <li>className: permite añadir estilos personalizados.</li>
        </ul>
        <p className="text-base">
          Esto hace que el componente sea reutilizable y adaptable a distintos
          escenarios de la aplicación.
        </p>
        <h3 className="title-md">Contenedor principal (div)</h3>
        <p className="text-base">
          Usa flex y gap-3 para alinear el label y el switch horizontalmente.
        </p>
        <h3 className="title-md">Etiqueta (label)</h3>
        <ul className="bullet">
          <li>
            Asociada al switch por el atributo {"htmlFor={id}"}, lo que mejora
            la accesibilidad.
          </li>
          <li>Cambia de color a gris cuando el switch está deshabilitado.</li>
        </ul>
        <h3 className="title-md">Switch.Root</h3>
        <p className="text-base">Es el contenedor principal del switch:</p>
        <ul className="bullet">
          <li>
            Radix maneja toda la lógica de accesibilidad: foco, manejo con
            teclado, atributos aria.
          </li>
          <li>Aplica estilos visuales según el estado:</li>
          <ul className="bullet">
            <li>Base: bg-gray-300.</li>
            <li>Activo (data-[state=checked]): bg-blue-600.</li>
            <li>Deshabilitado: bg-gray-200 con cursor bloqueado.</li>
          </ul>
          <li>
            Recibe props como checked, defaultChecked, onCheckedChange y
            disabled, lo que lo hace usable en modo controlado o no controlado.
          </li>
        </ul>
        <h3 className="title-md">Switch.Thumb</h3>
        <p className="text-base">
          Es el círculo que se mueve dentro del switch:
        </p>
        <ul className="bullet">
          <li>Base: círculo blanco con sombra.</li>
          <li>Animación de transición suave.</li>
          <li>Posición inicial: izquierda (translate-x-0).</li>
          <li>
            Posición activa: derecha (data-[state=checked]:translate-x-6).
          </li>
        </ul>
        <p className="text-base">
          Esto simula el clásico comportamiento de encendido/apagado.
        </p>
        <h3 className="title-md">Ejemplos de uso:</h3>
        <CodeBlock code={codeTest} language="tsx" height={400} />
        <br />
        <SwitchRadix
          id="dark-mode"
          label="Modo oscuro"
          defaultChecked={true}
          onCheckedChange={(val) => console.log("Dark mode:", val)}
        />
        <br />
        <SwitchRadix
          id="notifications"
          label="Notificaciones"
          checked={false}
          onCheckedChange={(val) => console.log("Notificaciones:", val)}
          disabled
        />
      </motion.div>
    </div>
  );
}
