import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { products } from "@/data";

export const metadata: Metadata = {
  title: "Merchandising",
  description:
    "Café Caranavi, Café Madidi, cafeteras, accesorios e infusores de Alexander Coffee con origen, formato y detalles de uso.",
  alternates: {
    canonical: "/merchandising"
  },
  openGraph: {
    title: "Merchandising | Alexander Coffee",
    url: "/merchandising"
  }
};

const heroImage = "/images/products-coffee.png";
const productImages = [
  "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=700&q=80",
  "/images/products-coffee.png",
  "/images/hero-cafe.png",
  "/images/origin-coffee.png",
  "/images/menu-table.png"
];

export default function MerchandisingPage() {
  return (
    <>
      <PageHero
        eyebrow="Merchandising"
        title="Café y accesorios para preparar tu pausa."
        image={heroImage}
      />

      <section className="section alt">
        <div className="section-inner">
          <div className="section-header center">
            <p className="eyebrow">{products.length} productos</p>
            <h2>Una vitrina simple para comprar o consultar.</h2>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <div
                  className="product-card-visual"
                  style={{ backgroundImage: `url("${productImages[index % productImages.length]}")` }}
                />
                <span className="badge">{product.badge}</span>
                <h3>{product.name}</h3>
                <p>{product.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
