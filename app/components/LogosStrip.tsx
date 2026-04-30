const sectores = [
  {
    nombre: "Público y territorial",
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18M3 10h18M12 2L3 10h18L12 2zM6 10v12M10 10v12M14 10v12M18 10v12" />
      </svg>
    ),
  },
  {
    nombre: "Empresarial y Productivo",
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2.5" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    nombre: "Gremios y Articulación empresarial",
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    nombre: "Minero y de hidrocarburos",
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="2" width="6" height="2" rx="0.5" />
        <path d="M10 4L5 17" />
        <path d="M14 4L19 17" />
        <path d="M8 8L16 15" />
        <path d="M16 8L8 15" />
        <rect x="3" y="17" width="18" height="2" rx="1" />
        <path d="M7 19v2M12 19v2M17 19v2" />
      </svg>
    ),
  },
];

export default function LogosStrip() {
  return (
    <section className="bg-white border-y border-black/6 py-14 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-0.5 bg-lima" />
            <span className="text-[10px] font-semibold text-muted tracking-[0.2em] uppercase">
              Sectores que acompañamos
            </span>
            <span className="w-6 h-0.5 bg-lima" />
          </div>
          <p className="text-dark/55 text-sm leading-relaxed">
            Trabajamos con organizaciones públicas y privadas que enfrentan procesos de transformación institucional, fortalecimiento de la gobernanza y gestión del cambio en contextos complejos.
          </p>
        </div>

        {/* Sectores */}
        <div className="flex flex-wrap items-start justify-center gap-x-10 gap-y-8 md:gap-x-14">
          {sectores.map((s) => (
            <div
              key={s.nombre}
              className="flex flex-col items-center gap-3 text-black/25 hover:text-black/55 transition-colors group max-w-[130px] text-center"
            >
              <div className="group-hover:scale-110 transition-transform duration-200">
                {s.icono}
              </div>
              <span className="text-[10px] font-semibold tracking-[0.1em] uppercase leading-snug">
                {s.nombre}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
