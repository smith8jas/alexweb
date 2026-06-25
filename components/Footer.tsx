import Link from "next/link";
import { branches, site } from "@/data";
import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  const cities = Array.from(new Set(branches.map((branch) => branch.city)));

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/design/logo.png" alt="Alexander Coffee" />
            <p>
              Más que una cafetería: un lugar donde los momentos se vuelven únicos
              junto a amigos y familia. Desde 1996.
            </p>
            <SocialLinks />
          </div>

          <div>
            <h3>Explora</h3>
            <div className="footer-list">
              <Link href="/menu">Menú</Link>
              <Link href="/cafe-de-origen">Café de Origen</Link>
              <Link href="/nuestra-historia">Nosotros</Link>
            </div>
          </div>

          <div>
            <h3>Visítanos</h3>
            <div className="footer-list">
              {cities.map((city) => (
                <Link key={city} href={`/sucursales#${city.toLowerCase().replace(/\s/g, "-")}`}>
                  {city}
                </Link>
              ))}
              <span>{site.hours}</span>
            </div>
          </div>

          <address>
            <h3>Contacto</h3>
            <div className="footer-list">
              <span>{site.office}</span>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </address>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Alexander Coffee. Todos los derechos reservados.</span>
          <span>Privacidad · Términos</span>
        </div>
      </div>
    </footer>
  );
}
