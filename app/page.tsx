import type { Metadata } from 'next';
import Link from 'next/link';
import { branches, menuCategories, site } from '@/data';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Alexander Coffee',
    url: '/',
  },
};

const img = (id: string, width = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`;

const heroImage = img('1572442388796-11668a67e53d', 2100);
const aboutImage = img('1495474472287-4d71bcdd2085', 1200);
const menuBandImage = img('1555507036-ab1f4038808a', 1900);
const productImages = [
  img('1541167760496-1628856ab772', 900),
  img('1572442388796-11668a67e53d', 900),
  img('1461023058943-07fcbe16d735', 900),
  img('1555507036-ab1f4038808a', 900),
  img('1567620905732-2d1ec7ab7445', 900),
  img('1539252554453-80ab65ce3586', 900),
];

const gallery = [
  img('1453614512568-c4024d13c247', 900),
  img('1554118811-1e0d58224f24', 900),
  img('1495474472287-4d71bcdd2085', 900),
  img('1521017432531-fbd92d768814', 900),
  img('1559925393-8be0ec4767c8', 900),
];

const favorites = menuCategories
  .flatMap((category) =>
    category.items.slice(0, category.id === 'cafes' ? 3 : 1).map((item) => ({
      ...item,
      category: category.label,
    })),
  )
  .slice(0, 6);

const testimonials = [
  {
    title: 'Muy buena comida y muy buenas bebidas',
    body: 'La mejor comida que encontramos en Bolivia. La atención muy rápida, fueron muy amables y trataron que todo sea perfecto. Lo súper recomiendo.',
    who: 'Pamela P.',
    src: 'TripAdvisor',
  },
  {
    title: 'Rápido, sabroso y buen precio',
    body: 'Una opción perfecta para comer algo rápido, tomar un excelente café, hablar de negocios o estar con amigos. Los fines de semana incluso hay buena música en vivo.',
    who: 'Talberto',
    src: 'TripAdvisor',
  },
  {
    title: '¡Más que un café!',
    body: 'Realmente es como un restaurante: el menú es muy amplio y hay muchas opciones. Buenas raciones y preparación rápida. ¡Lo recomiendo!',
    who: 'Alvaro P.',
    src: 'TripAdvisor',
  },
  {
    title: 'Un oasis',
    body: 'Café con buenos precios. Sin dudas la mejor opción para pasar el tiempo antes del vuelo en el aeropuerto.',
    who: 'Jeronimo M.',
    src: 'TripAdvisor',
  },
  {
    title: 'Café como en casa',
    body: 'Me gustó mucho el ambiente y la comida, tiene mucha similitud con lo hecho en casa. Limpio y con precios accesibles.',
    who: 'Raisha E.',
    src: 'TripAdvisor',
  },
  {
    title: 'Muy ameno',
    body: 'La atención es excelente, tienen muchas cosas ricas para probar y, sobre todo, un buen café. Mi preferido es el espresso con huminta.',
    who: 'Carolina V.',
    src: 'TripAdvisor',
  },
];

export default function Home() {
  return (
    <>
      <section
        className="home-hero"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div
          className="hero-zoom"
          aria-hidden
        />
        <div
          className="sunburst"
          aria-hidden
        />
        <div className="hero-inner">
          <h1 className="hero-title">
            <span className="hero-line">Un buen café</span>
            <br />
            <span className="hero-line">
              nos <em>une.</em>
            </span>
          </h1>
        </div>
      </section>

      <section className="section home-story-section">
        <div className="section-inner split home-story">
          <div
            className="media-frame home-story-media"
            style={{ backgroundImage: `url("${aboutImage}")` }}
          />
          <div className="section-copy home-story-copy">
            <p className="eyebrow">Nuestra historia</p>
            <h2>Más que una cafetería.</h2>
            <p className="lead-script">
              Iniciamos nuestra historia como clientes en busca de una buena
              taza de café...
            </p>
            <p>
              En 1996 abrimos nuestro primer local en San Miguel, La Paz.
              Descubrimos que la magia de Alexander Coffee no la atraía sólo el
              café, sino las personas que nos acompañan.
            </p>
            <div className="section-actions">
              <Link
                className="button dark"
                href="/nuestra-historia"
              >
                Conoce nuestra historia →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="scroll-section">
        <div className="section-inner">
          <div className="scroll-heading">
            <div>
              <p className="eyebrow">Lo más pedido</p>
              <h2>Favoritos de la casa.</h2>
            </div>
            <span className="scroll-hint">Desliza para ver más →</span>
          </div>
        </div>
        <div className="product-scroll">
          {favorites.map((item, index) => (
            <Link
              className="featured-card"
              href="/menu"
              key={`${item.category}-${item.name}`}
            >
              <div
                className="featured-image"
                style={{ backgroundImage: `url("${productImages[index]}")` }}
              >
                <span className="featured-tag">{item.category}</span>
              </div>
              <div className="featured-body">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section
        className="band-hero"
        style={{ backgroundImage: `url("${menuBandImage}")` }}
      >
        <div
          className="hero-zoom"
          aria-hidden
        />
        <div className="section-inner">
          <div>
            <p className="eyebrow">Nuestro menú</p>
            <h2>A cualquier hora del día.</h2>
            <p>
              La amplia variedad de nuestro menú nos permite recibirte a
              cualquier hora: cafés de especialidad, desayunos, pastelería,
              sándwiches y mucho más.
            </p>
            <div className="section-actions">
              <Link
                className="button primary"
                href="/menu"
              >
                Ver el menú
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience-section">
        <div className="section-inner">
          <div className="section-header center experience-header">
            <p className="eyebrow">Nuestra experiencia</p>
            <h2>Momentos únicos, junto a amigos y familia.</h2>
            <p>
              Más que un café: el lugar donde puedes experimentar momentos
              únicos. Esto dicen quienes nos visitan.
            </p>
          </div>

          <div className="gallery-grid experience-gallery">
            {gallery.map((url, index) => (
              <div
                className={`gallery-item ${index === 0 ? 'large' : ''}`}
                key={url}
                style={{ backgroundImage: `url("${url}")` }}
              />
            ))}
          </div>

          <div className="testimonial-grid experience-testimonials">
            {testimonials.map((testimonial) => (
              <article
                className="testimonial-card"
                key={testimonial.title}
              >
                <div
                  className="stars"
                  aria-hidden
                >
                  ★★★★★
                </div>
                <h3>{testimonial.title}</h3>
                <p>{testimonial.body}</p>
                <div className="testimonial-meta">
                  <strong>{testimonial.who}</strong>
                  <span>{testimonial.src}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner contact-grid">
          <div className="section-copy">
            <p className="eyebrow">Contáctanos</p>
            <h2>En Alexander nos gusta escuchar a nuestros amigos.</h2>
            <p>
              Escríbenos y cuéntanos cómo podemos ayudarte. Estaremos
              complacidos de atenderte.
            </p>
            <div className="contact-list">
              <div>
                <p className="contact-kicker">Dirección</p>
                <span>{site.office}</span>
              </div>
              <div>
                <p className="contact-kicker">Teléfono</p>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>
                  {site.phone}
                </a>
              </div>
              <div>
                <p className="contact-kicker">Sucursales</p>
                <span>{branches.length} en La Paz y Santa Cruz</span>
              </div>
            </div>
          </div>

          <form
            className="form-panel"
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <div className="form-grid">
              <label className="field">
                <span>Nombre</span>
                <input
                  name="nombre"
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  autoComplete="email"
                  required
                />
              </label>
              <label className="field full">
                <span>Asunto</span>
                <input
                  name="asunto"
                  placeholder="¿Cómo podemos ayudarte?"
                />
              </label>
              <label className="field full">
                <span>Mensaje</span>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos..."
                  required
                />
              </label>
            </div>
            <button
              className="button dark"
              type="submit"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
