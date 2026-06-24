import type { Metadata } from "next";
import { BranchFinder } from "@/components/BranchFinder";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sucursales",
  description:
    "Encuentra sucursales Alexander Coffee en La Paz y Santa Cruz con dirección, teléfono, mapa y filtros por ciudad.",
  alternates: {
    canonical: "/sucursales"
  },
  openGraph: {
    title: "Sucursales | Alexander Coffee",
    url: "/sucursales"
  }
};

const heroImage =
  "https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1900&q=80";

export default function BranchesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sucursales"
        title="Tu mesa te espera, estés donde estés."
        image={heroImage}
        minHeight="58vh"
      />

      <section className="section navy-section tight">
        <div className="section-inner">
          <BranchFinder />
        </div>
      </section>
    </>
  );
}
