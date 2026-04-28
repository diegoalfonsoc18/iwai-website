const enfoque = [
  {
    numero: "01",
    titulo: "Arquitectura Organizacional y Gobernanza",
    desc: "Fortalecemos estructuras organizacionales para hacer efectiva la estrategia. Impulsamos liderazgo, toma de decisiones y equipos de alto desempeño, con foco en resultados sostenibles.",
  },
  {
    numero: "02",
    titulo: "Relaciones Laborales Estratégicas",
    desc: "Acompañamos organizaciones en la gestión estratégica de sus relaciones laborales. Promovemos entornos sostenibles basados en el respeto, la legalidad y la confianza.",
  },
  {
    numero: "03",
    titulo: "Analítica avanzada para la toma de decisiones",
    desc: "Sustentamos la toma de decisiones con evidencia técnica rigurosa. Integramos analítica avanzada para fortalecer la sostenibilidad financiera y la gestión del riesgo.",
  },
  {
    numero: "04",
    titulo: "Asuntos Públicos y Desarrollo Empresarial",
    desc: "Acompañamos organizaciones en la gestión de su entorno institucional. Fortalecemos el posicionamiento, la incidencia y la articulación con actores clave para generar valor sostenible.",
  },
];

export default function SobreNosotros() {
  return (
    <section id="equipo" className="bg-surface py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top: intro */}
        <div className="grid lg:grid-cols-2 gap-14 items-start mb-20">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                Quiénes somos
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Transformamos organizaciones haciendo que las cosas pasen
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:pt-4">
            <p className="text-muted leading-relaxed">
              En Grupo IWAI entendemos que las instituciones sólidas no se construyen desde la fragmentación, sino a través de la estructura, el liderazgo y el rigor técnico.
            </p>
            <p className="text-muted leading-relaxed">
              Acompañamos a organizaciones públicas y privadas que operan en entornos complejos y que necesitan más que una asesoría técnica: necesitan aliados que trabajen hombro a hombro en la ejecución.
            </p>
            <p className="text-dark font-semibold text-sm leading-relaxed">
              No diseñamos documentos; diseñamos estructuras que funcionan.
            </p>
            <a
              href="/equipo"
              className="inline-flex items-center gap-2 text-dark font-semibold text-sm hover:text-lima transition-colors"
            >
              Conoce al equipo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Enfoque row */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {enfoque.map((item) => (
            <div
              key={item.numero}
              className="bg-white rounded-3xl p-7 border border-black/5 hover:border-lima/40 transition-colors flex flex-col gap-3"
            >
              <span className="text-xs font-bold text-lima tracking-widest">
                {item.numero}
              </span>
              <h3 className="text-base font-bold text-dark leading-snug">
                {item.titulo}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
