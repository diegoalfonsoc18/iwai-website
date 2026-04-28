import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const pillares = [
  "Conocimiento técnico riguroso",
  "Experiencia práctica en gestión pública",
  "Visión con estándares internacionales",
  "Enfoque cercano y respetuoso",
];

export default function QuienesSomosPage() {
  return (
    <>
      <Header />
      <main className="pt-16">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="bg-dark py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
                Grupo IWAI
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              Quiénes{" "}
              <span className="relative inline-block text-lima whitespace-nowrap ml-3">
                <span aria-hidden className="absolute -inset-x-4 -inset-y-1.5 border-2 border-lima rounded-full" />
                somos
              </span>
            </h1>
            <p className="mt-8 text-white/60 text-lg leading-relaxed max-w-2xl">
              Las organizaciones no necesitan que alguien les diga lo que ya saben. Necesitan aliados que comprendan su historia, reconozcan sus avances y potencien lo que han construido.
            </p>
          </div>
        </section>

        {/* ── Quiénes somos ─────────────────────────────────────────────── */}
        <section className="bg-surface py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-0.5 bg-lima" />
                <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                  Nuestra identidad
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight mb-8">
                Consultores especializados.<br />
                <span className="text-lima">Aliados estratégicos.</span>
              </h2>

              <div className="flex flex-col gap-3">
                {pillares.map((p, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white border border-black/5 rounded-xl px-4 py-3">
                    <span className="text-lima font-bold text-xs">0{i + 1}</span>
                    <span className="text-dark/70 text-sm font-medium">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <p className="text-dark/70 text-base leading-relaxed border-l-2 border-lima/40 pl-5">
                En Grupo IWAI somos consultores y asesores especializados que acompañamos a organizaciones públicas y privadas en procesos de fortalecimiento institucional y evolución estratégica. Partimos del reconocimiento de que toda organización tiene capacidades, aprendizajes y logros que constituyen la base real para cualquier transformación sostenible.
              </p>
              <p className="text-dark/70 text-base leading-relaxed border-l-2 border-lima/40 pl-5">
                Nuestro trabajo no consiste en imponer modelos externos ni replicar fórmulas estandarizadas. Nos involucramos en la realidad cotidiana de cada organización, comprendiendo sus dinámicas, su cultura y sus desafíos particulares. Desde allí, construimos junto a sus equipos soluciones que amplían capacidades existentes, fortalecen la gobernanza y consolidan prácticas éticas y sostenibles.
              </p>
              <p className="text-dark/70 text-base leading-relaxed border-l-2 border-lima/40 pl-5">
                Combinamos conocimiento técnico, experiencia práctica y una visión alineada con estándares internacionales, siempre con un enfoque cercano y respetuoso. Creemos en procesos que evolucionan desde dentro, donde la estrategia no es un documento, sino una práctica coherente con la identidad y el propósito institucional.
              </p>
            </div>

          </div>
        </section>

        {/* ── Historia / Propósito ──────────────────────────────────────── */}
        <section className="bg-dark py-24 px-6">
          <div className="max-w-7xl mx-auto">

            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
                Historia y propósito
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-14 max-w-2xl leading-tight">
              Una firma que nace de quienes han liderado desde adentro.
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:border-lima/30 transition-colors">
                <span className="text-lima text-xs font-bold tracking-widest">01</span>
                <h3 className="text-white font-bold text-lg leading-snug">Nuestro origen</h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  Grupo IWAI Consultores &amp; Asesores Especializados SAS nace de la experiencia de mujeres que han liderado organizaciones, equipos y procesos complejos desde posiciones de alta responsabilidad en América Latina. Mujeres que conocen de primera mano lo que significa tomar decisiones bajo presión, responder a resultados en tiempos cortos y sostener estándares de calidad sin perder la humanidad que hace posible el trabajo colectivo.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:border-lima/30 transition-colors">
                <span className="text-lima text-xs font-bold tracking-widest">02</span>
                <h3 className="text-white font-bold text-lg leading-snug">Nuestra historia</h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  Nuestra historia surge de trayectorias construidas en escenarios reales de gestión pública, gobernanza, relaciones laborales y transformación institucional. Hemos vivido los desafíos que enfrentan quienes lideran: equilibrar la estrategia con la operación diaria, impulsar cambios sin romper la cohesión de los equipos y alcanzar resultados concretos en contextos exigentes.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col gap-4 hover:border-lima/30 transition-colors">
                <span className="text-lima text-xs font-bold tracking-widest">03</span>
                <h3 className="text-white font-bold text-lg leading-snug">Nuestro liderazgo</h3>
                <p className="text-white/55 text-sm leading-relaxed">
                  Creemos en un liderazgo que combina rigor técnico con sensibilidad humana. Sabemos que los equipos de alto desempeño no se construyen solo desde la exigencia, sino desde la confianza, el propósito compartido y la capacidad de innovar incluso en entornos complejos.
                </p>
              </div>

              <div className="bg-lima/10 border border-lima/25 rounded-3xl p-8 flex flex-col gap-4">
                <span className="text-lima text-xs font-bold tracking-widest">04</span>
                <h3 className="text-white font-bold text-lg leading-snug">Nuestro propósito</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Acompañar a las organizaciones desde dentro, haciendo parte de sus equipos durante el tiempo que dure nuestro acompañamiento. Nos ponemos la camiseta porque entendemos que las transformaciones reales no se logran desde la distancia, sino desde el compromiso genuino con los objetivos, las personas y la realidad de cada organización.
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  Nuestro trabajo consiste en ayudar a que los propósitos de nuestros clientes se conviertan en resultados sostenibles, manteniendo siempre el equilibrio entre excelencia técnica, innovación y sentido humano.
                </p>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
