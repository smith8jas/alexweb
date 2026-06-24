import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Alexander Coffee: oficina en Miraflores, teléfono, correo, formulario y enlaces a sucursales.",
  alternates: {
    canonical: "/contacto"
  },
  openGraph: {
    title: "Contacto | Alexander Coffee",
    url: "/contacto"
  }
};

const heroImage =
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1900&q=80";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos de café."
        image={heroImage}
        minHeight="54vh"
      />

      <section className="section">
        <div className="section-inner contact-grid">
          <div className="section-copy">
            <h2>En Alexander nos gusta escuchar a nuestros amigos.</h2>
            <div className="contact-list">
              <div>
                <p className="contact-kicker">Dirección</p>
                <span>{site.office}</span>
              </div>
              <div>
                <p className="contact-kicker">Teléfono</p>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              </div>
              <div>
                <p className="contact-kicker">Email</p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
              <div>
                <p className="contact-kicker">Síguenos</p>
                <div className="social-row">
                  <a href={site.social.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                  <a href={site.social.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a href={site.social.youtube} target="_blank" rel="noreferrer">
                    YouTube
                  </a>
                </div>
              </div>
              <Link className="button dark" href="/sucursales">
                Ver sucursales
              </Link>
            </div>
          </div>

          <form className="form-panel" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <div className="form-grid">
              <label className="field">
                <span>Nombre</span>
                <input name="nombre" placeholder="Tu nombre" autoComplete="name" required />
              </label>
              <label className="field">
                <span>Email</span>
                <input name="email" type="email" placeholder="tu@email.com" autoComplete="email" required />
              </label>
              <label className="field full">
                <span>Asunto</span>
                <input name="asunto" placeholder="¿Cómo podemos ayudarte?" />
              </label>
              <label className="field full">
                <span>Mensaje</span>
                <textarea name="mensaje" placeholder="Cuéntanos..." required />
              </label>
            </div>
            <button className="button dark" type="submit">
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
