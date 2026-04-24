import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const equipo = [
  {
    nombre: "Luz Nayibe López Suárez",
    pais: "Colombia",
    bandera: "🇨🇴",
    imagen: "/NayibeLopez.webp",
    descripcion:
      "Especialista en desarrollo organizacional y gestión del cambio con amplia experiencia acompañando a organizaciones del sector público y privado en procesos de transformación institucional.",
    areas: ["Arquitectura Organizacional", "Gestión del Cambio", "Sector Público"],
  },
  {
    nombre: "Soledad Cantero",
    pais: "Argentina",
    bandera: "🇦🇷",
    imagen: "/SoledadCantero.webp",
    descripcion:
      "Experta en relaciones laborales y diálogo social con trayectoria en procesos de negociación colectiva y construcción de entornos laborales sostenibles en organizaciones de alto impacto.",
    areas: ["Relaciones Laborales", "Diálogo Social", "Negociación Colectiva"],
  },
  {
    nombre: "Gloria Beatriz Gaviria Ramos",
    pais: "Colombia",
    bandera: "🇨🇴",
    imagen: "/GloriaGaviria.webp",
    descripcion:
      "Actuaria con expertise en valoración de pasivos laborales, análisis de riesgos y conectando el desempeño financiero con la sostenibilidad organizacional de largo plazo.",
    areas: ["Servicios Actuariales", "Análisis de Riesgos", "Sostenibilidad"],
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
              <span className="relative inline-block text-lima whitespace-nowrap">
                <span aria-hidden className="absolute -inset-x-4 -inset-y-1.5 border-2 border-lima rounded-full" />
                Equipo
              </span>
            </h1>
          </div>
        </section>

        {/* ── Intro ─────────────────────────────────────────────────────── */}
        <section className="bg-surface py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-6 h-0.5 bg-lima" />
                <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                  Equipo estratégico
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-dark leading-tight">
                Liderazgo forjado en la práctica, no solo en la teoría.
              </h2>
            </div>
            <div className="flex flex-col gap-5 text-muted leading-relaxed">
              <p>
                Nuestro equipo estratégico ha liderado organizaciones complejas, enfrentando decisiones críticas, gestionando equipos numerosos y resolviendo desafíos de alto impacto.
              </p>
              <p>
                Esta experiencia nos permite acompañar a nuestros clientes con una comprensión real del liderazgo y la transformación organizacional.
              </p>
              <p>
                Más que asesorar desde la distancia, trabajamos en estrecha colaboración para potenciar lo construido y guiar la evolución hacia resultados sostenibles.
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
                Las personas detrás de IWAI
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
                      <span className="text-base leading-none">{persona.bandera}</span>
                      <span className="text-white/70 text-xs font-medium">{persona.pais}</span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6 flex flex-col gap-4">
                    <h3 className="text-white text-lg font-bold leading-snug">
                      {persona.nombre}
                    </h3>
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
                { bandera: "🇨🇴", pais: "Colombia", ciudad: "Bogotá" },
                { bandera: "🇦🇷", pais: "Argentina", ciudad: "Buenos Aires" },
              ].map((loc) => (
                <div
                  key={loc.pais}
                  className="flex flex-col items-center gap-3 bg-white border border-black/5 rounded-2xl px-8 py-6"
                >
                  <span className="text-4xl">{loc.bandera}</span>
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
