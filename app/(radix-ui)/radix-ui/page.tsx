import * as motion from "motion/react-client";

export default function RadixUi() {
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
        <h1 className="title-xl">📖 Manual de Radix UI para principiantes</h1>
        <h2 className="title-lg">1. ¿Qué es Radix UI?</h2>
        <br></br>
        <p className="text-base">
          Radix UI es una librería de componentes accesibles y sin estilos
          predefinidos para React.
        </p>
        <ul className="bullet">
          <li>
            Su enfoque es {'"unstyled"'}: te da la funcionalidad y
            accesibilidad, y vos elegís cómo estilarlos (por ejemplo, con
            Tailwind).
          </li>
          <li>
            Está diseñada para cumplir con las normas de accesibilidad (ARIA),
            lo cual es clave para usuarios con lectores de pantalla, teclados,
            etc.
          </li>
          <li>Se integra perfectamente con Next.js, Vite o CRA.</li>
        </ul>
        <p className="text-base">
          👉 En resumen: Radix UI te da la lógica y accesibilidad, vos le das el
          estilo.
        </p>
        <br></br>
        <h2 className="title-lg">2. Un poco de historia</h2>
        <ul className="bullet">
          <li>
            Radix UI fue creada por Modulz, los mismos detrás de Stitches y
            WorkOS.
          </li>
          <li>
            La motivación fue evitar reinventar la rueda con componentes
            complejos (ej: modales, menús, popovers), garantizando accesibilidad
            y buenas prácticas.
          </li>
          <li>
            A diferencia de librerías como Material UI o Chakra UI, Radix no
            impone diseño: es agnóstico y flexible.
          </li>
        </ul>
        <h2 className="title-lg">3. Instalación</h2>
        <p className="text-base">
          Si ya tenés un proyecto con React y necesitas hacer un Modal:
        </p>
        <br></br>
        <p className="font-mono bg-gray-700 p-4 rounded-2xl">
          npm install @radix-ui/react-dialog
        </p>
        <p className="text-base italic">
          (instalás los paquetes que necesites, no hace falta todo Radix junto)
        </p>
        <br></br>
        <p className="text-base">Y, por supuesto vamos a usar Tailwind👍.</p>
        <h2 className="title-lg">4. Principios de uso</h2>
        <ul className="bullet">
          <li>
            Cada componente de Radix está dividido en primitivas (Root, Trigger,
            Content, etc.).
          </li>
          <li>Ejemplo: un Dialog (modal) se arma con piezas:</li>
          <ul className="bullet">
            <li>
              <span className="highlight">Dialog.Root</span> → envuelve todo.
            </li>
            <li>
              <span className="highlight">Dialog.Trigger</span> → botón que
              abre.
            </li>
            <li>
              <span className="highlight">Dialog.Content</span> → contenido del
              modal.
            </li>
            <li>
              <span className="highlight">Dialog.Close</span> → botón de cierre.
            </li>
          </ul>
        </ul>
        <p className="text-base">Esto parece mucho, pero da control total.</p>
      </motion.div>
    </div>
  );
}
