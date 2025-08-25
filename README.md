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

🎯 Así se vería en estructura:   

```tsx
<div className="bg-gray-950 text-gray-200 min-h-screen">
  <nav className="bg-gray-900 border-b border-gray-700 text-gray-100">
    {/* Navbar */}
  </nav>
  <div className="flex">
    <aside className="bg-gray-800 w-64">
      {/* Sidebar */}
    </aside>
    <main className="flex-1 p-4 overflow-y-auto bg-gray-950">
      {/* Main */}
    </main>
  </div>
  <footer className="bg-gray-900 text-gray-400 p-4 text-center">
    {/* Footer */}
  </footer>
</div>
```

## 📚 ¿Qué vas a encontrar?   

Dentro del menú de navegación vas a poder acceder a diferentes tipos de componentes React+TypeScipt y componentes desarrollados con Radix-ui+TypeScript agrupados por funcionalidad o categoría, como por ejemplo:

### Componentes reutilizables desarrollados con TypeScipt:

* Botones (Button)
* Inputs de texto (TextInput)
* Modales (Modal)
* Alertas y mensajes (Alert, Toast)
* Tarjetas (Card)
* Spinners de carga (Spinner)
* Componentes de layout (Container, Grid, Section)

### Cada componente incluye:

✅ Una descripción general de su uso y propósito.   
✅ Una vista previa visual (renderizado en tiempo real).   
✅ Un ejemplo básico de implementación.   
✅ Un listado de propiedades (props) personalizables, con explicación de su tipo y comportamiento.   
✅ Notas de accesibilidad y comportamiento responsive si aplica.   

### 🔧 Buenas prácticas aplicadas   

* Inmutabilidad del estado (cuando se requiere manipulación interna).
* Props bien tipadas y documentadas, usando interface o type para claridad y autocompletado.
* Composición: los componentes permiten insertar contenido dinámico mediante children.
* Estilos desacoplados y reutilizables mediante clases utilitarias de Tailwind.

⚙️ ¿Cómo están diseñados?
Cada componente fue pensado para adaptarse a distintos escenarios sin necesidad de reescribir lógica. Por ejemplo, un botón puede cambiar de color, tamaño o comportamiento mediante props como variant, size, onClick, y disabled, entre otros.

Además, se evita la lógica innecesaria dentro del componente, y se promueve que cada pieza tenga una única responsabilida.   

---
## Componentes desarrollados con Radix-ui + TypeScript:   

1. ¿Qué es Radix UI?

Radix UI es una librería de componentes accesibles y sin estilos predefinidos para React.

Su enfoque es "unstyled": te da la funcionalidad y accesibilidad, y vos elegís cómo estilarlos (por ejemplo, con Tailwind).
Está diseñada para cumplir con las normas de accesibilidad (ARIA), lo cual es clave para usuarios con lectores de pantalla, teclados, etc.
Se integra perfectamente con Next.js, Vite o CRA.
👉 En resumen: Radix UI te da la lógica y accesibilidad, vos le das el estilo.


2. Un poco de historia
Radix UI fue creada por Modulz, los mismos detrás de Stitches y WorkOS.
La motivación fue evitar reinventar la rueda con componentes complejos (ej: modales, menús, popovers), garantizando accesibilidad y buenas prácticas.
A diferencia de librerías como Material UI o Chakra UI, Radix no impone diseño: es agnóstico y flexible.
3. Instalación
Si ya tenés un proyecto con React y necesitas hacer un Modal:

```
npm install @radix-ui/react-dialog
```
(instalás los paquetes que necesites, no hace falta todo Radix junto)

4. Principios de uso
Cada componente de Radix está dividido en primitivas (Root, Trigger, Content, etc.).
Ejemplo: un Dialog (modal) se arma con piezas:
Dialog.Root → envuelve todo.
Dialog.Trigger → botón que abre.
Dialog.Content → contenido del modal.
Dialog.Close → botón de cierre.
Esto parece mucho, pero da control total.

### Lista de componentes Radix:
* Boton (button) usando la librería slot
* Dropdown Menu
* Input (input + label) usando la librería label
* Modal usando la librería dialog
* Switch

  

