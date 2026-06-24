import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { stats, storyTimeline, values } from "@/data";

export const metadata: Metadata = {
  title: "Nuestra Historia",
  description:
    "La historia de Alexander Coffee: primera tienda en San Miguel en 1996, crecimiento con clientes, familias, equipo humano y valores.",
  alternates: {
    canonical: "/nuestra-historia"
  },
  openGraph: {
    title: "Nuestra Historia | Alexander Coffee",
    url: "/nuestra-historia"
  }
};

const heroImage =
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1900&q=80";
const storyImage =
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1300&q=80";

export default function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestra historia"
        title="Más que una cafetería."
        image={heroImage}
      />

      <section className="section">
        <div className="section-inner split">
          <div className="media-frame story-media" style={{ backgroundImage: `url("${storyImage}")` }} />
          <div className="section-copy">
            <h2 className="story-quote">
              Iniciamos nuestra historia como clientes en busca de una buena taza
              de café.
            </h2>
            <p>
              La primera tienda abrió en San Miguel, La Paz. Lo que empezó como
              una búsqueda por buen café se transformó en una red de espacios
              para desayunar, trabajar, reunirse y celebrar.
            </p>
            <p>
              La magia de Alexander Coffee no la atraía sólo el café, sino las
              personas amigas y familiares que nos acompañan.
            </p>
            <div className="pill-list">
              {storyTimeline.map((item) => (
                <span className="pill" key={item.year}>
                  {item.year}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="section-inner">
          <div className="section-header center">
            <p className="eyebrow">Nuestra filosofía</p>
            <h2>Misión, visión y valores.</h2>
          </div>

          <div className="mission-grid">
            <article className="value-card">
              <h3>Misión</h3>
              <p>Ofrecer excelente servicio, productos de alta calidad y el mejor equipo humano.</p>
            </article>
            <article className="value-card" style={{ background: "#16335f" }}>
              <h3 style={{ color: "#fbf6e7" }}>Visión</h3>
              <p style={{ color: "#d4ddec" }}>
                Liderar en el negocio del café con productos y servicios que
                satisfacen expectativas.
              </p>
            </article>
          </div>
          <article className="values-band">
            <div className="eyebrow">Nuestros valores</div>
            <div className="pill-list">
              {values.map((value) => (
                <span className="pill" key={value}>
                  {value}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="section navy-section">
        <div className="section-inner">
          <div className="section-header center">
            <p className="eyebrow">Nuestra promesa</p>
            <h2 style={{ color: "#fbf6e7" }}>
              Hemos crecido por la confianza que tenemos en Bolivia y gracias al
              cariño de su gente.
            </h2>
            <p>La familia Alexander Coffee</p>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <article className="stat-card" key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>Parte de la historia que seguimos construyendo.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
