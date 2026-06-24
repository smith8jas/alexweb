"use client";

import { useMemo, useState } from "react";
import { menuCategories } from "@/data";
import type { MenuItem } from "@/data/types";

const imagePool = [
  "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=500&q=80",
];

function itemImage(categoryIndex: number, itemIndex: number) {
  return imagePool[(categoryIndex * 2 + itemIndex) % imagePool.length];
}

type ActiveDish = MenuItem & {
  category: string;
  image: string;
};

export function MenuExplorer() {
  const [category, setCategory] = useState("todo");
  const [dish, setDish] = useState<ActiveDish | null>(null);

  const visibleCategories = useMemo(
    () => menuCategories.filter((item) => category === "todo" || item.id === category),
    [category]
  );

  return (
    <>
      <div className="filters" aria-label="Filtros de menú">
        <div className="menu-pills">
          <button
            className={`menu-pill ${category === "todo" ? "active" : ""}`}
            type="button"
            aria-pressed={category === "todo"}
            onClick={() => setCategory("todo")}
          >
            Menú Completo
          </button>
          {menuCategories.map((item) => (
            <button
              className={`menu-pill ${category === item.id ? "active" : ""}`}
              type="button"
              aria-pressed={category === item.id}
              key={item.id}
              onClick={() => setCategory(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-results">
        {visibleCategories.map((item, categoryIndex) => (
          <section className="menu-result-section" id={item.id} key={item.id}>
            <h2>{item.label}</h2>
            <div className="menu-divider" />
            {item.items.map((menuItem, itemIndex) => {
              const image = itemImage(categoryIndex, itemIndex);

              return (
                <button
                  className="menu-row"
                  key={`${item.id}-${menuItem.name}`}
                  type="button"
                  onClick={() => setDish({ ...menuItem, category: item.label, image })}
                >
                  <span
                    className="menu-thumb"
                    style={{ backgroundImage: `url("${image}")` }}
                    aria-hidden
                  />
                  <span>
                    <h3>{menuItem.name}</h3>
                    <p>{menuItem.tags.join(" · ") || menuItem.description}</p>
                  </span>
                  <span className="menu-arrow" aria-hidden>
                    →
                  </span>
                </button>
              );
            })}
          </section>
        ))}
      </div>

      {dish ? (
        <div className="dish-overlay" role="presentation" onClick={() => setDish(null)}>
          <div
            className="dish-modal"
            role="dialog"
            aria-modal="true"
            aria-label={dish.name}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="dish-photo" style={{ backgroundImage: `url("${dish.image}")` }}>
              <button className="modal-close" type="button" onClick={() => setDish(null)}>
                x
              </button>
            </div>
            <div className="dish-body">
              <h2>{dish.name}</h2>
              <div className="meta-line">{dish.category} · {dish.tags.join(" · ")}</div>
              <p>{dish.description}</p>
              <button className="button outline" type="button" onClick={() => setDish(null)}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
