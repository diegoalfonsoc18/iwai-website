import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const equipo = [
  {
    nombre: "Soledad Cantero",
    especialidad: "Transformación Organizacional, Cultura y Gestión del Cambio",
    pais: "Argentina",
    bandera: "/argentina.webp",
    imagen: "/SoledadCantero.webp",
    descripcion:
      "Soledad ha ocupado posiciones de liderazgo en el ámbito público argentino, incluyendo el cargo de viceministra de Ambiente, donde participó en la formulación e implementación de políticas públicas en un contexto de alta complejidad institucional y social. Su trayectoria combina experiencia en gestión pública, análisis de políticas y transformación organizacional con más de veinte años acompañando procesos de cambio en organizaciones de la región. Entiende que los cambios sostenibles requieren coherencia entre política pública, cultura organizacional y liderazgo.",
    areas: ["Transformación Organizacional", "Cultura", "Gobernanza"],
  },
  {
    nombre: "Luz Nayibe López Suárez",
    especialidad: "Gobernanza Pública, Transformación Institucional y Gestión Estratégica del Cambio",
    pais: "Colombia",
    bandera: "/colombia.webp",
    imagen: "/NayibeLopez.webp",
    descripcion:
      "Con más de veinte años de experiencia en el sector público, ha liderado procesos de transformación institucional en entidades de alta complejidad. Su paso por la DIAN y el Ministerio de Comercio, Industria y Turismo le ha permitido dirigir equipos numerosos, coordinar estructuras organizativas complejas y conducir procesos de cambio que requieren equilibrio entre visión estratégica y ejecución disciplinada. Cree que la gobernanza no es solo un marco normativo, sino una práctica cotidiana que fortalece instituciones cuando se construye con coherencia y sentido de propósito.",
    areas: ["Gobernanza Pública", "Transformación Institucional", "Ejecución Estratégica"],
  },
  {
    nombre: "Gloria Beatriz Gaviria",
    especialidad: "Gobernanza Laboral, Diálogo Social y Relaciones Institucionales Internacionales",
    pais: "Colombia",
    bandera: "/colombia.webp",
    imagen: "/GloriaGaviria.webp",
    descripcion:
      "Ha dedicado su trayectoria al fortalecimiento del diálogo social y la construcción de relaciones laborales sostenibles. Su experiencia incluye roles estratégicos como Representante ante la OIT, jefe de Relaciones Exteriores y directora de Derechos Humanos del Ministerio de Trabajo de Colombia. Se ha consolidado como una de las voces con mayor conocimiento en diálogo social del país, con capacidad para construir consensos en contextos complejos integrando estándares internacionales con las realidades sociales y laborales de América Latina.",
    areas: ["Relaciones Laborales", "Diálogo Social", "Entorno Internacional"],
  },
];

export default function EquipoPage() {
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
              Nuestro{" "}
              <span className="relative inline-block text-lima whitespace-nowrap ml-3">
                <span aria-hidden className="absolute -inset-x-4 -inset-y-1.5 border-2 border-lima rounded-full" />
                Equipo
              </span>
            </h1>
          </div>
        </section>

        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="bg-surface py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

            {/* Izquierda: eyebrow + titular */}
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-0.5 bg-lima" />
                <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                  Equipo estratégico
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight">
                Experiencia real.<br />
                <span className="text-lima">Compromiso genuino.</span>
              </h2>
            </div>

            {/* Derecha: 4 párrafos */}
            <div className="flex flex-col gap-8">
              <p className="text-dark/70 text-base leading-relaxed border-l-2 border-lima/40 pl-5">
                Nuestro trabajo nace de la experiencia acumulada y reconocida de un equipo profesional que ha vivido y gestionado contextos organizacionales exigentes, dinámicos y complejos. Conocemos las tensiones reales que enfrentan las organizaciones por cambios normativos, dinámicas humanas, estructurales y estratégicas, y entendemos que las soluciones solo funcionan cuando integran todas estas dimensiones.
              </p>
              <p className="text-dark/70 text-base leading-relaxed border-l-2 border-lima/40 pl-5">
                Somos una firma integral que entiende que los retos y desafíos institucionales no se pueden abordar desde disciplinas aisladas, sino desde una visión que conecta arquitectura organizacional, gobernanza, relaciones laborales, bienestar institucional y análisis técnico riguroso para fortalecer la sostenibilidad organizacional.
              </p>
              <p className="text-dark/70 text-base leading-relaxed border-l-2 border-lima/40 pl-5">
                Por esto, nuestro compromiso va más allá de la recomendación: nos involucramos activamente, trabajando hombro a hombro con cada organización para acompañar procesos que requieren seriedad, rigor metodológico y sensibilidad humana.
              </p>
              <p className="text-dark/70 text-base leading-relaxed border-l-2 border-lima/40 pl-5">
                Creemos que el verdadero valor está en transformar la complejidad en claridad y la estrategia en acción. Por eso diseñamos e implementamos soluciones prácticas, ejecutables y sostenibles que permiten a las organizaciones avanzar con confianza y obtener resultados en tiempos oportunos.
              </p>
            </div>

          </div>
        </section>

        {/* ── Tarjetas de equipo ────────────────────────────────────────── */}
        <section className="bg-dark py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
                Las personas detrás de Grupo IWAI Consultores
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-14 max-w-xl leading-tight">
              Conoce a algunos de nuestros especialistas.
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {equipo.map((persona) => (
                <article
                  key={persona.nombre}
                  className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-lima/30 transition-colors group"
                >
                  {/* Foto */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden">
                    <Image
                      src={persona.imagen}
                      alt={persona.nombre}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Gradiente inferior */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent" />
                    {/* País */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-3 py-1">
                      <Image src={persona.bandera} alt={persona.pais} width={20} height={14} className="rounded-sm object-cover" />
                      <span className="text-white/70 text-xs font-medium">{persona.pais}</span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="text-white text-lg font-bold leading-snug">
                        {persona.nombre}
                      </h3>
                      <p className="text-lima/70 text-xs font-medium mt-1 leading-snug">
                        {persona.especialidad}
                      </p>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {persona.descripcion}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {persona.areas.map((area) => (
                        <span
                          key={area}
                          className="text-xs font-medium text-lima/80 bg-lima/10 border border-lima/20 px-3 py-1.5 rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Grupo estratégico ampliado ────────────────────────────────── */}
        <section className="bg-surface py-16 px-6">
          <div className="max-w-7xl mx-auto max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                Red de especialistas
              </span>
            </div>
            <p className="text-muted leading-relaxed">
              El Grupo Estratégico se fortalece con la participación de profesionales con trayectorias sólidas en distintos campos especializados, incluyendo el ámbito jurídico, el análisis actuarial y enfoques interdisciplinarios relacionados con el bienestar organizacional y la seguridad y salud en el trabajo. Esta diversidad permite ampliar la mirada y abordar los desafíos institucionales desde diferentes niveles de análisis, integrando perspectivas estratégicas, técnicas y humanas según las particularidades de cada organización.
            </p>
          </div>
        </section>

        {/* ── Presencia geográfica ──────────────────────────────────────── */}
        <section className="bg-surface py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-0.5 bg-lima" />
                <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                  Presencia internacional
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight max-w-md">
                Desde Colombia y Argentina, para toda la región.
              </h2>
            </div>
            <div className="flex gap-6">
              {[
                { bandera: "/colombia.webp", pais: "Colombia", ciudad: "Bogotá" },
                { bandera: "/argentina.webp", pais: "Argentina", ciudad: "Buenos Aires" },
              ].map((loc) => (
                <div
                  key={loc.pais}
                  className="flex flex-col items-center gap-3 bg-white border border-black/5 rounded-2xl px-8 py-6"
                >
                  <Image src={loc.bandera} alt={loc.pais} width={48} height={32} className="rounded object-cover" />
                  <div className="text-center">
                    <p className="text-dark font-bold text-sm">{loc.pais}</p>
                    <p className="text-muted text-xs mt-0.5">{loc.ciudad}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
