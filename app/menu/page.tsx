import type { Metadata } from "next";
import { MenuExplorer } from "@/components/MenuExplorer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Menú",
  description:
    "Explora el menú de Alexander Coffee: café, desayunos, pastelería, tortas, sándwiches, ensaladas, mexicanas y Alexander Fit.",
  alternates: {
    canonical: "/menu"
  },
  openGraph: {
    title: "Menú | Alexander Coffee",
    url: "/menu"
  }
};

const menuHero =
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1900&q=80";

export default function MenuPage() {
  return (
    <>
      <PageHero eyebrow="Nuestra carta" title="Para cada momento del día." image={menuHero} />

      <section className="menu-section">
        <div className="menu-shell">
          <MenuExplorer />
          <p className="eyebrow menu-note">
            Pregunta por nuestras especialidades de temporada en cualquier sucursal.
          </p>
        </div>
      </section>
    </>
  );
}
