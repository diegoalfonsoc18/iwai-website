import Image from "next/image";

// Reemplaza con el número real de IWAI (formato internacional sin + ni espacios)
const WHATSAPP_NUMBER = "573001234567";
const WHATSAPP_MESSAGE = "Hola, me gustaría agendar una consulta con Grupo IWAI.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 pb-4">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between bg-dark/95 backdrop-blur-sm border border-white/10 rounded-2xl px-5 py-3 hover:border-lima/40 transition-all group shadow-2xl"
        >
          {/* Izquierda: logo + nombre */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-lima flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image
                src="/iwaiBlackLogo.png"
                alt="IWAI"
                width={20}
                height={20}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-white text-xs font-bold leading-none">Grupo IWAI Consultores</p>
              <p className="text-white/40 text-[10px] mt-0.5">Consultoría Organizacional</p>
            </div>
          </div>

          {/* Centro: mensaje */}
          <p className="hidden md:block text-white/50 text-xs">
            ¿Tienes un proyecto en mente? Hablemos.
          </p>

          {/* Derecha: WhatsApp CTA */}
          <div className="flex items-center gap-2.5 bg-[#25D366]/10 border border-[#25D366]/20 group-hover:bg-[#25D366]/20 transition-colors rounded-xl px-4 py-2">
            <svg width="16" height="16" viewBox="0 0 28 28" fill="none">
              <path
                d="M14 2C7.373 2 2 7.373 2 14c0 2.136.556 4.143 1.528 5.882L2 26l4.284-1.495A11.946 11.946 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z"
                fill="#25D366"
              />
              <path
                d="M20.5 17.5c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
                fill="white"
              />
            </svg>
            <span className="text-[#25D366] text-xs font-semibold whitespace-nowrap">
              Escríbenos
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
