"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const motivos = [
  "Arquitectura Organizacional",
  "Relaciones Laborales y Diálogo Social",
  "Servicios Actuariales",
  "Otro",
];

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simula envío — aquí conectarás tu backend / Resend / Formspree
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setEnviado(true);
  }

  return (
    <>
      <Header />
      <main className="pt-16">

        {/* ── Hero ──────────────────────────────────────────────────────── */}
        <section className="bg-dark py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-0.5 bg-lima" />
              <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
                Grupo IWAI
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              Hablemos de tu{" "}
              <span className="relative inline-block text-lima whitespace-nowrap ml-3">
                <span aria-hidden className="absolute -inset-x-4 -inset-y-1.5 border-2 border-lima rounded-full" />
                proyecto
              </span>
            </h1>
            <p className="text-white/40 mt-6 text-base max-w-lg leading-relaxed">
              Cuéntanos el desafío que enfrentas. Nuestro equipo te responderá dentro de las próximas 24 horas hábiles.
            </p>
          </div>
        </section>

        {/* ── Cuerpo ────────────────────────────────────────────────────── */}
        <section className="bg-surface py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">

            {/* ── Info lateral ── */}
            <div className="flex flex-col gap-10">

              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-0.5 bg-lima" />
                  <span className="text-xs font-semibold text-muted tracking-widest uppercase">
                    Canales de contacto
                  </span>
                </div>
                <div className="flex flex-col gap-5">

                  {/* Email */}
                  <a
                    href="mailto:contacto@grupoiwaiconsultores.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-dark flex items-center justify-center flex-shrink-0 group-hover:bg-lima transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-dark transition-colors">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-0.5">Email</p>
                      <p className="text-dark font-medium text-sm group-hover:text-lima transition-colors">
                        contacto@grupoiwaiconsultores.com
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/573008536287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-dark flex items-center justify-center flex-shrink-0 group-hover:bg-lima transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-dark transition-colors">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-0.5">WhatsApp</p>
                      <p className="text-dark font-medium text-sm group-hover:text-lima transition-colors">
                        Escríbenos directamente
                      </p>
                    </div>
                  </a>

                </div>
              </div>

              {/* Separador */}
              <div className="h-px bg-black/8" />

              {/* Presencia */}
              <div>
                <p className="text-xs font-semibold text-muted tracking-widest uppercase mb-5">
                  Presencia
                </p>
                <div className="flex gap-4">
                  {[
                    { bandera: "/colombia.webp", pais: "Colombia", ciudad: "Bogotá" },
                    { bandera: "/argentina.webp", pais: "Argentina", ciudad: "Buenos Aires" },
                  ].map((loc) => (
                    <div
                      key={loc.pais}
                      className="flex items-center gap-3 bg-white border border-black/5 rounded-2xl px-5 py-4"
                    >
                      <Image src={loc.bandera} alt={loc.pais} width={32} height={22} className="rounded-sm object-cover" />
                      <div>
                        <p className="text-dark font-bold text-xs">{loc.pais}</p>
                        <p className="text-muted text-xs">{loc.ciudad}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Redes */}
              <div>
                <p className="text-xs font-semibold text-muted tracking-widest uppercase mb-4">
                  Redes sociales
                </p>
                <div className="flex gap-3">
                  {[
                    {
                      nombre: "LinkedIn",
                      href: "https://www.linkedin.com/company/grupo-iwai-consultores/",
                      icono: (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      ),
                    },
                    {
                      nombre: "Instagram",
                      href: "#",
                      icono: (
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                        </svg>
                      ),
                    },
                  ].map((red) => (
                    <a
                      key={red.nombre}
                      href={red.href}
                      className="flex items-center gap-2 text-muted hover:text-dark bg-white border border-black/5 hover:border-dark/20 rounded-xl px-4 py-2.5 text-xs font-semibold transition-colors"
                    >
                      {red.icono}
                      {red.nombre}
                    </a>
                  ))}
                </div>
              </div>

            </div>

            {/* ── Formulario ── */}
            <div className="bg-white border border-black/5 rounded-3xl p-8 md:p-10">
              {enviado ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="w-14 h-14 rounded-full bg-lima flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0F0F0F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-dark">¡Mensaje recibido!</h3>
                  <p className="text-muted text-sm max-w-xs leading-relaxed">
                    Gracias por escribirnos. Te responderemos dentro de las próximas 24 horas hábiles.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div>
                    <p className="text-xs font-semibold text-muted tracking-widest uppercase mb-1">
                      Formulario de contacto
                    </p>
                    <h2 className="text-2xl font-bold text-dark">Cuéntanos tu desafío</h2>
                  </div>

                  {/* Nombre + Organización */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-dark/60 uppercase tracking-widest">
                        Nombre
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Tu nombre"
                        className="bg-surface border border-black/8 rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/50 focus:outline-none focus:border-dark transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-dark/60 uppercase tracking-widest">
                        Organización
                      </label>
                      <input
                        type="text"
                        placeholder="Empresa / Entidad"
                        className="bg-surface border border-black/8 rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/50 focus:outline-none focus:border-dark transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-dark/60 uppercase tracking-widest">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="correo@ejemplo.com"
                      className="bg-surface border border-black/8 rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/50 focus:outline-none focus:border-dark transition-colors"
                    />
                  </div>

                  {/* Motivo */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-dark/60 uppercase tracking-widest">
                      Línea de interés
                    </label>
                    <select
                      defaultValue=""
                      className="bg-surface border border-black/8 rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:border-dark transition-colors appearance-none"
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      {motivos.map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>

                  {/* Mensaje */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-dark/60 uppercase tracking-widest">
                      Mensaje
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Describe brevemente el desafío u oportunidad que quieres abordar..."
                      className="bg-surface border border-black/8 rounded-xl px-4 py-3 text-sm text-dark placeholder:text-muted/50 focus:outline-none focus:border-dark transition-colors resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 bg-dark text-white font-bold text-sm px-6 py-4 rounded-full hover:bg-dark/80 transition-colors disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        ENVIAR MENSAJE
                        <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 8L8 2M8 2H3M8 2v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
