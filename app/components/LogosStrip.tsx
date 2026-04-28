const sectores = [
  {
    nombre: "Sector público y entidades gubernamentales",
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18M3 10h18M12 2L3 10h18L12 2zM6 10v12M10 10v12M14 10v12M18 10v12" />
      </svg>
    ),
  },
  {
    nombre: "Organismos multilaterales y cooperación internacional",
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    nombre: "Mundo del trabajo, diálogo social y relaciones laborales",
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    nombre: "Sostenibilidad, medio ambiente y desarrollo institucional",
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V12M12 12C12 7 7 4 2 5c0 5 3 9 10 7M12 12c0-5 5-8 10-7 0 5-3 9-10 7" />
      </svg>
    ),
  },
  {
    nombre: "Gobernanza y bienestar organizacional",
    icono: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
