import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Agenda una Asesoría de Consultoría Organizacional",
  description:
    "Contáctanos para agendar una asesoría personalizada con Grupo IWAI Consultores. Presentes en Bogotá, Colombia y Buenos Aires, Argentina. Escríbenos a contacto@grupoiwaiconsultores.com.",
  alternates: { canonical: "https://www.grupoiwaiconsultores.com/contacto" },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
