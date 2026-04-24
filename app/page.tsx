import Header from "./components/Header";
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
