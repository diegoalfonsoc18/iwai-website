const clientes = [
  "Ministerio de Salud",
  "Ecopetrol",
  "Bancolombia",
  "Grupo Éxito",
  "Avianca",
];

export default function LogosStrip() {
  return (
    <section className="bg-white border-y border-black/5 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs text-muted tracking-widest uppercase mb-6">
          Han confiado en nosotros
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {clientes.map((nombre) => (
            <span
              key={nombre}
              className="text-sm font-semibold text-black/20 tracking-wide uppercase hover:text-black/40 transition-colors"
            >
              {nombre}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
