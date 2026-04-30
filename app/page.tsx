import type { Metadata } from "next";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Grupo IWAI Consultores | Consultoría Organizacional en Colombia y Argentina",
  description:
    "Consultoría organizacional especializada en gobernanza, relaciones laborales, analítica avanzada y asuntos públicos. Presencia en Colombia y Argentina. Transformamos organizaciones desde adentro.",
  alternates: {
    canonical: "https://www.grupoiwaiconsultores.com",
  },
};
import Hero from "./components/Hero";
import LogosStrip from "./components/LogosStrip";
import ValorSection from "./components/ValorSection";
import LineasDeTrabajo from "./components/LineasDeTrabajo";
import MediaHub from "./components/MediaHub";
import SobreNosotros from "./components/SobreNosotros";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogosStrip />
        <ValorSection />
        <LineasDeTrabajo />
        <MediaHub />
        <SobreNosotros />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
