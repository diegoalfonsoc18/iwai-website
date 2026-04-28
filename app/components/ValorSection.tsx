import Image from "next/image";

const items = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2C6.03 2 2 6.03 2 11s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9Z" stroke="#0F0F0F" strokeWidth="1.8" />
        <path d="M7 11l3 3 5-5" stroke="#0F0F0F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Integración real",
    desc: "Trabajamos desde adentro, como parte de tu equipo, no como asesores externos.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17L8 12l4 4 7-9" stroke="#0F0F0F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Resultados medibles",
    desc: "Cada intervención va acompañada de indicadores claros de impacto y seguimiento.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 3v4M11 15v4M3 11h4M15 11h4M5.64 5.64l2.83 2.83M13.54 13.54l2.82 2.82M16.36 5.64l-2.82 2.83M8.46 13.54l-2.83 2.82" stroke="#0F0F0F" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    title: "Metodologías adaptadas",
    desc: "Procesos flexibles según tu cultura, sector y momento organizacional.",
  },
];

export default function ValorSection() {
  return (
    <section id="valor" className="bg-surface py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* ── LEFT: text ──────────────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 bg-lima" />
            <span className="text-xs font-semibold text-muted tracking-widest uppercase">
              Sobre nosotros
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-dark leading-tight">
            Ofrecemos consultoría{" "}
            <span className="text-muted font-normal">
              diseñada para generar cambio real y sostenible.
            </span>
          </h2>

          <div className="w-20 h-1 bg-lima rounded-full" />

          <p className="text-muted leading-relaxed">
            Acompañamos a organizaciones públicas y privadas que enfrentan desafíos complejos y requieren más que asesoría técnica tradicional; entendemos que necesitan aliados estratégicos capaces de comprender su realidad institucional, laboral y humana, y transformar esa comprensión en soluciones concretas que generen resultados.
          </p>

          {/* Feature list */}
          <ul className="flex flex-col gap-5 mt-2">
            {items.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-lima rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-dark">{item.title}</p>
                  <p className="text-sm text-muted leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT: green card (like reference) ──────────────────────── */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">

            {/* Main green card */}
            <div className="bg-lima rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-dark/8" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-dark/8" />

              <div className="relative z-10 flex flex-col gap-6">

                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-dark rounded-full flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v2M5 7v2M1 5h2M7 5h2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-xs font-bold text-dark/60 tracking-widest uppercase">
                      Grupo IWAI
                    </span>
                  </div>
                </div>

                {/* Headline */}
                <div>
                  <p className="text-dark text-2xl font-bold leading-tight">
                    Firma LATAM
                  </p>
                  <p className="text-dark/55 text-sm mt-2 leading-relaxed">
                    Presencia en Colombia y Argentina para toda la región.
                  </p>
                </div>

                {/* Países */}
                <div className="flex gap-3">
                  {[
                    { src: "/colombia.webp", pais: "Colombia", ciudad: "Bogotá" },
                    { src: "/argentina.webp", pais: "Argentina", ciudad: "Buenos Aires" },
                  ].map((loc) => (
                    <div key={loc.pais} className="flex items-center gap-2 bg-dark/10 rounded-2xl px-3 py-2.5 flex-1">
                      <Image src={loc.src} alt={loc.pais} width={22} height={16} className="rounded-sm object-cover flex-shrink-0" />
                      <div>
                        <p className="text-dark font-semibold text-xs">{loc.pais}</p>
                        <p className="text-dark/50 text-[10px]">{loc.ciudad}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-dark text-white text-xs font-semibold px-5 py-3 rounded-full hover:bg-dark/80 transition-colors self-start"
                >
                  Contáctanos
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H4.5M10 2v5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Floating mini card */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 bg-surface rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2l1.8 3.6L14 6.3l-3 2.9.7 4.1L8 11.4l-3.7 1.9.7-4.1-3-2.9 4.2-.7L8 2Z" fill="#C8FF3D" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-dark">Asesoría personalizada</p>
                <p className="text-xs text-muted">Hablemos de tu organización</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
