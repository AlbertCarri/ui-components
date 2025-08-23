import * as Label from "@radix-ui/react-label";

export function Input() {
  return (
    <div className="flex flex-col gap-2">
      <Label.Root htmlFor="email" className="text-sm font-medium">
        Email
      </Label.Root>
      <input
        id="email"
        type="email"
        placeholder="ejemplo@email.com"
        className="border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
