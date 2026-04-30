import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos",
  description:
    "Política de privacidad y tratamiento de datos personales de Grupo IWAI Consultores y Asesores Especializados S.A.S., conforme a la Ley 1581 de 2012.",
  alternates: { canonical: "https://www.grupoiwaiconsultores.com/privacidad" },
  robots: { index: true, follow: false },
};

const secciones = [
  {
    titulo: "1. Responsable del tratamiento",
    contenido: `Grupo IWAI Consultores y Asesores Especializados S.A.S., con domicilio principal en Bogotá, Colombia, es el responsable del tratamiento de los datos personales recolectados a través de este sitio web y de sus canales de contacto.

Correo electrónico: contacto@grupoiwaiconsultores.com
Sitio web: www.grupoiwaiconsultores.com`,
  },
  {
    titulo: "2. Datos que recopilamos",
    contenido: `Recopilamos los datos personales que usted nos proporciona de manera voluntaria a través de nuestros formularios de contacto, incluyendo:

• Nombre y apellidos
• Correo electrónico
• Teléfono de contacto (opcional)
• Nombre de la organización
• Mensaje o consulta

No recopilamos datos sensibles, financieros ni información de menores de edad.`,
  },
  {
    titulo: "3. Finalidad del tratamiento",
    contenido: `Los datos personales recolectados se utilizan exclusivamente para:

• Responder a sus consultas y solicitudes de contacto
• Enviar información sobre nuestros servicios cuando usted lo haya solicitado
• Gestionar la relación comercial o de prestación de servicios
• Cumplir con obligaciones legales y contractuales`,
  },
  {
    titulo: "4. Base legal",
    contenido: `El tratamiento de sus datos se fundamenta en la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013 de la República de Colombia. El tratamiento se realiza con base en:

• Su consentimiento expreso al enviarnos un mensaje de contacto
• El interés legítimo en responder consultas sobre nuestros servicios
• El cumplimiento de obligaciones contractuales cuando aplique`,
  },
  {
    titulo: "5. Conservación de los datos",
    contenido: `Sus datos serán conservados durante el tiempo necesario para cumplir con la finalidad para la que fueron recolectados, y en todo caso durante el tiempo que la ley colombiana exija. Una vez cumplida la finalidad, procederemos a su eliminación segura.`,
  },
  {
    titulo: "6. Transferencia de datos",
    contenido: `No vendemos, alquilamos ni compartimos sus datos personales con terceros con fines comerciales. Podemos compartir datos con colaboradores o aliados estratégicos únicamente cuando sea estrictamente necesario para la prestación del servicio y bajo acuerdos de confidencialidad.`,
  },
  {
    titulo: "7. Derechos del titular",
    contenido: `De conformidad con la Ley 1581 de 2012, usted tiene derecho a:

• Conocer, actualizar y rectificar sus datos personales
• Solicitar prueba de la autorización otorgada
• Ser informado sobre el uso de sus datos
• Presentar quejas ante la Superintendencia de Industria y Comercio (SIC)
• Revocar la autorización y solicitar la supresión de sus datos
• Acceder gratuitamente a sus datos personales

Para ejercer cualquiera de estos derechos, escríbanos a: contacto@grupoiwaiconsultores.com`,
  },
  {
    titulo: "8. Cookies y tecnologías de seguimiento",
    contenido: `Este sitio web puede utilizar cookies técnicas necesarias para su funcionamiento. No utilizamos cookies de seguimiento publicitario ni compartimos información de navegación con terceros para fines de publicidad.`,
  },
  {
    titulo: "9. Seguridad",
    contenido: `Implementamos medidas técnicas y organizativas razonables para proteger sus datos personales contra acceso no autorizado, pérdida o divulgación indebida.`,
  },
  {
    titulo: "10. Modificaciones",
    contenido: `Nos reservamos el derecho de actualizar esta política en cualquier momento. La versión vigente estará siempre disponible en esta página. Le recomendamos revisarla periódicamente.`,
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* Hero */}
        <section className="bg-dark py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
                Grupo IWAI Consultores
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Política de{" "}
              <span className="text-lima">Privacidad</span>
            </h1>
            <p className="text-white/40 text-sm mt-4">
              Última actualización: enero de 2025 · Conforme a la Ley 1581 de 2012
            </p>
          </div>
        </section>

        {/* Contenido */}
        <section className="bg-surface py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted leading-relaxed mb-12 text-sm border-l-2 border-lima pl-4">
              En Grupo IWAI Consultores nos comprometemos a proteger su privacidad y tratar sus datos personales con responsabilidad, transparencia y conforme a la legislación colombiana vigente.
            </p>

            <div className="flex flex-col gap-10">
              {secciones.map((s) => (
                <div key={s.titulo} className="flex flex-col gap-3">
                  <h2 className="text-dark font-bold text-lg">{s.titulo}</h2>
                  <div className="text-muted text-sm leading-relaxed whitespace-pre-line">
                    {s.contenido}
                  </div>
                  <div className="w-full h-px bg-black/5 mt-2" />
                </div>
              ))}
            </div>

            {/* Contacto */}
            <div className="mt-14 bg-dark rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <p className="text-lima text-xs font-semibold tracking-widest uppercase mb-2">
                  ¿Preguntas sobre tus datos?
                </p>
                <p className="text-white font-bold text-xl">Escríbenos directamente</p>
                <p className="text-white/40 text-sm mt-1">Te respondemos en menos de 48 horas hábiles.</p>
              </div>
              <a
                href="mailto:contacto@grupoiwaiconsultores.com"
                className="flex-shrink-0 inline-flex items-center gap-3 bg-lima text-dark font-bold px-6 py-3 rounded-full hover:bg-lima/80 transition-colors whitespace-nowrap text-sm"
              >
                contacto@grupoiwaiconsultores.com
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
