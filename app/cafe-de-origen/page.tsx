import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { originCards, products } from '@/data';

export const metadata: Metadata = {
  title: 'Café de Origen',
  description:
    'Café boliviano de origen Caranavi y Madidi: compra directa, sostenibilidad, calidad, productores y productos en grano o molidos.',
  alternates: {
    canonical: '/cafe-de-origen',
  },
  openGraph: {
    title: 'Café de Origen | Alexander Coffee',
    url: '/cafe-de-origen',
  },
};

const heroImage =
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1900&q=80';
const beansImage =
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1300&q=80';
const productImages = [
  'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=700&q=80',
];

export default function OriginPage() {
  return (
    <>
      <PageHero
        eyebrow="Café de origen"
        title="De Caranavi y Madidi, directo a tu taza."
        image={heroImage}
        minHeight="64vh"
      />

      <section className="section">
        <div className="section-inner split">
          <div className="section-copy">
            <h2>Café orgánico, cultivado bajo sombra.</h2>
            <p>
              Para encontrar el mejor café posible, llegamos a su origen.
              Trabajamos directamente con familias productoras de Caranavi y
              Madidi, cuidando calidad, trazabilidad y compensación.
            </p>
            <div className="pill-list">
              {originCards.map((origin) => (
                <span
                  className="pill"
                  key={origin.title}
                >
                  {origin.title}
                </span>
              ))}
            </div>
          </div>
          <div
            className="media-frame"
            style={{ backgroundImage: `url("${beansImage}")` }}
          />
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-header center">
            <p className="eyebrow">Llévate Alexander a casa</p>
            <h2>Café molido y en grano.</h2>
            <p>
              Nuestro café de origen, tostado a la americana o a la europea.
              Disponible en grano o molido en nuestras sucursales.
            </p>
          </div>
          <div className="product-grid">
            {products.slice(0, 4).map((product, index) => (
              <article
                className="product-card"
                key={product.name}
              >
                <div
                  className="product-card-visual"
                  style={{ backgroundImage: `url("${productImages[index]}")` }}
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
