import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

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
