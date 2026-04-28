import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const aQuienAcompanamos = [
  "Fortalecer su estructura, gobernanza y capacidad de decisión",
  "Gestionar entornos laborales complejos con enfoque estratégico",
  "Alinear cultura, liderazgo y bienestar con el desempeño organizacional",
  "Tomar decisiones informadas, gestionando el riesgo y la sostenibilidad financiera",
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
              En Grupo IWAI acompañamos a organizaciones que enfrentan desafíos complejos y necesitan algo más que asesoría: necesitan un aliado en la ejecución.
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
                  Quiénes somos
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight">
                Consultores especializados.<br />
                <span className="text-lima">Aliados en la ejecución.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-dark/70 text-base leading-relaxed border-l-2 border-lima/40 pl-5">
                Trabajamos con empresas y entidades que buscan fortalecer su gobernanza, gestionar relaciones laborales con enfoque estratégico, consolidar culturas organizacionales saludables y tomar decisiones con rigor técnico y sostenibilidad financiera.
              </p>
            </div>

          </div>
        </section>

        {/* ── Cómo trabajamos ───────────────────────────────────────────── */}
        <section className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-0.5 bg-lima" />
                <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                  Cómo trabajamos
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight">
                No asesoramos desde<br />la distancia.
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              <p className="text-dark/70 text-base leading-relaxed border-l-2 border-lima/40 pl-5">
                No creemos en soluciones aisladas ni en recomendaciones que se quedan en el papel. Nos integramos como parte del equipo para comprender el contexto, asumir los retos y acompañar la ejecución.
              </p>
              <p className="text-dark/70 text-base leading-relaxed border-l-2 border-lima/40 pl-5">
                Combinamos visión estratégica, experiencia institucional y analítica aplicada para diseñar soluciones que funcionan en la práctica y generan resultados sostenibles.
              </p>
            </div>

          </div>
        </section>

        {/* ── A quién acompañamos ───────────────────────────────────────── */}
        <section className="bg-dark py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
                A quién acompañamos
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl leading-tight">
              Organizaciones públicas y privadas que requieren:
            </h2>
            <p className="text-white/40 text-sm mb-12 max-w-lg">
              Trabajamos con quienes necesitan más que una recomendación — necesitan resultados.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {aQuienAcompanamos.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-lima/30 transition-colors"
                >
                  <span className="text-lima font-bold text-sm flex-shrink-0">0{i + 1}</span>
                  <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Enfoque + Diferencia ──────────────────────────────────────── */}
        <section className="bg-surface py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6">

            <div className="bg-white border border-black/5 rounded-3xl p-10 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5 bg-lima" />
                <span className="text-xs font-semibold text-muted tracking-widest uppercase">Nuestro enfoque</span>
              </div>
              <h3 className="text-2xl font-bold text-dark leading-snug">
                La transformación no ocurre por partes.
              </h3>
              <p className="text-dark/60 text-sm leading-relaxed">
                Se logra cuando la estructura, las personas y las decisiones evolucionan de manera integrada. Entendemos que cada dimensión afecta a las demás y trabajamos con esa visión sistémica.
              </p>
            </div>

            <div className="bg-dark rounded-3xl p-10 flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="w-6 h-0.5 bg-lima" />
                <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">Lo que nos diferencia</span>
              </div>
              <h3 className="text-2xl font-bold text-white leading-snug">
                No trabajamos desde la distancia.
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">
                Acompañamos de manera directa, asumiendo el reto junto a quienes confían en nosotros.
              </p>
              <p className="text-lima font-semibold text-sm">
                No solo recomendamos: trabajamos con usted.
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
