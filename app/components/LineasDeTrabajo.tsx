import Image from "next/image";

const lineas = [
  {
    numero: "01",
    titulo: "Arquitectura Organizacional y Gobernanza",
    descripcion:
      "Fortalecemos estructuras organizacionales para hacer efectiva la estrategia. Impulsamos liderazgo, toma de decisiones y equipos de alto desempeño.",
    tags: [
      { icono: "⬡", label: "Gobernanza" },
      { icono: "⚙", label: "Rediseño" },
      { icono: "◈", label: "Liderazgo" },
    ],
    imagen: "/cardOne.webp",
  },
  {
    numero: "02",
    titulo: "Relaciones Laborales Estratégicas",
    descripcion:
      "Acompañamos organizaciones en la gestión estratégica de sus relaciones laborales. Promovemos entornos sostenibles basados en el respeto y la confianza.",
    tags: [
      { icono: "↗", label: "Negociación" },
      { icono: "◎", label: "Diálogo social" },
      { icono: "✦", label: "Bienestar" },
    ],
    imagen: "/cardTwo.webp",
  },
  {
    numero: "03",
    titulo: "Analítica avanzada para la toma de decisiones",
    descripcion:
      "Sustentamos la toma de decisiones con evidencia técnica rigurosa. Integramos analítica avanzada para la sostenibilidad financiera y la gestión del riesgo.",
    tags: [
      { icono: "◉", label: "Actuaría" },
      { icono: "♡", label: "Riesgo" },
      { icono: "★", label: "Sostenibilidad" },
    ],
    imagen: "/cargThree.webp",
  },
  {
    numero: "04",
    titulo: "Asuntos Públicos y Desarrollo Empresarial",
    descripcion:
      "Acompañamos organizaciones en la gestión de su entorno institucional. Fortalecemos el posicionamiento, la incidencia y la articulación con actores clave.",
    tags: [
      { icono: "⬡", label: "Asuntos públicos" },
      { icono: "⚙", label: "Incidencia" },
      { icono: "◈", label: "Territorio" },
    ],
    imagen: "/cardOne.webp",
  },
];

export default function LineasDeTrabajo() {
  return (
    <section id="lineas" className="py-28 px-6" style={{ backgroundColor: "#181818" }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
                Nuestras líneas
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Líneas de Trabajo
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Cuatro áreas especializadas que se integran para acompañar la
            transformación completa de tu organización.
          </p>
        </div>

        {/* Cards — 3 columnas horizontales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {lineas.map((linea) => (
            <article
              key={linea.numero}
              className="relative rounded-2xl overflow-hidden h-[280px] flex items-end group cursor-pointer"
              style={{ backgroundColor: "#1f1f1f" }}
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <Image
                  src={linea.imagen}
                  alt={linea.titulo}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient fade inferior */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, #1f1f1f 35%, #1f1f1faa 60%, transparent 100%)",
                  }}
                />
              </div>

              {/* Contenido */}
              <div className="relative z-10 p-5 flex flex-col gap-2 w-full">
                <span className="text-lima text-xs font-bold tracking-widest">
                  {linea.numero}
                </span>
                <h3 className="text-white text-lg font-bold leading-snug">
                  {linea.titulo}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {linea.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className="flex items-center gap-1 text-[11px] font-medium text-white/60 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full"
                    >
                      <span className="text-lima text-[9px]">{tag.icono}</span>
                      {tag.label}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-lima hover:text-white transition-colors mt-1"
                >
                  Conocer más
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4.5M10 2v5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
