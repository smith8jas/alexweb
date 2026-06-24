"use client";

import { useMemo, useState } from "react";
import { branches, site } from "@/data";

const cities = ["Todas", "La Paz", "Santa Cruz"] as const;

const pinPositions = [
  [31, 33],
  [39, 40],
  [47, 35],
  [54, 45],
  [62, 52],
  [70, 60],
  [24, 54],
  [74, 31],
  [82, 42],
  [34, 63],
  [66, 26],
  [78, 68],
] as const;

export function BranchFinder() {
  const [city, setCity] = useState<(typeof cities)[number]>("Todas");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredBranches = useMemo(
    () =>
      branches
        .map((branch, index) => ({ ...branch, index }))
        .filter((branch) => city === "Todas" || branch.city === city),
    [city]
  );

  const activeBranch = branches[activeIndex] ?? branches[0];

  return (
    <>
      <div className="filters branch-filters" aria-label="Filtrar sucursales por ciudad">
        <div className="filter-row">
          {cities.map((item) => (
            <button
              className={`filter-button ${city === item ? "active" : ""}`}
              type="button"
              aria-pressed={city === item}
              key={item}
              onClick={() => {
                setCity(item);
                const firstMatch = branches.findIndex((branch) => item === "Todas" || branch.city === item);
                setActiveIndex(firstMatch >= 0 ? firstMatch : 0);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="location-layout">
        <div className="map-panel" aria-label="Mapa conceptual de sucursales">
          {branches.map((branch, index) => {
            const [left, top] = pinPositions[index % pinPositions.length];
            const hidden = city !== "Todas" && branch.city !== city;

            return (
              <button
                aria-label={`Seleccionar ${branch.name}`}
                className={`map-pin ${activeIndex === index ? "active" : ""}`}
                hidden={hidden}
                key={`${branch.city}-${branch.name}`}
                style={{ left: `${left}%`, top: `${top}%` }}
                type="button"
                onClick={() => setActiveIndex(index)}
              />
            );
          })}
          <div className="map-label">
            <p className="eyebrow">La Paz + Santa Cruz</p>
            <h2>{activeBranch.name}</h2>
            <p>{activeBranch.address}</p>
            <p>{site.hours}. Aeropuerto puede tener horarios especiales.</p>
          </div>
        </div>

        <aside className="branch-side" aria-label="Listado de sucursales">
          <div className="branch-list">
            {filteredBranches.map((branch) => {
              const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `Alexander Coffee ${branch.address}`
              )}`;
              const phoneHref = `tel:${branch.phone.replace(/[^\d+]/g, "")}`;

              return (
                <article
                  className={`branch-card ${activeIndex === branch.index ? "active" : ""}`}
                  key={`${branch.city}-${branch.name}`}
                  onClick={() => setActiveIndex(branch.index)}
                >
                  <div className="branch-card-top">
                    <span className="eyebrow">{branch.city}</span>
                    <span>{branch.phone}</span>
                  </div>
                  <h3>{branch.name}</h3>
                  <p>{branch.address}</p>
                  <div className="pill-list">
                    {branch.tags.slice(0, 2).map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="branch-actions">
                    <a href={mapUrl} target="_blank" rel="noreferrer">
                      Ver en mapa
                    </a>
                    <a href={phoneHref}>Llamar</a>
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </div>
    </>
  );
}
