import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { branches, site } from "@/data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Alexander Coffee | Cafe boliviano desde 1996",
    template: "%s | Alexander Coffee"
  },
  description: site.description,
  keywords: [
    "Alexander Coffee",
    "cafe boliviano",
    "cafe La Paz",
    "cafe Santa Cruz",
    "Caranavi",
    "Madidi",
    "catering cafe"
  ],
  openGraph: {
    title: "Alexander Coffee",
    description: site.description,
    url: site.url,
    siteName: "Alexander Coffee",
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: "/images/hero-cafe.png",
        width: 1536,
        height: 864,
        alt: "Mesa de cafe en una cafeteria calida"
      }
    ]
  }
};

export const viewport: Viewport = {
  themeColor: "#0D2144",
  colorScheme: "light"
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Avenida Juan de Vargas #2370",
    addressLocality: "La Paz",
    addressCountry: "BO"
  },
  openingHours: "Mo-Su 07:45-23:00",
  servesCuisine: ["Cafe", "Desayunos", "Pasteleria", "Sandwiches", "Ensaladas"],
  department: branches.map((branch) => ({
    "@type": "CafeOrCoffeeShop",
    name: `Alexander Coffee ${branch.name}`,
    address: branch.address,
    telephone: branch.phone
  }))
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-BO">
      <body>
        <JsonLd data={localBusinessJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
