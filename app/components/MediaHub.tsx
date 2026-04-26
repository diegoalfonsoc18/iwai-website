import Image from "next/image";

const podcasts = [
  {
    ep: "EP 01",
    titulo: "¿Qué significa realmente transformar una organización?",
    duracion: "42 min",
    fecha: "Mar 2025",
    href: "#",
  },
  {
    ep: "EP 02",
    titulo: "Cultura organizacional: mito y realidad en Colombia",
    duracion: "38 min",
    fecha: "Abr 2025",
    href: "#",
  },
  {
    ep: "EP 03",
    titulo: "Gestión del cambio sin resistencia: ¿es posible?",
    duracion: "51 min",
    fecha: "Abr 2025",
    href: "#",
  },
];

const fotos = [
  { alt: "Taller liderazgo Bogotá", src: "/tallerLiderazgo.webp" },
  { alt: "Sesión de co-creación", src: "/sesionCoCreacion.webp" },
  { alt: "Retiro estratégico", src: "/retiroEstrategico.webp" },
];

function PodcastIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="3" fill="currentColor" />
      <path
        d="M4.5 9a4.5 4.5 0 019 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M2 9a7 7 0 0114 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="9"
        y1="13"
        x2="9"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 2l9 5-9 5V2z" fill="currentColor" />
    </svg>
  );
}

export default function MediaHub() {
  return (
    <section className="bg-dark py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
                Contenido
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              INSIGHTS IWAI
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Contenido para entender, decidir y transformar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <a
            href={podcasts[0].href}
            className="group md:col-span-2 md:row-span-2 bg-lima rounded-3xl p-8 flex flex-col justify-between min-h-[320px] hover:brightness-95 transition-all">
            <div className="flex items-start justify-between">
              <span className="flex items-center gap-2 bg-dark/10 text-dark text-xs font-bold px-3 py-1.5 rounded-full">
                <PodcastIcon />
                Podcast
              </span>
              <span className="text-dark/40 text-xs font-medium">
                {podcasts[0].ep}
              </span>
            </div>
            <div>
              <p className="text-dark text-2xl font-bold leading-snug mb-4 max-w-xs">
                {podcasts[0].titulo}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center text-lima group-hover:scale-110 transition-transform">
                    <PlayIcon />
                  </div>
                  <div>
                    <p className="text-dark/60 text-xs">Escuchar episodio</p>
                    <p className="text-dark text-sm font-semibold">
                      {podcasts[0].duracion}
                    </p>
                  </div>
                </div>
                <span className="text-dark/40 text-xs">
                  {podcasts[0].fecha}
                </span>
              </div>
            </div>
          </a>

          <div className="md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden relative min-h-[320px]">
            <Image
              src={fotos[0].src}
              alt={fotos[0].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs font-semibold text-white/50 tracking-widest uppercase">
                Fotos
              </span>
              <p className="text-white font-semibold mt-1">{fotos[0].alt}</p>
            </div>
          </div>

          <a
            href={podcasts[1].href}
            className="group bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-4 hover:border-lima/30 transition-colors">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-lima text-xs font-bold">
                <PodcastIcon />
                {podcasts[1].ep}
              </span>
              <span className="text-white/30 text-xs">
                {podcasts[1].duracion}
              </span>
            </div>
            <p className="text-white text-sm font-semibold leading-snug flex-1">
              {podcasts[1].titulo}
            </p>
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 bg-lima/10 rounded-full flex items-center justify-center text-lima group-hover:bg-lima group-hover:text-dark transition-all">
                <PlayIcon />
              </div>
              <span className="text-white/30 text-xs">{podcasts[1].fecha}</span>
            </div>
          </a>

          <a
            href={podcasts[2].href}
            className="group bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col gap-4 hover:border-lima/30 transition-colors">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-lima text-xs font-bold">
                <PodcastIcon />
                {podcasts[2].ep}
              </span>
              <span className="text-white/30 text-xs">
                {podcasts[2].duracion}
              </span>
            </div>
            <p className="text-white text-sm font-semibold leading-snug flex-1">
              {podcasts[2].titulo}
            </p>
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 bg-lima/10 rounded-full flex items-center justify-center text-lima group-hover:bg-lima group-hover:text-dark transition-all">
                <PlayIcon />
              </div>
              <span className="text-white/30 text-xs">{podcasts[2].fecha}</span>
            </div>
          </a>

          <div className="rounded-3xl overflow-hidden relative min-h-[180px]">
            <Image
              src={fotos[1].src}
              alt={fotos[1].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white text-xs font-semibold">{fotos[1].alt}</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden relative min-h-[180px]">
            <Image
              src={fotos[2].src}
              alt={fotos[2].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white text-xs font-semibold">{fotos[2].alt}</p>
            </div>
          </div>

          <a
            href="#"
            className="group bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center gap-3 min-h-[180px] hover:border-lima/30 transition-all text-center">
            <div className="w-10 h-10 bg-lima/10 rounded-full flex items-center justify-center text-lima group-hover:bg-lima group-hover:text-dark transition-all">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 14L14 2M14 2H7M14 2v7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-white/60 text-sm font-semibold">
              Ver todo el contenido
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
