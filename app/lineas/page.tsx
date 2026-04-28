import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const valores = [
  "Fortalecer la gobernanza y gestionar el cambio en entornos exigentes.",
  "Abordar estratégicamente las relaciones laborales y la cultura organizacional.",
  "Alinear estrategia, riesgos y personas en momentos de transformación.",
  "Integrar el bienestar de los trabajadores en la gestión organizacional.",
  "Conectar el desempeño financiero y el análisis de datos con la sostenibilidad de largo plazo.",
];

const lineas = [
  {
    numero: "01",
    titulo: "Arquitectura Organizacional y Gobernanza",
    descripcion:
      "Fortalecemos estructuras organizacionales para hacer efectiva la estrategia. Impulsamos liderazgo, toma de decisiones y equipos de alto desempeño, con foco en resultados sostenibles.",
    tags: ["Gestión del cambio", "Rediseño", "Liderazgo", "Bienestar"],
    imagen: "/cardOne.webp",
  },
  {
    numero: "02",
    titulo: "Relaciones Laborales Estratégicas",
    descripcion:
      "Acompañamos organizaciones en la gestión estratégica de sus relaciones laborales. Promovemos entornos sostenibles basados en el respeto, la legalidad y la confianza.",
    tags: ["Gestión sindical", "Formalización laboral", "Negociación"],
    imagen: "/cardTwo.webp",
  },
  {
    numero: "03",
    titulo: "Analítica avanzada para la toma de decisiones",
    descripcion:
      "Sustentamos la toma de decisiones con evidencia técnica rigurosa. Integramos analítica avanzada para fortalecer la sostenibilidad financiera y la gestión del riesgo.",
    tags: ["Actuaría", "Gestión de riesgos", "Modelos y simulación financiera"],
    imagen: "/cargThree.webp",
  },
  {
    numero: "04",
    titulo: "Asuntos Públicos y Desarrollo Empresarial",
    descripcion:
      "Acompañamos organizaciones en la gestión de su entorno institucional y el desarrollo de estrategias empresariales con impacto. Fortalecemos el posicionamiento, la incidencia y la articulación con actores clave para generar valor sostenible.",
    tags: ["Relacionamiento con gobiernos reguladores", "Sostenibilidad MiPymes", "Desarrollo de proyectos"],
    imagen: "/cardFour.webp",
  },
];

export default function LineasPage() {
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
              Líneas de{" "}
              <span className="relative inline-block text-lima whitespace-nowrap ml-3">
                <span aria-hidden className="absolute -inset-x-4 -inset-y-1.5 border-2 border-lima rounded-full" />
                Trabajo
              </span>
            </h1>
          </div>
        </section>

        {/* ── Quiénes somos ─────────────────────────────────────────────── */}
        <section className="bg-surface py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-0.5 bg-lima" />
                <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                  ¿Quiénes somos?
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight">
                Conocimiento técnico, experiencia práctica y visión internacional.
              </h2>
            </div>

            <div className="flex flex-col gap-5 text-muted leading-relaxed">
              <p>
                En Grupo IWAI combinamos conocimiento técnico, experiencia práctica y una visión alineada con estándares internacionales.
              </p>
              <p>
                Acompañamos a organizaciones públicas y privadas en procesos de fortalecimiento institucional y evolución estratégica, partiendo del reconocimiento de sus capacidades.
              </p>
              <p>
                Trabajamos con los equipos, entendiendo cómo realmente funcionan las cosas, para construir soluciones que se puedan sostener en la práctica.
              </p>
              <p>
                Así fortalecemos la gobernanza, abordamos de manera estratégica las relaciones laborales y ayudamos a que los datos se conviertan en decisiones que impacten la gestión.
              </p>
            </div>
          </div>
        </section>

        {/* ── Dónde generamos valor ─────────────────────────────────────── */}
        <section className="bg-dark py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
                Dónde generamos valor
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 max-w-2xl leading-tight">
              Cuando la gestión exige claridad y capacidad de ejecución.
            </h2>
            <p className="text-white/40 text-sm mb-12 max-w-lg">
              Intervenimos en los momentos que más lo requieren, con equipos integrados y soluciones sostenibles.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {valores.map((v, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-lima/30 transition-colors"
                >
                  <span className="text-lima font-bold text-sm flex-shrink-0">0{i + 1}</span>
                  <p className="text-white/70 text-sm leading-relaxed">{v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Las 3 líneas ──────────────────────────────────────────────── */}
        <section className="bg-surface py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                Nuestras líneas
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark mb-14">
              Cuatro áreas de especialización
            </h2>

            <div className="flex flex-col gap-6">
              {lineas.map((linea) => (
                <article
                  key={linea.numero}
                  id={linea.numero}
                  className="relative rounded-3xl overflow-hidden min-h-[280px] flex items-end group scroll-mt-24"
                  style={{ backgroundColor: "#1f1f1f" }}
                >
                  {/* Imagen */}
                  <div className="absolute inset-0">
                    <Image
                      src={linea.imagen}
                      alt={linea.titulo}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to right, #1f1f1f 40%, #1f1f1faa 65%, transparent 100%)" }}
                    />
                  </div>

                  {/* Contenido */}
                  <div className="relative z-10 p-8 md:p-10 flex flex-col gap-4 w-full md:w-[55%]">
                    <span className="text-lima text-xs font-bold tracking-widest">{linea.numero}</span>
                    <h3 className="text-white text-2xl md:text-3xl font-bold leading-snug">{linea.titulo}</h3>
                    <p className="text-white/55 text-sm leading-relaxed max-w-sm">{linea.descripcion}</p>
                    <div className="flex flex-wrap gap-2">
                      {linea.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-white/60 bg-white/10 border border-white/10 px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a href="#contacto" className="inline-flex items-center gap-2 text-xs font-semibold text-lima hover:text-white transition-colors mt-1">
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

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
