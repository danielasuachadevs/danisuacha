import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const gothamBold = localFont({
  src: "../public/fonts/4.Tipografía/Bold/GothamBold.ttf",
  variable: "--font-gotham-bold",
  weight: "700",
});

const gothamLight = localFont({
  src: "../public/fonts/4.Tipografía/Light/GothamLight.ttf",
  variable: "--font-gotham-light",
  weight: "300",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danisuacha.com"),
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
        url: "/multimedia/portada_dani.png",
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
    images: ["/multimedia/portada_dani.png"],
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

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Biodeprogramación Terapéutica | Daniela Suacha",
  "image": "https://danisuacha.com/multimedia/logo.png",
  "@id": "https://danisuacha.com",
  "url": "https://danisuacha.com",
  "telephone": "+524777657492",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "León",
    "addressRegion": "Guanajuato",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 21.1219,
    "longitude": -101.6823
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  },
  "sameAs": [
    "https://www.facebook.com/danisuacha",
    "https://www.instagram.com/danisuacha"
  ]
};

import FloatingActions from "@/components/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${gothamBold.variable} ${gothamLight.variable} ${montserrat.variable} antialiased`}
      >
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
