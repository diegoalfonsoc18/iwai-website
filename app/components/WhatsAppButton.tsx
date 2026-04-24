// Reemplaza el número con el de IWAI (formato internacional sin + ni espacios)
const WHATSAPP_NUMBER = "573001234567";
const WHATSAPP_MESSAGE = "Hola, me gustaría agendar una consulta con Grupo IWAI.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip */}
      <span className="hidden group-hover:flex items-center bg-dark text-white text-xs font-semibold px-3 py-2 rounded-full shadow-lg whitespace-nowrap">
        Escríbenos por WhatsApp
      </span>

      {/* Botón */}
      <div className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path
            d="M14 2C7.373 2 2 7.373 2 14c0 2.136.556 4.143 1.528 5.882L2 26l4.284-1.495A11.946 11.946 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z"
            fill="white"
          />
          <path
            d="M20.5 17.5c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.24-.24-.59-.49-.51-.68-.52h-.58c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46s1.06 2.85 1.2 3.05c.15.2 2.08 3.18 5.04 4.46.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.11.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
            fill="#25D366"
          />
        </svg>
      </div>
    </a>
  );
}
