"use client";

import * as motion from "motion/react-client";
import CodeBlock from "@/components/CodeBlock";

export default function CondicionalesReact() {
  const code = `  
  {seCumple === "si" && <Componente />}
`;
  const code2 = `  
  {seCumple === "si" ? <ComponenteSi /> : <ComponenteNo />}
`;
  const code3 = `  
  function renderContenido() {
  if (seCumple === "si") {
    return <ComponenteSi />;
  }
  return <ComponenteNo />;
  }

  return <div>{renderContenido()}</div>;

`;
  const code4 = `  
  switch (estado) {
  case "cargando":
    return <Spinner />;
  case "error":
    return <Error />;
  default:
    return <Contenido />;
  }

`;
  const code5 = `  
  let contenido;
  if (seCumple === "si") {
    contenido = <ComponenteSi />;
  } else {
    contenido = <ComponenteNo />;
  }

  return <div>{contenido}</div>;

`;
  const code6 = `  
  {seCumple === "si" ? <ComponenteSi /> : null}

`;
  const code7 = `  
  {(() => {
    if (seCumple === "si") return <ComponenteSi />;
    return <ComponenteNo />;
  })()}


`;
  const code8 = `  
  {usuario?.activo && <Perfil usuario={usuario} />}

`;
  const code9 = `  
  {seCumple || <ComponenteFallback />}


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
        <h1 className="title-xl">Formas de hacer condicionales en DOM</h1>
        <br></br>
        <h2 className="title-lg">1. Operador lógico AND (&&)</h2>
        <p className="text-base">La más común y declarativa:</p>
        <CodeBlock code={code} language="tsx" height={100} />
        <p className="text-base">
          Renderiza {"<Componente />"} solo si la condición es verdadera.
        </p>
        <br></br>
        <h2 className="title-lg">2. Operador ternario (? :)</h2>
        <p className="text-base">Ideal para elegir entre dos opciones:</p>
        <CodeBlock code={code2} language="tsx" height={100} />
        <p className="text-base">Renderiza uno u otro según la condición.</p>
        <br></br>

        <h2 className="title-lg">3. If dentro de funciones</h2>
        <p className="text-base">Cuando necesitas lógica más compleja:</p>
        <CodeBlock code={code3} language="tsx" height={300} />
        <p className="text-base">Útil para condiciones largas o múltiples.</p>
        <br></br>

        <h2 className="title-lg">4. Switch/case</h2>
        <p className="text-base">Para múltiples ramas:</p>
        <CodeBlock code={code4} language="tsx" height={300} />
        <p className="text-base">
          Se suele encapsular en una función de render.
        </p>
        <br></br>

        <h2 className="title-lg">5. Uso de variables previas</h2>
        <p className="text-base">Definir el contenido antes del {"return"}:</p>
        <CodeBlock code={code5} language="tsx" height={300} />
        <p className="text-base">Hace el return más limpio.</p>
        <br></br>

        <h2 className="title-lg">6. Null para no renderizar nada</h2>
        <CodeBlock code={code6} language="tsx" height={100} />
        <p className="text-base">Si no se cumple, no muestra nada.</p>

        <h2 className="title-lg">7. Funciones inline</h2>
        <CodeBlock code={code7} language="tsx" height={170} />
        <p className="text-base">
          Menos usado, pero válido para lógica rápida.
        </p>
        <br></br>

        <h2 className="title-lg">8. Optional chaining + condicional</h2>
        <CodeBlock code={code8} language="tsx" height={100} />
        <p className="text-base">
          Renderiza solo si {"'usuario'"} existe y está activo.
        </p>
        <br></br>

        <h2 className="title-lg">9. Short-circuit con OR (||)</h2>
        <CodeBlock code={code9} language="tsx" height={100} />
        <p className="text-base">
          Si seCumple es {"'falsy'"}, muestra el fallback.
        </p>
        <br></br>

        <h2 className="title-lg">Nota práctica</h2>
        <p className="text-base">
          En <b>page.jsx de servidor (Next.js)</b>, lo más común es usar && o ternarios
          porque son declarativos y fáciles de leer. Para lógica más pesada,
          conviene encapsular en funciones o variables antes del <i>{"'return'"}</i>.
        </p>
        <br></br>
      </motion.div>
    </div>
  );
}
