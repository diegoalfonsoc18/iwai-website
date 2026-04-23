const sectores = [
  { icono: "🏥", nombre: "Salud" },
  { icono: "🎓", nombre: "Educación" },
  { icono: "🏛️", nombre: "Gobierno" },
  { icono: "💼", nombre: "Financiero" },
  { icono: "⚡", nombre: "Energía" },
  { icono: "💡", nombre: "Tecnología" },
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
              <span className="text-base">{s.icono}</span>
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
