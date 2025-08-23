import * as Switch from "@radix-ui/react-switch";

export function SwitchRadix() {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="airplane-mode" className="text-sm font-medium">
        Modo avión
      </label>
      <Switch.Root
        id="airplane-mode"
        className="w-12 h-6 bg-gray-300 rounded-full relative data-[state=checked]:bg-blue-600"
      >
        <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-md transition-transform translate-x-0 data-[state=checked]:translate-x-6" />
      </Switch.Root>
    </div>
  );
}
