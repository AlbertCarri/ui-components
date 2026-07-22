"use client";

import * as motion from "motion/react-client";
import CodeBlock from "@/components/CodeBlock";

export default function HerramientaZod() {
  const code01 = `  import { z } from 'zod';

  // Textos
  z.string().min(2, 'Mensaje personalizado')
  z.string().max(100)
  z.string().email('Email inválido')
  z.string().url('URL inválida')
  z.string().uuid()

  // Números
  z.number().min(1, 'Debe ser mayor a 0')
  z.number().positive()
  z.number().int('Debe ser un número entero')

  // Booleanos y Fechas
  z.boolean()
  z.date()
`;

  const code03 = `  // Opcionales o que permiten null
  z.string().optional() // string | undefined
  z.string().nullable() // string | null

  // Coerción automática (Convierte el input al tipo deseado antes de validar)
  z.coerce.number()  // Convierte "42" -> 42
  z.coerce.boolean() // Convierte "true" -> true
  z.coerce.date()    // Convierte "2026-07-21" -> Date object
`;

  const code04 = `  // 1. Definir el esquema
  export const userSchema = z.object({
    id: z.string().uuid(),
    age: z.coerce.number().min(18),
    role: z.enum(['admin', 'user', 'guest']), // Lista de opciones permitidas
  });

  // 2. Extraer el tipo de TypeScript
  export type User = z.infer<typeof userSchema>;
`;

  const code05 = `  const result = userSchema.safeParse(rawData);

  if (!result.success) {
    // result.error contiene la instancia de ZodError
  c  onsole.log(result.error);
  } else {
    // result.data contiene los datos tipados y validados
    console.log(result.data);
  }
`;

  const code06 = `  try {
    const validData = userSchema.parse(rawData);
  } catch (error) {
    if (error instanceof z.ZodError) {
      // Manejar el error
    }
  }
`;

  const code07 = `  if (!result.success) {
    const { fieldErrors } = result.error.flatten();
  
    // Resultado:
    // {
    //   email: ["Ingresá un correo válido"],
    //   age: ["Debe ser mayor a 18"]
    // }
    return { success: false, errors: fieldErrors };
  }
`;

  const code08 = `  import { z } from 'zod';

  export const contactSchema = z.object({
    name: z
      .string()
      .min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: z
      .string()
      .email('Ingresá un correo electrónico válido'),
    subject: z
     .string()
      .min(3, 'El asunto es muy corto'),
    message: z
      .string()
      .min(10, 'El mensaje debe contener al menos 10 caracteres')
      .max(1000, 'El mensaje excede el límite permitido'),
                });

  // Extraemos el tipo
  export type ContactFormData = z.infer<typeof contactSchema>;
`;

  const code09 = `  'use server';

  import { contactSchema } from '@/schemas/contact';

  export async function sendContactAction(prevState: any, formData: FormData) {
    // 1. Extraemos los campos del FormData nativo
    const rawData = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };
  
    // 2. Validamos los datos con Zod usando .safeParse()
    const result = contactSchema.safeParse(rawData);
  
    // 3. Si la validación falla, retornamos los errores estructurados al cliente
    if (!result.success) {
      // result.error.flatten() simplifica el árbol de errores a un objeto plano por campo
      const fieldErrors = result.error.flatten().fieldErrors;
  
      return {
        success: false,
        errors: {
          name: fieldErrors.name?.[0],
          email: fieldErrors.email?.[0],
          subject: fieldErrors.subject?.[0],
          message: fieldErrors.message?.[0],
        },
      };
    }

    // 4. Si los datos son válidos, result.data está 100% tipado y verificado
    const { name, email, subject, message } = result.data;

    try {
      // ---- AQUÍ EJECUTAMOS LAS OPERACIONES REALES ----
      // a) Guardar en la base de datos (e.g., Supabase / Prisma)
      // await db.messages.create({ data: { name, email, subject, message } });
  
      // b) Enviar el email (e.g., Resend / Nodemailer)
      // await sendEmail({ to: 'admin@ejemplo.com', subject, body: message });
  
      console.log('Mensaje procesado con éxito:', { name, email, subject, message });

      return {
        success: true,
        errors: null,
      message: '¡Gracias por contactarte! Tu mensaje fue enviado con éxito.',
      };
    } catch (error) {
      return {
        success: false,
        errors: { general: 'Hubo un problema en el servidor. Intentá más tarde.' },
      };
    }
  }
`;

  const code10 = `  'use client';

  import { useActionState } from 'react';
  import { sendContactAction } from '@/actions/send-contact';

  export function ContactForm() {
    const [state, formAction, isPending] = useActionState(sendContactAction, null);

    return (
      <form action={formAction} className="max-w-md space-y-4">
        {state?.success && (
          <p className="p-3 bg-green-100 text-green-800 rounded">{state.message}</p>
        )}

        {state?.errors?.general && (
          <p className="p-3 bg-red-100 text-red-800 rounded">{state.errors.general}</p>
        )}

        {/* Nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border p-2 rounded"
          />
          {state?.errors?.name && (
            <p className="text-sm text-red-600 mt-1">{state.errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border p-2 rounded"
          />
          {state?.errors?.email && (
            <p className="text-sm text-red-600 mt-1">{state.errors.email}</p>
          )}
        </div>

        {/* Asunto */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">Asunto</label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full border p-2 rounded"
          />
          {state?.errors?.subject && (
            <p className="text-sm text-red-600 mt-1">{state.errors.subject}</p>
          )}
        </div>

        {/* Mensaje */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full border p-2 rounded"
          />
          {state?.errors?.message && (
            <p className="text-sm text-red-600 mt-1">{state.errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          {isPending ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    );
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
        <h1 className="title-xl">Uso de Zod en Next.js</h1>
        <br></br>
        <p className="text-base">
          Zod se convirtió en la librería estándar para validación de esquemas
          en TypeScript porque te permite definir la estructura de tus datos una
          sola vez e inferir los tipos estáticos automáticamente. En el límite
          entre el cliente y el servidor (Server Actions, endpoints o APIs) es
          justamente el uso donde Zod brilla sin rodeos. <br />
          <i className="text-2xl">
            "La validación en el servidor es obligatoria para garantizar la
            seguridad de tus datos.""
          </i>
        </p>
        <br></br>
        <h2 className="title-lg">1. Instalación desde cero con "pnpm"</h2>
        <p className="text-base">En el raíz de tu proyecto:</p>
        <p className="code mt-4">pnpm add zod</p>
        <h2 className="title-lg">2. Métodos esenciales de Zod</h2>
        <p className="text-base">En el raíz de tu proyecto:</p>
        <p className="text-base">
          A. Tipos Primitivos y Validaciones Comunes Los tipos básicos coinciden
          con los tipos nativos de JS/TS, y se les pueden encadenar reglas de
          validación:
        </p>
        <CodeBlock code={code01} language="tsx" height={480} />
        <p className="text-base">
          B. Manejo de Opcionales, Nulos y Coerción (Ideal para{" "}
          <span className="highlight">FormData</span>) Cuando recibís datos de
          un <span className="highlight">FormData</span> (por ejemplo, desde un
          formulario HTML), todo llega como{" "}
          <span className="highlight">string</span> o{" "}
          <span className="highlight">File</span>. Zod incluye herramientas para
          manejar estos casos:
        </p>
        <CodeBlock code={code03} language="tsx" height={300} />
        <p className="text-base">
          C. Estructura de Objetos (<span className="highlight">z.object</span>)
          e Inferencia de Tipos
          <span className="highlight">z.object</span> define la forma del JSON o{" "}
          <span className="highlight">FormData</span>. A partir de él, podés
          inferir el tipo TypeScript automáticamente sin escribir{" "}
          <span className="highlight">interface</span>
          manuales:
        </p>
        <CodeBlock code={code04} language="tsx" height={300} />
        <p className="text-base">
          D. Métodos de Parsing (Ejecución de la Validación) Existen dos métodos
          principales para ejecutar la validación sobre tus datos. Para Server
          Actions y APIs, <span className="highlight">safeParse</span> es la
          opción recomendada porque no interrumpe el flujo con excepciones:
        </p>
        <p className="text-base">
          1. <span className="highlight">.safeParse(data)</span> (Recomendado
          para Server Actions) No lanza excepciones{" "}
          <span className="highlight">(try/catch)</span>. Retorna un objeto con
          una propiedad <span className="highlight">success</span>
          booleana.
        </p>
        <CodeBlock code={code05} language="tsx" height={300} />
        <p className="text-base">
          2. <span className="highlight">.parse(data)</span> Lanza un error
          implícito (<span className="highlight">ZodError</span>) si la
          validación falla. Se usa cuando preferís atrapar el fallo dentro de un
          bloque
          <span className="highlight">try/catch</span> global.
        </p>
        <CodeBlock code={code06} language="tsx" height={250} />
        <p className="text-base">
          E. Formateo de Errores para la UI (
          <span className="highlight">.flatten()</span>) <br />
          Para devolver errores legibles al cliente desde el servidor,{" "}
          <span className="highlight">.flatten()</span> simplifica la estructura
          interna de <span className="highlight">ZodError</span> convirtiéndola
          en un objeto plano de tipo{" "}
          <span className="highlight">{"{ [campo]: string[] }"}:</span>
        </p>
        <CodeBlock code={code07} language="tsx" height={300} />
        <h2 className="title-lg">
          3. Cheatsheet de Métodos Avanzados de Uso Frecuente
        </h2>
        <table className="w-full table-auto border-2 border-gray-200 mt-4">
          <thead className="bg-blue-900 text-2xl">
            <tr>
              <th className="border border-gray-500 p-2">Método</th>
              <th className="border border-gray-500 p-2">Ejemplo</th>
              <th className="border border-gray-500 p-2">
                Descripción/Caso de uso
              </th>
            </tr>
          </thead>
          <tbody className="font-light">
            <tr>
              <th className="border border-gray-500 p-4">.trim()</th>
              <th className="border border-gray-500">z.string().trim()</th>
              <th className="border border-gray-500">
                Elimina espacios al inicio y final antes de validar.
              </th>
            </tr>
            <tr>
              <th className="border border-gray-500 p-4">.transform()</th>
              <th className="border border-gray-500">
                z.string().transform{"(val => val.toLowerCase())"}
              </th>
              <th className="border border-gray-500">
                Modifica el valor una vez validado (ej. normalizar emails a
                minúsculas).
              </th>
            </tr>
            <tr>
              <th className="border border-gray-500 p-4">.refine()</th>
              <th className="border border-gray-500">
                {"z.string().refine(val => ...)"}
              </th>
              <th className="border border-gray-500">
                Agrega validaciones lógicas personalizadas (ej. verificar si las
                contraseñas coinciden).
              </th>
            </tr>
            <tr>
              <th className="border border-gray-500 p-4">.array()</th>
              <th className="border border-gray-500">
                {"z.string().refine(val => ...)"}
              </th>
              <th className="border border-gray-500">
                Acepta una lista/array del tipo especificado (string[]).
              </th>
            </tr>
            <tr>
              <th className="border border-gray-500 p-4">.partial()</th>
              <th className="border border-gray-500">userSchema.partial()</th>
              <th className="border border-gray-500">
                Hace que todos los campos del objeto sean .optional() (ideal
                para formularios de edición/PATCH).
              </th>
            </tr>
            <tr>
              <th className="border border-gray-500 p-4">.pick() / .omit()</th>
              <th className="border border-gray-500">
                {"userSchema.pick({ email: true })"}
              </th>
              <th className="border border-gray-500">
                Crea un nuevo esquema seleccionando o ignorando campos de un
                esquema existente.
              </th>
            </tr>
          </tbody>
        </table>
        <h2 className="title-lg">Ejemplo de uso en server action</h2>

        <p className="text-base">
          Veamos un ejemplo práctico y real de un formulario de contacto
          utilizando un Server Action con Next.js (App Router) y validando los
          datos con Zod puro en el servidor.
        </p>
        <p className="text-base">
          1. El Esquema de Zod (
          <span className="highlight">schemas/contact.ts)</span> <br />
          Conviene definir el esquema en un archivo dedicado para mantener el
          código ordenado y poder importar tanto el esquema como el tipo si los
          necesitás en otros lados.
        </p>
        <CodeBlock code={code08} language="tsx" height={550} />
        <br />
        <p className="text-base">
          2. El Server Action (
          <span className="highlight">actions/send-contact.ts</span>) <br /> En
          el servidor recibimos los datos (por ejemplo, mediante{" "}
          <span className="highlight">FormData</span> nativo de HTML) y usamos{" "}
          <span className="highlight">contactSchema.safeParse(...)</span> antes
          de realizar operaciones costosas o críticas (como enviar mails o
          guardar en la base de datos).
        </p>
        <CodeBlock code={code09} language="tsx" height={1500} />
        <br />
        <p className="text-base">
          3. El Componente del Cliente (
          <span className="highlight">components/ContactForm.tsx</span>) Usamos
          el hook nativo de React{" "}
          <span className="highlight">useActionState</span> (disponible en React
          19 / Next.js App Router) para enviar el formulario al Server Action y
          mostrar los errores devueltos por Zod sin necesidad de estado manual
          complejo.
        </p>
        <CodeBlock code={code10} language="tsx" height={2100} />
        <br />
        <h2 className="title-lg">Puntos clave de esta arquitectura</h2>
        <p className="text-base">
          1. Seguridad absoluta en el backend: Aunque un atacante modifique el
          formulario cliente o haga un POST manual desde Postman o curl, el
          Server Action detendrá la ejecución gracias a
          contactSchema.safeParse().
        </p>
        <p className="text-base">
          2. Formato con .flatten(): Al hacer
          result.error.flatten().fieldErrors, Zod convierte sus errores en un
          objeto simple estructurado clave-valor
          {'(ej: { email: ["Ingresá un correo válido"] })'}, ideal para enviarlo
          como JSON al cliente.
        </p>
        <p className="text-base">
          3. Poco código cliente: No hace falta instalar librerías extras en el
          frontend ni manejar onChange / useState por cada input. El HTML nativo
          captura los datos y el Server Action realiza la validación pesada.
        </p>
        <br />
      </motion.div>
    </div>
  );
}
