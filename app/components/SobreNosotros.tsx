const valores = [
  {
    titulo: "Propósito",
    desc: "Creemos que las organizaciones saludables transforman sociedades. Ese propósito nos mueve.",
  },
  {
    titulo: "Integración",
    desc: "No llegamos a dar recomendaciones. Nos quedamos a construir junto a tu equipo.",
  },
  {
    titulo: "Rigor",
    desc: "Combinamos ciencias del comportamiento, gestión estratégica y práctica de campo.",
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
              Una firma colombiana con ADN de transformación
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:pt-4">
            <p className="text-muted text-lg leading-relaxed">
              Grupo IWAI nació de la convicción de que las organizaciones
              colombianas necesitan acompañamiento real, no diagnósticos que
              quedan en cajones.
            </p>
            <p className="text-muted leading-relaxed">
              Nuestro equipo está conformado por consultores con experiencia en
              los sectores público, privado y sin ánimo de lucro, unidos por el
              mismo propósito: hacer que las transformaciones ocurran de verdad.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-dark font-semibold text-sm hover:text-lima transition-colors"
            >
              Conoce al equipo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Values row */}
        <div className="grid md:grid-cols-3 gap-6">
          {valores.map((v, i) => (
            <div
              key={v.titulo}
              className="bg-white rounded-3xl p-8 border border-black/5 hover:border-lima/40 transition-colors"
            >
              <span className="text-xs font-bold text-lima tracking-widest">
                0{i + 1}
              </span>
              <h3 className="text-xl font-bold text-dark mt-3 mb-3">
                {v.titulo}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
