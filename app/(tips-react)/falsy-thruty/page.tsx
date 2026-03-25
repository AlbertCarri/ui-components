"use client";

import * as motion from "motion/react-client";
import CodeBlock from "@/components/CodeBlock";

export default function FalsyThruty() {
  const code = `  
  let stock = 0;

  if (stock) { 
    // Esto NO se ejecuta porque 0 es Falsy.
    // Pero el producto EXISTE (solo que no hay stock).
  }

    // Lo correcto sería:
  if (stock !== undefined && stock !== null) { ... }
`;
  const code2 = `  
  let nombre = " "; // Tiene un espacio.

  if (nombre) {
    // Esto SÍ se cumple (es Truthy). 
    // Un string con un solo espacio ya no es un string vacío.
  }
`;
  const code3 = `  
  const response = 0; // Imagina que 0 significa "ID de error 0"

  // ERROR PELIGROSO
  if (response == false) { 
  // Esto daría TRUE. El código pensaría que falló 
  // porque 0 y false son "equivalentes" para ==.
  }

  // CÓDIGO SEGURO
  if (response === false) {
    // Esto da FALSE. El tipo Number (0) no es igual al tipo Boolean (false).
  }
`;
  const code4 = `   
  if (user.id == null) {
    // Esto atrapa tanto si el ID es null COMO si es undefined.
    // Es la única excepción aceptable donde el doble igual ahorra código.
  }
`;
  const code5 = `  
  if (user.id == null) {
   // Solo entra si es null o undefined.
   // Si el id es 0, NO entra (porque 0 == null es false).
   // Si el id es "", NO entra (porque "" == null es false).
  }
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
        <h1 className="title-xl">Falsy y Thruty</h1>
        <br></br>
        <p className="text-base">
          Uno de los conceptos que más {'"bugs"'} genera en JavaScript si no se
          domina bien. En JavaScript, los valores no son solo su tipo de dato,
          sino que tienen un <b>valor inherente de veracidad</b> cuando se
          evalúan en un contexto booleano (como un `if`).
        </p>
        <br></br>
        <h2 className="title-lg"> 1. La lista negra: Los 7 Falsy</h2>
        <br></br>
        <p className="text-base">
          En JavaScript, solo existen **7 valores** que siempre se evalúan como
          `false`. Si tu variable contiene cualquiera de estos, el `if
          (variable)` **no se cumplirá**:
        </p>
        <br></br>
        <table className="text-lg border-collapse border border-gray-400 text-center">
          <thead>
            <tr>
              <th className="border border-gray-500 p-2">Valor</th>
              <th className="border border-gray-500 p-2">Tipo</th>
              <th className="border border-gray-500 p-2">Nota importante</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>false</code>
              </td>
              <td className="border border-gray-500 p-2">Boolean</td>
              <td className="border border-gray-500 p-2">El falso original.</td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>0</code>
              </td>
              <td className="border border-gray-500 p-2">Number</td>
              <td className="border border-gray-500 p-2">
                Incluye el <code>-0</code> y <code>0n</code> (BigInt).
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>{'""'}</code>
              </td>
              <td className="border border-gray-500 p-2">String</td>
              <td className="border border-gray-500 p-2">
                String vacío (sin espacios).
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>null</code>
              </td>
              <td className="border border-gray-500 p-2">Object</td>
              <td className="border border-gray-500 p-2">
                Ausencia de valor intencional.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>undefined</code>
              </td>
              <td className="border border-gray-500 p-2">Undefined</td>
              <td className="border border-gray-500 p-2">Valor no asignado.</td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>NaN</code>
              </td>
              <td className="border border-gray-500 p-2">Number</td>
              <td className="border border-gray-500 p-2">
                {'"Not a Number"'} (resultado de operaciones matemáticas
                fallidas).
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>document.all</code>
              </td>
              <td className="border border-gray-500 p-2">Object</td>
              <td className="border border-gray-500 p-2">
                El único objeto falsy (por razones históricas de
                compatibilidad).
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2 className="title-lg">2. El peligro del `0` y los Strings vacíos</h2>
        <p className="text-base">
          Este es el escenario donde más errores ocurren en lógica de negocio
          (como en tu CMS de gastronomía o el sistema de suscripciones):
        </p>
        <h2 className="title-lg"> Caso A: El contador de stock</h2>
        <CodeBlock code={code} language="tsx" height={300} />
        <br />
        <h2 className="title-lg"> Caso B: Strings con espacios</h2>
        <CodeBlock code={code2} language="tsx" height={220} />
        <br />
        <h2 className="title-lg"> 3. Truthy: Todo lo demás es {'"Verdad"'}</h2>
        <p className="text-base">
          Cualquier cosa que no esté en la lista de los 7 de arriba es
          <b> Truthy</b>. Esto incluye cosas que a veces confunden a los
          desarrolladores que vienen de otros lenguajes:
        </p>
        <ul className="bullet">
          <li>
            {"[]"} (Array vacío): <b>Es Truthy</b>.
          </li>
          <li>
            {"{}"} (Objeto vacío): <b>Es Truthy</b>.
          </li>
          <li>
            {'"false"'} (El string con la palabra false): <b>Es Truthy</b>
          </li>
          <li>
            -1 (Números negativos): <b>Son Truthy</b>.
          </li>
        </ul>
        <p className="text-base">
          En JavaScript, la diferencia entre el {'"igual"'} doble (==) y el
          {' "estricto"'} triple (===) es la causa número uno de errores en
          validaciones de formularios y respuestas de APIs.
        </p>
        <br />
        <h2 className="title-lg"> 1. La Regla de Oro: Coerción de Tipos</h2>
        <ul className="bullet">
          <li>
            {" "}
            <b>== (Abstract Equality):</b> Intenta convertir ambos valores al
            mismo tipo antes de comparar. Es {'"permisivo"'}.
          </li>
          <li>
            {" "}
            <b>=== (Strict Equality):</b> Compara tanto el <b>valor</b> como el
            <b>tipo</b>. No hace conversiones. Es {'"defensivo"'}.
          </li>
        </ul>
        <h2 className="title-lg">
          {" "}
          2. Tabla de Comparaciones {'"Peligrosas"'}
        </h2>
        <p className="text-base">
          Esta tabla muestra por qué **nunca** deberías usar `==` para validar
          datos sensibles (como estados de suscripción o montos de pago):
        </p>
        <br />
        <table className="text-lg border-collapse border border-gray-400 text-center">
          <thead>
            <tr>
              <th className="border border-gray-500 p-2">Comparación</th>
              <th className="border border-gray-500 p-2">
                Resultado <code>==</code>
              </th>
              <th className="border border-gray-500 p-2">
                Resultado <code>===</code>
              </th>
              <th className="border border-gray-500 p-2">
                Explicación Técnica
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>0 == {'""'}</code>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>true</strong>
              </td>
              <td className="border border-gray-500 p-2">false</td>
              <td className="border border-gray-500 p-2">
                Ambos se convierten a falso numérico (0).
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>0 == {'"0"'}</code>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>true</strong>
              </td>
              <td className="border border-gray-500 p-2">false</td>
              <td className="border border-gray-500 p-2">
                El string {'"0" '}se convierte al número 0.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>false == {'"0"'}</code>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>true</strong>
              </td>
              <td className="border border-gray-500 p-2">false</td>
              <td className="border border-gray-500 p-2">
                Ambos terminan siendo 0 internamente.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>null == undefined</code>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>true</strong>
              </td>
              <td className="border border-gray-500 p-2">false</td>
              <td className="border border-gray-500 p-2">
                <strong>Caso especial:</strong> JS los considera{" "}
                {'"equivalentes"'}
                en ausencia.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>[] == {'""'}</code>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>true</strong>
              </td>
              <td className="border border-gray-500 p-2">false</td>
              <td className="border border-gray-500 p-2">
                Un array vacío convertido a string es <code>{'""'}</code>.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>NaN == NaN</code>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>false</strong>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>false</strong>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>¡Cuidado!</strong> NaN no es igual a nada, ni a sí
                mismo.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2 className="title-lg"> 3. ¿Por qué esto rompe tu código?</h2>
        <p className="text-base">
          Imagina que estás validando una respuesta de tu base de datos.
        </p>
        <CodeBlock code={code3} language="tsx" height={380} />
        <h2 className="title-lg"> 4. El {'"Triple Igual"'} </h2>
        <p className="text-base">
          {'"'}Usa siempre ===. Solo usa == si tienes una razón específica y
          documentada para querer que <b>null</b> y <b>undefined</b> se traten
          igual.{'"'}
          Por ejemplo, esto es muy común y útil:
        </p>
        <CodeBlock code={code4} language="tsx" height={180} />
        <br />
        <h2 className="title-lg"> El caso de `NaN`</h2>
        <p className="text-base">
          Como <code>NaN === NaN</code> es <code>false</code>, si alguna vez
          necesitas saber si un resultado matemático falló, no uses el
          comparador. Usa la función nativa: `Number.isNaN(valor)`
        </p>
        <h2 className="title-lg">
          Esto es muy usado pero no siempre es seguro
        </h2>
        <p className="text-base">
          <code>
            <b>if (!user.id)</b>
          </code>{" "}
          es la forma más común y {'"limpia"'} (idiomática) que verás en el
          código moderno de JavaScript y React. Sin embargo, hay una
          **diferencia técnica crucial** entre usar `!user.id` y `user.id ==
          null`. Para tu libro, esta distinción es el nivel {'"Senior"'}:
        </p>
        <h2 className="title-lg">
          {" "}
          1. El alcance de <code>(!user.id)</code> (El {'"Cazador de Falsys"'})
        </h2>
        <p className="text-base">
          Cuando usas el operador de negación `!`, JavaScript convierte el valor
          a booleano y lo invierte. Esto significa que el bloque se ejecutará si
          `user.id` es **CUALQUIER** valor falsy:
        </p>
        <ul className="bullet font-mono">
          <li> undefined (Se ejecuta) ✅</li>
          <li> null (Se ejecuta) ✅</li>
          <li> 0 (Se ejecuta) ⚠️ **¡Peligro!**</li>
          <li> {'""'} (Se ejecuta) ⚠️ **¡Peligro!**</li>
          <li> false (Se ejecuta) ✅</li>
        </ul>
        <h2 className="title-lg"> El riesgo en Bases de Datos</h2>
        <p className="text-base">
          Si tu <b>user.id</b> en Supabase es un número y por algún motivo el ID
          es 0 (poco común en IDs autoincrementales, pero posible en otros
          campos), if <code>(!user.id)</code> dará <b>true</b>, tratando a un ID
          válido (el 0) como si no existiera.
        </p>
        <br />
        <h2 className="title-lg">
          {" "}
          2. El alcance de{" "}
          <code>
            <b>user.id == null</b>
          </code>{" "}
          (El {'"Cazador de Nulos"'})
        </h2>
        <p className="text-base">
          Esta es una técnica específica que aprovecha una regla única del doble
          igual:{" "}
          <code>
            <b>null</b>
          </code>{" "}
          solo es igual a{" "}
          <code>
            <b>null</b>
          </code>{" "}
          o{" "}
          <code>
            <b>undefined</b>
          </code>
          .
        </p>
        <CodeBlock code={code5} language="tsx" height={200} />
        <h2 className="title-lg"> 3. Tabla Comparativa de Estrategias</h2>
        <p className="text-base">
          Esta tabla es oro puro para decidir qué validación usar:
        </p>
        <br />
        <table className="text-lg border-collapse border border-gray-400 text-center">
          <thead>
            <tr>
              <th className="border border-gray-500 p-2">
                Valor de <code>id</code>
              </th>
              <th className="border border-gray-500 p-2">
                <code>if (!id)</code>
              </th>
              <th className="border border-gray-500 p-2">
                <code>if (id == null)</code>
              </th>
              <th>
                <code>if (id === undefined)</code>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>undefined</code>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>Entra</strong>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>Entra</strong>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>Entra</strong>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>null</code>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>Entra</strong>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>Entra</strong>
              </td>
              <td className="border border-gray-500 p-2">No entra</td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>0</code>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>Entra (Ojo)</strong>
              </td>
              <td className="border border-gray-500 p-2">No entra</td>
              <td className="border border-gray-500 p-2">No entra</td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>{'""'}</code>
              </td>
              <td className="border border-gray-500 p-2">
                <strong>Entra (Ojo)</strong>
              </td>
              <td className="border border-gray-500 p-2">No entra</td>
              <td className="border border-gray-500 p-2">No entra</td>
            </tr>
            <tr>
              <td className="border border-gray-500 p-2">
                <code>{'"abc"'}</code>
              </td>
              <td className="border border-gray-500 p-2">No entra</td>
              <td className="border border-gray-500 p-2">No entra</td>
              <td className="border border-gray-500 p-2">No entra</td>
            </tr>
          </tbody>
        </table>
        <br />
        <h2 className="title-lg">
          4. ¿Cuál usar y cuándo? (Recomendación para tu libro)
        </h2>
        <p className="text-base">
          <b className="text-base">1. Usa if (!user.id)</b>: Si quieres una
          validación rápida y estás 100% seguro de que el ID <b>nunca</b> será 0
          ni un string vacío{'""'}. Es lo más legible.{" "}
        </p>
        <p className="text-base">
          2. <b>Usa if (user.id == null)</b>: Si quieres ser más preciso y
          permitir que el 0 o el {'""'} sean valores válidos, pero quieres
          descartar la ausencia de datos (null/undefined).{" "}
        </p>
        <p className="text-base">
          3. <b>Usa if (user.id === undefined)</b>: Si eres extremadamente
          estricto y quieres diferenciar entre
          {'"no se definió"'} y {'"se definió como nulo"'} (común en
          actualizaciones parciales de bases de datos).
        </p>
        <br />
        <p className="text-base">
          <b>Tip de {'"Vibe Coding"'}:</b> En el 90% de los casos en desarrollo
          web con Next.js y Supabase, <b>if (!user.id)</b> es suficiente porque
          los IDs suelen ser UUIDs (strings largos) o enteros que empiezan en 1.
          Pero saber por qué el <b>== null</b> funciona te da un control total
          sobre la lógica.
        </p>
        <h2 className="title-lg"> El {'"Pecado Original"'} de JavaScript</h2>
        <p className="text-base">
          JavaScript fue diseñado en 10 días. Para hacerlo {'"fácil"'}, se
          crearon reglas de conversión automática (coerción) que hoy
          consideramos extrañas. Muchos tutoriales modernos te dicen:{" "}
          <i>{'"Usa siempre === y no te preguntes por qué"'}.</i>
        </p>
        <p className="text-base">
          Pero como tú estás construyendo un **CMS-Resto** y manejando
          <b> webhooks</b>, no puedes permitirte {'"no saber por qué"'}. Si un
          precio es 0 (quizás una promoción gratuita) y tu código hace{" "}
          <b>if (!price)</b>, ¡acabas de romper la lógica de tu negocio
          tratándolo como un error!
        </p>
        <br />
        <h2 className="title-lg"> 2. La Anatomía de la Comparación</h2>
        <p className="text-base">
          ara que tus lectores visualicen esto, imagina que el motor de JS tiene
          una {'"jerarquía de descarte"'}:
        </p>
        <p className="text-base">
          1. <b>Nivel de Superficie (!valor):</b> Mira si hay _algo_ de{" "}
          {'"energía"'} en la variable. El 0, el {'""'} y el <b>null</b> no
          tienen energía.
        </p>
        <p className="text-base">
          2. <b>Nivel de Identidad (== null):</b> Es un filtro selectivo. Solo
          deja pasar a los {'"ausentes"'} (<b>null</b> y <b>undefined</b>), pero
          respeta al 0 y al {'""'} como ciudadanos legítimos.{" "}
        </p>
        <p className="text-base">
          3. <b>Nivel Atómico (===):</b> Pide el documento de identidad (tipo) y
          las huellas dactilares (valor). Si no coinciden ambos, no pasa.
        </p>
        <br />
        <h2 className="title-lg"> 3. Un caso real para un comercio</h2>
        <p className="text-base">
          Imagina que un negocio en su sistema quiere poner un costo de envío de{" "}
          <b>$0</b> (Envío Gratis).
        </p>
        <ul className="bullet">
          <li>
            <b>Si usas if (!costoEnvio)</b>: El sistema dirá{" "}
            {'"No hay costo definido, error"'}, y quizás aplique un costo por
            defecto de $500. <b>¡Error de negocio!</b>
          </li>
          <li>
            <b>Si usas if (costoEnvio == null)</b>: El sistema dirá{" "}
            {'"El valor es 0, así que está definido. Es gratis"'}. <b>¡Éxito!</b>
          </li>
        </ul>
        <br />
        <h2 className="title-lg">
          4. Por qué esta info es {'"Oro"'} para un tutorial?
        </h2>
        <p className="text-base">
          La mayoría de los tutoriales o libros para principiantes evitan el == null porque
          temen confundir al lector con el doble igual. Sin embargo, en
          librerías profesionales (como el código fuente de React o de grandes
          frameworks), verás el <b>== null</b> constantemente.
        </p>
        <p className="text-base">
          <b>
            Enseñarlo demuestra que conoces los {'"internals"'} del lenguaje.
          </b>
        </p>
      </motion.div>
    </div>
  );
}
