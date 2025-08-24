"use client";

import * as motion from "motion/react-client";
import { Modal } from "@/components/ui-radix/ModalRadix";
import CodeBlock from "@/components/CodeBlock";

export default function InputLabel() {
  const code = `  "use client";
  
  import * as Dialog from "@radix-ui/react-dialog";
  
  export function Modal() {
    return (
      <Dialog.Root>
        <Dialog.Trigger className="px-4 py-2 bg-blue-600 text-white rounded-md">
          Abrir Modal
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-[400px] shadow-lg">
            <Dialog.Title className="text-lg font-bold">
              Título del Modal
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500 mt-2">
              Este es el contenido del modal
            </Dialog.Description>
            {/* Contenido principal del modal 
                inputs, buttons, imagenes, etc*/}
            <Dialog.Close className="mt-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
              Cerrar
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    );
  }
`;

  const codeTest = `  ..........
  <Modal />
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
        <h1 className="title-xl">Componente Modal</h1>
        <br></br>
        <p className="text-base">
          Este componente implementa un modal accesible utilizando la librería
          Radix UI, en particular el módulo @radix-ui/react-dialog. El propósito
          del modal es mostrar contenido que requiere la atención del usuario,
          como un formulario, un mensaje de confirmación o información
          adicional, superpuesto sobre la interfaz principal. Esto es solo un
          ejemplo de como se utiliza el Dialog en un Modal, se puede hacer un
          componente reutizable con los props necesarios para cada proyecto.
        </p>
        <br></br>
        <p className="code">npm install @radix-ui/react-dialog</p>

        <CodeBlock code={code} language="tsx" height={750} />
        <h2 className="title-lg">Estructura del componente</h2>
        <p className="text-base">
          <span className="highlight"> Dialog.Root</span> Es el contenedor que
          gestiona el estado del modal (abierto o cerrado). Todo lo que ocurre
          dentro depende de este contexto.
        </p>
        <p className="text-base">
          <span className="highlight">Dialog.Trigger</span> Es el botón que abre
          el modal. En este caso está estilizado con Tailwind (px-4 py-2
          bg-blue-600 text-white rounded-md). Al hacer clic, cambia el estado
          interno de Radix y se renderiza el modal.
        </p>
        <p className="text-base">
          <span className="highlight">Dialog.Portal</span> Radix usa portales
          para renderizar el modal fuera del flujo normal del DOM. Esto asegura
          que el modal no herede estilos inesperados de los contenedores padres
          y que siempre quede por encima de la interfaz.
        </p>
        <p className="text-base">
          <span className="highlight">Dialog.Overlay</span> Es el fondo
          semitransparente (bg-black/50) que cubre la pantalla cuando el modal
          está abierto.
        </p>
        <ul className="bullet">
          <li>Cumple un rol estético (enfoca la atención en el modal).</li>
          <li>
            Y funcional: bloquea la interacción con el resto de la interfaz
            mientras el modal está activo.
          </li>
        </ul>
        <p className="text-base">
          <span className="highlight">Dialog.Content</span> Es el cuerpo
          principal del modal.
        </p>
        <ul className="bullet">
          <li>
            Se centra en la pantalla con transformaciones (top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2).
          </li>
          <li>
            Está estilizado con fondo blanco, padding y sombra para destacar
            sobre el resto del contenido.
          </li>
          <li>
            Aquí es donde va el contenido dinámico del modal: puede ser un
            formulario de login, un aviso de confirmación, un detalle de
            producto, o cualquier componente necesario.
          </li>
          <li>
            Es importante que sea genérico, ya que el modal es un contenedor
            reutilizable para diferentes contextos.
          </li>
        </ul>
        <p className="text-base">
          <span className="highlight">Dialog.Title y Dialog.Description</span>
        </p>
        <ul className="bullet">
          <li>
            <span className="highlight">Dialog.Title</span>: título principal
            del modal, útil para indicar claramente el propósito (ej. “Iniciar
            sesión”, “Eliminar registro”).
          </li>
          <li>
            <span className="highlight">Dialog.Description</span>: texto
            secundario que amplía la información del título. Ambos son elementos
            accesibles: los lectores de pantalla los leen automáticamente al
            abrirse el modal.
          </li>
        </ul>
        <p className="text-base">
          <span className="highlight">Dialog.Close</span>
        </p>
        <p className="text-base">
          Es un botón que cierra el modal. Radix ya gestiona el estado, por lo
          que no hace falta lógica extra. Este botón puede estilizarse de
          distintas formas, y siempre se recomienda incluirlo para que el
          usuario tenga un camino claro para salir del modal.
        </p>
        <br></br>
        <h2 className="title-lg">Ejemplo de uso:</h2>
        <CodeBlock code={codeTest} language="tsx" height={100} />
        <br></br>
        <Modal />
      </motion.div>
    </div>
  );
}
