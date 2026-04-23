import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-[28px] h-[28px] rounded-[6px] bg-lima flex items-center justify-center overflow-hidden flex-shrink-0">
            <Image
              src="/iwaiBlackLogo.png"
              alt="Grupo IWAI Consultores"
              width={22}
              height={22}
              className="object-contain"
              priority
            />
          </div>
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
