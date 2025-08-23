import Ojos from "@/components/Ojos";

export default function Home() {
  return (
    <div className="flex flex-col mt-6 py-14 px-16">
      <h1 className="title-xl">Introducción al Manual de Componentes UI</h1>
      <p className="text-base">
        Bienvenido/a al manual de componentes UI reutilizables desarrollados en
        React con TypeScript y estilizados con Tailwind CSS. Este manual tiene
        como objetivo documentar de forma clara y práctica cada uno de los
        componentes que componen nuestro sistema de diseño. Cada componente fue
        construido siguiendo buenas prácticas de desarrollo: separación de
        responsabilidades, accesibilidad básica, tipado estricto con TypeScript,
        y una estructura flexible que permita su reutilización en distintos
        contextos.
      </p>
      <h2 className="title-lg">¿Que vas a encontrar?</h2>
      <p className="text-base">
        Dentro del menú de navegación vas a poder acceder a diferentes tipos de
        componentes agrupados por funcionalidad o categoría, como por ejemplo:
      </p>
      <Ojos />
      <ul className="bullet">
        <li>Botones (Button)</li>
        <li>Inputs de texto (TextInput)</li>
        <li>Modales (Modal)</li>
        <li>Alertas y mensajes (Alert, Toast)</li>
        <li>Tarjetas (Card)</li>
        <li>Spinners de carga (Spinner)</li>
        <li>Componentes de layout (Container, Grid, Section)</li>
      </ul>
      <h2 className="title-lg">Cada componente incluye:</h2>
      <ul className="bullet">
        <li>Una descripción general de su uso y propósito.</li>
        <li>Una vista previa visual (renderizado en tiempo real).</li>
        <li>Un ejemplo básico de implementación.</li>
        <li>
          Un listado de propiedades (props) personalizables, con explicación de
          su tipo y comportamiento.
        </li>
        <li>Notas de accesibilidad y comportamiento responsive si aplica.</li>
      </ul>
      <h2 className="title-lg">Buenas prácticas aplicadas</h2>
      <ul className="bullet">
        <li>
          Inmutabilidad del estado (cuando se requiere manipulación interna).
        </li>
        <li>
          Props bien tipadas y documentadas, usando interface o type para
          claridad y autocompletado.
        </li>
        <li>
          Composición: los componentes permiten insertar contenido dinámico
          mediante children.
        </li>
        <li>
          Estilos desacoplados y reutilizables mediante clases utilitarias de
          Tailwind.
        </li>
      </ul>
    </div>
  );
}
