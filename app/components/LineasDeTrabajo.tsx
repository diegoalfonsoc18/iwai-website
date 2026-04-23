const lineas = [
  {
    numero: "01",
    titulo: "Desarrollo Organizacional",
    descripcion:
      "Fortalecemos las capacidades internas alineando estructura, procesos y personas para alcanzar sus objetivos estratégicos de forma sostenible.",
    tags: ["Estructura", "Procesos", "Alineación"],
    destacada: false,
  },
  {
    numero: "02",
    titulo: "Gestión del Cambio",
    descripcion:
      "Acompañamos transformaciones asegurando que las personas sean el centro del cambio. Lideramos procesos de transición con metodologías probadas.",
    tags: ["Transformación", "Liderazgo", "Adopción"],
    destacada: true,
  },
  {
    numero: "03",
    titulo: "Cultura y Clima Organizacional",
    descripcion:
      "Diagnosticamos e intervenimos la cultura para construir entornos de alto desempeño, bienestar y sentido de pertenencia.",
    tags: ["Diagnóstico", "Bienestar", "Alto desempeño"],
    destacada: false,
  },
];

export default function LineasDeTrabajo() {
  return (
    <section id="lineas" className="bg-dark py-28 px-6">
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

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {lineas.map((linea) => (
            <article
              key={linea.numero}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 group transition-all duration-300 hover:-translate-y-1 ${
                linea.destacada
                  ? "bg-lima"
                  : "bg-white/5 border border-white/10 hover:border-lima/30"
              }`}
            >
              {/* Number */}
              <span
                className={`text-xs font-bold tracking-widest ${
                  linea.destacada ? "text-dark/50" : "text-lima"
                }`}
              >
                {linea.numero}
              </span>

              {/* Title */}
              <h3
                className={`text-xl font-bold leading-snug ${
                  linea.destacada ? "text-dark" : "text-white"
                }`}
              >
                {linea.titulo}
              </h3>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed flex-1 ${
                  linea.destacada ? "text-dark/65" : "text-white/45"
                }`}
              >
                {linea.descripcion}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {linea.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      linea.destacada
                        ? "bg-dark/10 text-dark/70"
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow link */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center mt-1 transition-transform group-hover:translate-x-1 ${
                  linea.destacada ? "bg-dark" : "bg-white/10"
                }`}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M2 11L11 2M11 2H4.5M11 2v6.5"
                    stroke={linea.destacada ? "#C8FF3D" : "white"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
