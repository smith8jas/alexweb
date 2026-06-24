import type { Metadata } from "next";
import Link from "next/link";
import { getIcon } from "@/components/iconMap";
import { PageHero } from "@/components/PageHero";
import { eventHistory, services } from "@/data";

export const metadata: Metadata = {
  title: "Servicios y Catering",
  description:
    "Catering Alexander Coffee, café para oficinas, hogares, restaurantes y hoteles, pedidos a casa u oficina y eventos especiales.",
  alternates: {
    canonical: "/servicios"
  },
  openGraph: {
    title: "Servicios y Catering | Alexander Coffee",
    url: "/servicios"
  }
};

const heroImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1900&q=80";
const eventImage =
  "https://images.unsplash.com/photo-1530062845289-9109b2c9c868?auto=format&fit=crop&w=1300&q=80";
const serviceImages = [
  "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=900&q=80"
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Alexander en tus momentos especiales."
        image={heroImage}
      />

      <section className="section">
        <div className="section-inner">
          <div className="section-header center">
            <p>
              Queremos ofrecerte el mejor servicio de catering para que tus
              momentos sean inolvidables y especiales. Contáctanos: estamos
              listos para servirte.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon);

              return (
                <article className="service-card" key={service.title}>
                  <div
                    className="service-card-image"
                    style={{ backgroundImage: `url("${serviceImages[index]}")` }}
                  />
                  <div className="service-card-body">
                    <div className="service-heading">
                      <span className="service-icon">
                        <Icon size={22} aria-hidden />
                      </span>
                      <h3>{service.title}</h3>
                    </div>
                    <p>{service.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section navy-section">
        <div className="section-inner split">
          <div className="section-copy">
            <p className="eyebrow">Algunos de nuestros eventos</p>
            <h2 style={{ color: "#fbf6e7" }}>
              Damos lo mejor para representar a nuestros clientes.
            </h2>
            <p style={{ color: "#9fb2d0" }}>
              Siempre buscamos la mejor solución para atender a sus asistentes,
              con el servicio y la calidad que caracteriza a Alexander Coffee.
            </p>
            <ul className="events-list">
              {eventHistory.map((event) => (
                <li key={event}>{event}</li>
              ))}
            </ul>
          </div>
          <div className="media-frame" style={{ backgroundImage: `url("${eventImage}")` }} />
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-header center">
            <h2>Siempre estaremos complacidos de atenderle.</h2>
            <div className="section-actions" style={{ justifyContent: "center" }}>
              <Link className="button dark" href="/contacto">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
