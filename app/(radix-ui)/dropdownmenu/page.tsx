"use client";

import * as motion from "motion/react-client";
import { Dropdown } from "@/components/ui-radix/DropdownMenu";
import CodeBlock from "@/components/CodeBlock";

export default function DropdownRadix() {
  const code = `  import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
  
  export function Dropdown() {
    return (
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Menú
        </DropdownMenu.Trigger>
  
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="bg-white text-black rounded-md shadow-md p-2">
            <DropdownMenu.Item 
            onSelect={()=>alert("Seleccionaste perfil")}
            className="px-3 py-2 hover:bg-gray-400 rounded-md">
              Perfil
            </DropdownMenu.Item>
            <DropdownMenu.Item 
            onSelect={()=>alert("Seleccionaste Configuración")}
            className="px-3 py-2 hover:bg-gray-400 rounded-md">
              Configuración
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="h-px bg-gray-200 my-1" />
            <DropdownMenu.Item className="px-3 py-2 hover:bg-gray-400 rounded-md">
              Salir
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  } 
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
        <h1 className="title-xl">Dropdown Menú</h1>
        <br></br>
        <p className="text-base">
          Este componente implementa un menú desplegable utilizando la librería
          Radix UI, específicamente el módulo @radix-ui/react-dropdown-menu. La
          idea principal de Radix es proporcionar componentes accesibles y
          altamente personalizables, dejando el estilo visual en manos del
          desarrollador.
        </p>
        <br></br>
        <p className="code">npm install @radix-ui/react-dropdown-menu</p>
        <br></br>
        <h2 className="title-lg">Estructura del componente Dropdown Menu:</h2>
        <CodeBlock code={code} language="tsx" height={780} />
        <br></br>
        <h2 className="title-lg">DropdownMenu.Root</h2>
        <p className="text-base">
          Es el contenedor principal que engloba toda la lógica del menú
          desplegable. Dentro de él definimos tanto el disparador (el botón)
          como el contenido que se mostrará.
        </p>
        <h2 className="title-lg">DropdownMenu.Trigger</h2>
        <p className="text-base">
          Es el elemento que activa la apertura del menú. En este caso, lo
          estilizamos con Tailwind CSS para que se vea como un botón azul con
          texto blanco y bordes redondeados. Al hacer clic en este botón, se
          despliega el menú.
        </p>
        <h2 className="title-lg">DropdownMenu.Portal y DropdownMenu.Content</h2>
        <ul className="bullet">
          <li>
            {
              "Portal renderiza el contenido del menú fuera del flujo normal del DOM, generalmente al final del <body>. Esto es útil para evitar problemas de superposición (por ejemplo, con overflow: hidden o z-index)."
            }
          </li>
          <li>
            Content es el contenedor del menú desplegable. Aquí aplicamos
            estilos como fondo blanco, esquinas redondeadas, sombra y padding.
          </li>
        </ul>
        <h2 className="title-lg">DropdownMenu.Item</h2>
        <p className="text-base">
          Representa cada opción dentro del menú. En este ejemplo, tenemos tres
          ítems: {'"Perfil", "Configuración" y "Salir"'}. Cada ítem tiene una
          acción <span className="highlight">onSelect</span>, este es el evento
          recomendado por Radix. En este caso, cuando el usuario hace clic o
          presiona Enter/Space sobre el ítem, se dispara la acción. También aquí
          podemos agregar las clases de Tailwind que añaden padding y un efecto
          de hover para resaltar la opción cuando el usuario pasa el mouse por
          encima.
        </p>

        <h2 className="title-lg">DropdownMenu.Separator</h2>
        <p className="text-base">
          Es un separador visual entre grupos de elementos. Aquí se usa una
          línea gris (h-px bg-gray-200 my-1) para dividir las opciones de
          configuración de la acción de {'"Salir"'}.
        </p>
        <h2 className="title-lg">Ejemplos de uso:</h2>
        <br></br>
        <p className="code">{"<Dropdown />"}</p>
        <br></br>
        <Dropdown />
        <br></br>
        <p className="text-base">
          En resumen, este componente es un menú desplegable accesible y
          personalizable, donde Radix se encarga de la lógica y accesibilidad
          (navegación con teclado, roles de accesibilidad, cierre automático,
          etc.), mientras que Tailwind define la apariencia visual. Esto permite
          construir interfaces consistentes, accesibles y modernas sin tener que
          reinventar la lógica de un dropdown desde cero. Radix bloquea el
          scroll del body al abrir el menú, lo que hace desaparecer la barra de
          scroll si y genera un desplazamiento lateral del contenido.
          Si no hay scroll o está desactivado no lo notarías.
        </p>
        <br></br>
      </motion.div>
    </div>
  );
}
