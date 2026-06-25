import { site } from "@/data";

export function ContactForm() {
  return (
    <form
      className="form-panel"
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
    >
      <div className="form-grid">
        <label className="field">
          <span>Nombre</span>
          <input name="nombre" placeholder="Tu nombre" autoComplete="name" required />
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
          <input name="asunto" placeholder="¿Cómo podemos ayudarte?" />
        </label>
        <label className="field full">
          <span>Mensaje</span>
          <textarea name="mensaje" placeholder="Cuéntanos..." required />
        </label>
      </div>
      <button className="button primary" type="submit">
        Enviar mensaje
      </button>
    </form>
  );
}
