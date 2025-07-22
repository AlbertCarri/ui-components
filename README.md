## Propuesta de colores   

1️⃣ Navbar
* Fondo: bg-gray-900
* Texto: text-gray-100
* Hover enlaces: text-blue-400
* Borde bottom opcional: border-b border-gray-700

2️⃣ Sidebar
* Fondo: bg-gray-800
* Texto: text-gray-200
* Hover item activo: bg-gray-700
* Indicador activo: text-blue-400 o border-l-4 border-blue-400

3️⃣ Main
* Fondo: bg-gray-950 (casi negro, descansa la vista)
* Texto: text-gray-200 para cuerpo, text-white para títulos
* Enlaces: text-blue-400 hover:text-blue-300
* Code blocks: bg-gray-900 con texto text-gray-100

4️⃣ Footer
* Fondo: bg-gray-900
* Texto: text-gray-400
* Enlaces: text-blue-400 hover:text-blue-300

🎨 Paleta base resumida:
Grises:
* gray-950 (main bg)
* gray-900 (navbar, footer)
* gray-800 (sidebar)
* gray-700 (hover en sidebar)
* gray-100 / 200 (texto)
* Color principal:
* blue-400 (links, indicadores activos)
* blue-300 (hover links)
* Secundario opcional para CTA:
* emerald-400 para botones de acción importante.

✅ Justificación accesibilidad:
* gray-950 + gray-200 ➔ Ratio de contraste > 15:1 (AAA).
* gray-900 + gray-100 ➔ Ratio > 12:1 (AAA).
* blue-400 en gray-900/950 ➔ Ratio > 4.5:1 (AA), con excelente legibilidad.
* Evitar saturados como blue-500 o blue-600 para texto porque en dark mode cansan.

✨ Sugerencias adicionales:
✅ Espaciado y tipografía:

Usa prose prose-invert en la documentación para facilitar lectura en dark mode.
Usa tracking-wide en títulos para mejorar legibilidad.

✅ Scroll suave en el main:

```tsx
<main className="scroll-smooth">
```   

✅ Animación en hover de links:   

```tsx
transition-colors duration-200 ease-in-out
```   

✅ Soporte para prefers-color-scheme en Tailwind:
Aunque solo usarás dark mode, podés dejar la estructura preparada por si quisieras opcionalidad en el futuro.

✅ Botón de color secundario:
Botones destacados ➔ bg-emerald-400 hover:bg-emerald-300 text-gray-900.
