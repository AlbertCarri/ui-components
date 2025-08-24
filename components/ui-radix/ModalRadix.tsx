"use client";

import * as Dialog from "@radix-ui/react-dialog";

export function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="px-4 py-2 bg-blue-600 text-white rounded-md">
        Abrir Modal
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-xs"/>
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black bg-white rounded-lg p-6 w-[400px] shadow-lg">
          <Dialog.Title className="text-lg font-bold">
            Título del Modal
          </Dialog.Title>
          <Dialog.Description className="text-sm text-gray-500 mt-2">
            Este es el contenido del modal
          </Dialog.Description>
          {/* Contenido principal del modal 
              inputs, buttons, imagenes, etc*/}
          <Dialog.Close className="mt-4 px-4 py-2 bg-gray-500 rounded-md hover:bg-gray-400">
            Cerrar
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
