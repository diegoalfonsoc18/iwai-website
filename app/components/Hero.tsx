import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">

      {/* ── Background photo ──────────────────────────────────────────── */}
      <Image
        src="/hero.webp"
        alt="Taller corporativo Grupo IWAI"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay para legibilidad del texto */}
      <div className="absolute inset-0 bg-dark/45" />

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
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold text-white leading-[1.12]">
            Nos{" "}
            <span className="relative inline-block text-lima whitespace-nowrap ml-3">
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
            No trabajamos desde la distancia, nos integramos como parte de su equipo, porque creemos que acompañar implica asumir el reto junto a quienes confían en nosotros.
          </p>

          {/* CTA */}
          <div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 bg-white text-dark font-semibold text-sm px-7 py-4 rounded-full hover:bg-lima transition-colors duration-200"
            >
              CONTÁCTANOS
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
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-lima/15 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-lima animate-pulse" />
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">Grupo IWAI</p>
                  <p className="text-white/35 text-[10px]">Consultoría y estrategia organizacional</p>
                </div>
              </div>
              <span className="text-[10px] font-medium text-lima bg-lima/10 px-2.5 py-1 rounded-full flex items-center gap-1">
                <Image src="/colombia.webp" alt="Colombia" width={16} height={11} className="rounded-sm object-cover" />
                <Image src="/argentina.webp" alt="Argentina" width={16} height={11} className="rounded-sm object-cover" />
              </span>
            </div>

            {/* Items */}
            <div className="flex flex-col gap-3">
              {[
                {
                  icon: "✦",
                  valor: "Somos tejedores",
                  label: "organizacionales y gestores de cambio",
                },
                {
                  icon: "✦",
                  valor: "Sector público y privado",
                  label: "organizaciones acompañadas",
                },
                {
                  icon: "✦",
                  valor: "+20 años",
                  label: "de experiencia de nuestros expertos",
                },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-4 bg-white/5 hover:bg-white/8 transition-colors rounded-2xl px-4 py-3.5">
                  <span className="text-lima text-xs flex-shrink-0">{s.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm">{s.valor}</p>
                    <p className="text-white/40 text-xs mt-0.5 truncate">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
