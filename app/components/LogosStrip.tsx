const sectores = [
  {
    nombre: "Salud",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    nombre: "Educación",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
        <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
      </svg>
    ),
  },
  {
    nombre: "Gobierno",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 22h18M3 10h18M12 2L3 10h18L12 2zM6 10v12M10 10v12M14 10v12M18 10v12" />
      </svg>
    ),
  },
  {
    nombre: "Financiero",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2.5" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    nombre: "Energía",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    nombre: "Tecnología",
    icono: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2.5" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

export default function LogosStrip() {
  return (
    <section className="bg-white border-y border-black/5 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs text-muted tracking-widest uppercase mb-6">
          Sectores que acompañamos
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {sectores.map((s) => (
            <div
              key={s.nombre}
              className="flex items-center gap-2 text-black/30 hover:text-black/60 transition-colors"
            >
              {s.icono}
              <span className="text-sm font-semibold tracking-wide uppercase">
                {s.nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
