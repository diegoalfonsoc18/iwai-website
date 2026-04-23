"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Líneas de Trabajo", href: "#lineas" },
  { label: "Nuestro Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
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
          <span className="text-lg font-bold tracking-tight text-dark">IWAI</span>
          <span className="text-xs font-medium text-muted tracking-widest uppercase">Consultores</span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted hover:text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA desktop */}
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

        {/* Menu icon mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-surface hover:bg-black/8 transition-colors"
          aria-label="Abrir menú"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="#0F0F0F" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" rx="1.2" fill="#0F0F0F" />
              <rect x="9" y="2" width="5" height="5" rx="1.2" fill="#0F0F0F" />
              <rect x="2" y="9" width="5" height="5" rx="1.2" fill="#0F0F0F" />
              <rect x="9" y="9" width="5" height="5" rx="1.2" fill="#C8FF3D" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80 border-t border-black/5" : "max-h-0"}`}>
        <nav className="flex flex-col px-6 py-4 gap-4 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-dark transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 bg-dark text-white text-sm font-semibold px-5 py-3 rounded-full hover:bg-dark/80 transition-colors mt-2"
          >
            AGENDAR CONSULTA
          </Link>
        </nav>
      </div>
    </header>
  );
}
