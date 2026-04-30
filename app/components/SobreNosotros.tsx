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
                En Grupo IWAI
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
              Transformamos organizaciones haciendo que las cosas pasen
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:pt-4">
            <p className="text-muted leading-relaxed">
              Las organizaciones operan hoy en entornos complejos marcados por
              presión regulatoria, exigencias de transparencia, retos laborales
              y aceleración tecnológica. El desafío central no es solo
              adaptarse, sino anticipar y gestionar el cambio con coherencia
              estratégica y enfoque humano.
            </p>
            <p className="text-muted leading-relaxed">
              Grupo IWAI Consultores y Asesores Especializados S.A.S. acompaña a
              entidades públicas y privadas integrando visión estratégica, rigor
              técnico y comprensión organizacional para diseñar soluciones
              aplicables y de alto impacto.
            </p>
            <p className="text-dark font-semibold text-sm leading-relaxed">
              No diseñamos documentos; diseñamos estructuras que funcionan.
            </p>
            <a
              href="/equipo"
              className="inline-flex items-center gap-2 text-dark font-semibold text-sm hover:text-lima transition-colors">
              Conoce al equipo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Ejes estratégicos */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-6 h-0.5 bg-lima" />
          <span className="text-xs font-semibold text-muted tracking-widest uppercase">Nuestros ejes estratégicos</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8 rounded-3xl overflow-hidden">
          {[
            {
              icono: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 22h18M3 10h18M12 2L3 10h18L12 2zM6 10v12M10 10v12M14 10v12M18 10v12" />
                </svg>
              ),
              titulo: "Arquitectura Organizacional Consciente",
              desc: "Diseñamos estructuras organizacionales y modelos de gobernanza que fortalecen la toma de decisiones, la transparencia y la sostenibilidad institucional.",
            },
            {
              icono: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              ),
              titulo: "Relaciones Laborales",
              desc: "Impulsamos relaciones laborales equilibradas, prevención de conflictos y cumplimiento normativo, fortaleciendo entornos de confianza y cohesión organizacional.",
            },
            {
              icono: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M8 12l3 3 5-5" />
                </svg>
              ),
              titulo: "Organizaciones Saludables",
              desc: "Integramos bienestar, cultura organizacional y liderazgo consciente como pilares estratégicos para la productividad y la sostenibilidad humana de las instituciones.",
            },
            {
              icono: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17L8 12l4 4 7-9" />
                  <path d="M21 21H3" />
                </svg>
              ),
              titulo: "Servicios Actuariales",
              desc: "Aplicamos análisis cuantitativo y modelación actuarial para la gestión del riesgo, la evaluación de escenarios y la toma de decisiones basada en evidencia.",
            },
          ].map((pilar, i) => (
            <div key={i} className="bg-white p-8 flex flex-col gap-4 hover:bg-surface transition-colors">
              <div className="w-10 h-10 bg-lima/15 rounded-xl flex items-center justify-center text-dark">
                {pilar.icono}
              </div>
              <h3 className="text-base font-bold text-dark leading-snug">{pilar.titulo}</h3>
              <p className="text-muted text-sm leading-relaxed">{pilar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
