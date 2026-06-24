type PageHeroProps = {
  eyebrow: string;
  title: string;
  body?: string;
  image?: string;
  minHeight?: string;
};

export function PageHero({ eyebrow, title, body, image, minHeight }: PageHeroProps) {
  const backgroundImage = image ? `url("${image}")` : undefined;

  return (
    <section className="page-hero" style={{ backgroundImage, minHeight }}>
      <div className="hero-zoom" aria-hidden />
      <div className="page-hero-inner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {body ? <p>{body}</p> : null}
      </div>
    </section>
  );
}
