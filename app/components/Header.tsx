import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
            <rect width="28" height="28" rx="6" fill="#C8FF3D" />
            <path
              d="M14 5v5M14 18v5M5 14h5M18 14h5M7.93 7.93l3.54 3.54M16.54 16.54l3.53 3.53M20.07 7.93l-3.53 3.54M11.46 16.54l-3.53 3.53"
              stroke="#0F0F0F"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-lg font-bold tracking-tight text-dark">
            IWAI
          </span>
          <span className="text-xs font-medium text-muted tracking-widest uppercase">
            Consultores
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#lineas"
            className="text-sm text-muted hover:text-dark transition-colors"
          >
            Líneas de Trabajo
          </Link>
          <Link
            href="#equipo"
            className="text-sm text-muted hover:text-dark transition-colors"
          >
            Nuestro Equipo
          </Link>
          <Link
            href="#contacto"
            className="text-sm text-muted hover:text-dark transition-colors"
          >
            Contacto
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="#contacto"
          className="hidden md:flex items-center gap-2 bg-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-dark/80 transition-colors"
        >
          AGENDAR CONSULTA
          <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H3M8 2v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </Link>
      </div>
    </header>
  );
}
