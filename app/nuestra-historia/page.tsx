import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { stats, values } from '@/data';

export const metadata: Metadata = {
  title: 'Nuestra Historia',
  description:
    'La historia de Alexander Coffee: primera tienda en San Miguel en 1996, crecimiento con clientes, familias, equipo humano y valores.',
  alternates: {
    canonical: '/nuestra-historia',
  },
  openGraph: {
    title: 'Nuestra Historia | Alexander Coffee',
    url: '/nuestra-historia',
  },
};

const heroImage =
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1900&q=80';
const foundingImage =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1300&q=80';
const spacesImage =
  'https://images.unsplash.com/photo-1453614512568-c4024d13c247?auto=format&fit=crop&w=1300&q=80';
const originImage =
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1300&q=80';

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra historia"
        title="Más que una cafetería."
        image={heroImage}
      />

      {/* Cómo empezó — 1996, San Miguel */}
      <section className="section">
        <div className="section-inner split">
          <div
            className="media-frame story-media"
            style={{ backgroundImage: `url("${foundingImage}")` }}
          />
          <div className="section-copy">
            <p className="eyebrow">Cómo empezó</p>
            <h2 className="story-quote">
              Iniciamos nuestra historia como clientes en busca de una buena
              taza de café.
            </h2>
            <p>
              En 1996 abrimos las puertas de nuestro primer local en la zona de
              San Miguel de la ciudad de La Paz. Con tres empleados e igual
              número de mesas, los primeros clientes fueron testigos del proceso
              de crecimiento de nuestra Marca, al degustar los cappuccinos que
              preparamos con estrictos estándares y dedicación.
            </p>
            <p>
              Observamos que la magia de Alexander Coffee no la atraía sólo el
              café, sino las personas amigas y familiares que nos acompañan.
            </p>
          </div>
        </div>
      </section>

      {/* Crecimiento — 25 años, 12 sucursales, ambientes */}
      <section className="section alt">
        <div className="section-inner split">
          <div className="section-copy">
            <p className="eyebrow">Nuestro crecimiento</p>
            <h2>Espacios cada vez más grandes y acogedores.</h2>
            <p>
              En estos casi 25 años abrimos 12 sucursales en las ciudades de La
              Paz y Santa Cruz, diseñando espacios cada vez más grandes y
              acogedores; así mismo desarrollamos nuevos productos para los
              distintos gustos, edades y estaciones.
            </p>
            <p>
              Hemos creado ambientes distintos en el que todas las generaciones
              comparten, se entretienen, trabajan y pasan momentos agradables.
            </p>
          </div>
          <div
            className="media-frame"
            style={{ backgroundImage: `url("${spacesImage}")` }}
          />
        </div>
      </section>

      {/* El origen del café — Caranavi y Madidi */}
      <section className="section">
        <div className="section-inner split">
          <div
            className="media-frame story-media"
            style={{ backgroundImage: `url("${originImage}")` }}
          />
          <div className="section-copy">
            <p className="eyebrow">El origen del café</p>
            <h2>Para encontrar el mejor café posible, llegamos a su origen.</h2>
            <p>
              Durante nuestro crecimiento y diversificación, el café siempre ha
              sido el corazón de Alexander Coffee. Trabajamos directamente con
              familias productoras de Caranavi y Madidi, que además de su alta
              calidad, beneficia a las familias productoras y al medio ambiente,
              desarrollando cada vez mayores estándares de calidad, y
              premiándoles pagando hasta tres veces más el precio del mercado.
            </p>
            <p>
              El resultado de este trabajo es un café complejo, con perfecto
              balance de aroma, consistencia y penetrante sabor.
            </p>
          </div>
        </div>
      </section>

      {/* Filosofía — misión, visión, valores */}
      <section className="section alt">
        <div className="section-inner">
          <div className="section-header center">
            <p className="eyebrow">Nuestra filosofía</p>
            <h2>Misión, visión y valores.</h2>
          </div>

          <div className="mission-grid">
            <article className="value-card">
              <h3>Misión</h3>
              <p>
                Ofrecer excelente servicio, productos de alta calidad y el mejor
                equipo humano.
              </p>
            </article>
            <article
              className="value-card"
              style={{ background: '#16335f' }}
            >
              <h3 style={{ color: '#fbf6e7' }}>Visión</h3>
              <p style={{ color: '#d4ddec' }}>
                Liderar en el negocio del café con productos y servicios que
                satisfacen expectativas.
              </p>
            </article>
          </div>
          <article className="values-band">
            <div className="eyebrow">Nuestros valores</div>
            <div className="pill-list">
              {values.map((value) => (
                <span
                  className="pill"
                  key={value}
                >
                  {value}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {/* Nuestra promesa — cierre cálido (naranja) antes del footer navy */}
      <section className="section welcome-section">
        <div className="section-inner">
          <div className="section-header center">
            <p className="eyebrow">Nuestra promesa</p>
            <h2 style={{ color: '#fff7ec' }}>
              Hemos crecido por la confianza que tenemos en Bolivia y gracias al
              cariño de su gente.
            </h2>
            <div className="section-copy promise-copy">
              <p>
                En Alexander Coffee buscamos que la concurrencia se halle en
                libertad de vivir su propia experiencia con amigos y familiares.
                Invirtiendo durante años difíciles para el país, lo seguiremos
                haciendo y nuestra historia formará parte del futuro. Lo que
                viene no sabemos, pero estamos siempre preparados para preverlo.
              </p>
              <p className="promise-closing">
                Nosotros muy agradecidos y usted siempre ¡Bienvenido!
              </p>
            </div>
            <p className="promise-signature">La familia Alexander Coffee</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <article
                className="stat-card"
                key={stat.value}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
