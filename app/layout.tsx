import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.grupoiwaiconsultores.com"),
  title: {
    default: "Grupo IWAI Consultores | Consultoría Organizacional en Colombia",
    template: "%s | Grupo IWAI Consultores",
  },
  description:
    "Firma de consultoría organizacional con presencia en Colombia y Argentina. Acompañamos transformaciones institucionales, relaciones laborales, gobernanza y analítica avanzada para organizaciones públicas y privadas.",
  keywords: [
    "consultoría organizacional Colombia",
    "consultoría laboral Colombia",
    "gestión del cambio organizacional",
    "relaciones laborales estratégicas",
    "consultoría empresarial Bogotá",
    "gobernanza organizacional",
    "consultoría actuarial Colombia",
    "asuntos públicos Colombia",
    "fortalecimiento institucional",
    "Grupo IWAI consultores",
  ],
  authors: [{ name: "Grupo IWAI Consultores y Asesores Especializados S.A.S." }],
  creator: "Grupo IWAI Consultores",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.grupoiwaiconsultores.com",
    siteName: "Grupo IWAI Consultores",
    title: "Grupo IWAI Consultores | Consultoría Organizacional en Colombia",
    description:
      "Firma de consultoría organizacional con presencia en Colombia y Argentina. Transformamos organizaciones desde adentro.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grupo IWAI Consultores",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo IWAI Consultores | Consultoría Organizacional",
    description:
      "Firma de consultoría organizacional con presencia en Colombia y Argentina.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://www.grupoiwaiconsultores.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
