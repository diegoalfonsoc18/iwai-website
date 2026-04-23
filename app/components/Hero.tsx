export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">

      {/* ── Background: replace the gradient with your photo ──────────────
          Para producción: agrega /public/hero-bg.jpg y usa:
          <Image src="/hero-bg.jpg" alt="" fill className="object-cover" priority />
          con un <div className="absolute inset-0 bg-dark/60" /> encima.
      ──────────────────────────────────────────────────────────────────── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 60%, #1c2e18 0%, #0F0F0F 55%, #050505 100%)",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* ── LEFT: main copy ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-7">

          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 bg-lima" />
            <span className="text-xs font-semibold text-white/60 tracking-widest uppercase">
              Consultoría Organizacional
            </span>
          </div>

          {/* Headline — "integramos" inside outlined oval (like reference) */}
          <h1 className="text-5xl lg:text-[3.75rem] font-bold text-white leading-[1.12]">
            Nos{" "}
            <span className="relative inline-block text-lima whitespace-nowrap">
              {/* Oval border */}
              <span
                aria-hidden
                className="absolute -inset-x-4 -inset-y-1.5 border-2 border-lima rounded-full"
              />
              integramos
            </span>
            <br />
            a tu equipo
          </h1>

          {/* Subtitle */}
          <p className="text-white/55 text-lg leading-relaxed max-w-md">
            Nos convertimos en parte de tu organización para acompañar
            transformaciones reales, con metodologías adaptadas a tu contexto.
          </p>

          {/* CTA */}
          <div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 bg-white text-dark font-semibold text-sm px-7 py-4 rounded-full hover:bg-lima transition-colors duration-200"
            >
              AGENDAR CONSULTA
              <span className="w-6 h-6 bg-dark rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path
                    d="M2 9L9 2M9 2H3.5M9 2v5.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* ── RIGHT: glassmorphism card ────────────────────────────────── */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="w-full max-w-[340px] rounded-3xl p-7 border border-white/15"
            style={{
              background: "rgba(255,255,255,0.07)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            {/* Card header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-lima animate-pulse" />
                <span className="text-xs text-white/50 font-medium">
                  Servicios IWAI
                </span>
              </div>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 13L13 3M13 3H6M13 3v7"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Big stat */}
            <p className="text-lima text-5xl font-bold tracking-tight mb-1">
              +50
            </p>
            <p className="text-white/40 text-sm mb-8">
              Organizaciones acompañadas en Colombia
            </p>

            {/* Divider */}
            <div className="border-t border-white/10 mb-6" />

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Años de experiencia" },
                { value: "95%", label: "Clientes satisfechos" },
                { value: "3", label: "Líneas de trabajo" },
                { value: "100%", label: "Integración real" },
              ].map((s) => (
                <div key={s.label} className="bg-white/5 rounded-2xl px-4 py-3">
                  <p className="text-white font-bold text-lg">{s.value}</p>
                  <p className="text-white/40 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
