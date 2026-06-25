import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SocialLinks } from "@/components/SocialLinks";
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
                <SocialLinks />
              </div>
              <Link className="button dark" href="/sucursales">
                Ver sucursales
              </Link>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
