const navLinks = [
  { label: "Líneas de Trabajo", href: "#lineas" },
  { label: "Nuestro Equipo", href: "#equipo" },
  { label: "Propuesta de Valor", href: "#valor" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-dark">

      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-xs font-semibold text-lima tracking-widest uppercase mb-3">
              ¿Listo para transformar tu organización?
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight max-w-lg">
              Hablemos. La primera consulta es{" "}
              <span className="text-lima">sin costo.</span>
            </h2>
          </div>
          <a
            href="mailto:contacto@grupoiwaiconsultores.com"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-lima text-dark font-bold px-8 py-4 rounded-full hover:bg-lima/80 transition-colors whitespace-nowrap"
          >
            AGENDAR CONSULTA
            <span className="w-6 h-6 bg-dark rounded-full flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path
                  d="M2 9L9 2M9 2H3.5M9 2v5.5"
                  stroke="#C8FF3D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Footer body */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2.5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <rect width="28" height="28" rx="6" fill="#C8FF3D" />
              <path
                d="M14 5v5M14 18v5M5 14h5M18 14h5M7.93 7.93l3.54 3.54M16.54 16.54l3.53 3.53M20.07 7.93l-3.53 3.54M11.46 16.54l-3.53 3.53"
                stroke="#0F0F0F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="text-lg font-bold text-white">IWAI</span>
            <span className="text-xs font-medium text-white/30 tracking-widest uppercase">
              Consultores
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            Firma colombiana de consultoría organizacional. Nos integramos a tu
            equipo para transformar desde adentro.
          </p>
          <p className="text-white/25 text-xs">
            grupoiwaiconsultores.com
          </p>
        </div>

        {/* Nav */}
        <div>
          <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-5">
            Navegación
          </p>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-white/50 text-sm hover:text-lima transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-5">
            Contacto
          </p>
          <ul className="flex flex-col gap-3 text-sm text-white/50">
            <li>
              <a
                href="mailto:contacto@grupoiwaiconsultores.com"
                className="hover:text-lima transition-colors"
              >
                contacto@grupoiwaiconsultores.com
              </a>
            </li>
            <li>Colombia</li>
            <li className="flex gap-4 pt-2">
              {["LinkedIn", "Instagram"].map((red) => (
                <a
                  key={red}
                  href="#"
                  className="text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:border-lima/40 hover:text-lima transition-colors"
                >
                  {red}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Grupo IWAI Consultores. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">Bogotá, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
