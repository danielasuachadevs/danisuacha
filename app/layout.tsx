import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Biodeprogramación Terapéutica | Daniela Suacha",
  description: "Descubre el origen emocional de tus síntomas físicos y bloqueos emocionales a través de la Biodeprogramación Terapéutica con Daniela Suacha. Transforma tu vida hoy.",
  keywords: ["biodeprogramación", "terapia emocional", "sanación emocional", "biodescodificación", "clínica terapéutica", "bienestar emocional", "Daniela Suacha"],
  authors: [{ name: "Daniela Suacha" }],
  creator: "BlackCherry",
  publisher: "Daniela Suacha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://danisuacha.com",
  },
  openGraph: {
    title: "Biodeprogramación Terapéutica - Daniela Suacha",
    description: "Transforma tu bienestar emocional encontrando el origen de tus conflictos. Sesiones personalizadas de Biodeprogramación.",
    url: "https://danisuacha.com",
    siteName: "Biodeprogramación Terapéutica",
    images: [
      {
        url: "/og-image.jpg", // This would need to be generated or provided
        width: 1200,
        height: 630,
        alt: "Biodeprogramación Terapéutica - Daniela Suacha",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biodeprogramación Terapéutica - Daniela Suacha",
    description: "Libera tus bloqueos emocionales y sana desde la raíz.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import FloatingActions from "@/components/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${manrope.variable} ${playfair.variable} antialiased`}
      >
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
