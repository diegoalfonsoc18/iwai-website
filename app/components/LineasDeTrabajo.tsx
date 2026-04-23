import Image from "next/image";

const lineas = [
  {
    numero: "01",
    titulo: "Desarrollo Organizacional",
    descripcion:
      "Fortalecemos las capacidades internas alineando estructura, procesos y personas para alcanzar sus objetivos estratégicos de forma sostenible.",
    tags: [
      { icono: "⬡", label: "Estructura" },
      { icono: "⚙", label: "Procesos" },
      { icono: "◈", label: "Alineación" },
    ],
    imagen: "/cardOne.webp",
  },
  {
    numero: "02",
    titulo: "Gestión del Cambio",
    descripcion:
      "Acompañamos transformaciones asegurando que las personas sean el centro del cambio. Lideramos procesos de transición con metodologías probadas.",
    tags: [
      { icono: "↗", label: "Transformación" },
      { icono: "◎", label: "Liderazgo" },
      { icono: "✦", label: "Adopción" },
    ],
    imagen: "/cardTwo.webp",
  },
  {
    numero: "03",
    titulo: "Cultura y Clima Organizacional",
    descripcion:
      "Diagnosticamos e intervenimos la cultura para construir entornos de alto desempeño, bienestar y sentido de pertenencia.",
    tags: [
      { icono: "◉", label: "Diagnóstico" },
      { icono: "♡", label: "Bienestar" },
      { icono: "★", label: "Alto desempeño" },
    ],
    imagen: "/cargThree.webp",
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
            Tres áreas especializadas que se integran para acompañar la
            transformación completa de tu organización.
          </p>
        </div>

        {/* Cards — 3 columnas horizontales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
