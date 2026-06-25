"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Map as LeafletMap, Marker } from "leaflet";
import { branches } from "@/data";

const cities = ["Todas", "La Paz", "Santa Cruz"] as const;

function markerSvg(active: boolean) {
  const fill = active ? "#16335f" : "#ef8a2c";
  const ring = active ? "#f0d27a" : "#fbf6e7";
  const dot = active ? "#f0d27a" : "#16335f";
  return `
    <svg width="${active ? 40 : 32}" height="${active ? 52 : 42}" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 1C8.27 1 2 7.27 2 15c0 9.5 12 24.5 13.04 25.78a1.23 1.23 0 0 0 1.92 0C18 39.5 30 24.5 30 15 30 7.27 23.73 1 16 1z"
        fill="${fill}" stroke="${ring}" stroke-width="2"/>
      <circle cx="16" cy="15" r="5" fill="${dot}"/>
    </svg>`;
}

export function BranchFinder() {
  const [city, setCity] = useState<(typeof cities)[number]>("Todas");
  const [activeIndex, setActiveIndex] = useState(0);

  const mapNodeRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const LRef = useRef<typeof import("leaflet") | null>(null);
  const resizeObsRef = useRef<ResizeObserver | null>(null);

  const filteredBranches = useMemo(
    () =>
      branches
        .map((branch, index) => ({ ...branch, index }))
        .filter((branch) => city === "Todas" || branch.city === city),
    [city]
  );

  // Initialise the Leaflet map once.
  useEffect(() => {
    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || !mapNodeRef.current || mapRef.current) return;
      LRef.current = L;

      const map = L.map(mapNodeRef.current, {
        center: [branches[0].lat, branches[0].lng],
        zoom: 13,
        scrollWheelZoom: false
      });
      mapRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          maxZoom: 20
        }
      ).addTo(map);

      markersRef.current = branches.map((branch, index) => {
        const marker = L.marker([branch.lat, branch.lng], {
          icon: L.divIcon({
            className: "branch-marker",
            html: markerSvg(index === 0),
            iconSize: [32, 42],
            iconAnchor: [16, 42]
          }),
          title: branch.name
        });
        marker.on("click", () => setActiveIndex(index));
        marker.addTo(map);
        return marker;
      });

      // Recompute the tile grid whenever the container gets its real size
      // (fixes the map only rendering tiles for part of its height on load).
      map.whenReady(() => map.invalidateSize());
      const ro = new ResizeObserver(() => map.invalidateSize());
      ro.observe(mapNodeRef.current);
      resizeObsRef.current = ro;
      requestAnimationFrame(() => map.invalidateSize());
    });

    return () => {
      cancelled = true;
      resizeObsRef.current?.disconnect();
      resizeObsRef.current = null;
      mapRef.current?.remove();
      mapRef.current = null;
      markersRef.current = [];
    };
  }, []);

  // Refresh marker icons + fly to the active branch.
  useEffect(() => {
    const L = LRef.current;
    const map = mapRef.current;
    if (!L || !map) return;

    markersRef.current.forEach((marker, index) => {
      const isActive = index === activeIndex;
      marker.setIcon(
        L.divIcon({
          className: "branch-marker",
          html: markerSvg(isActive),
          iconSize: isActive ? [40, 52] : [32, 42],
          iconAnchor: isActive ? [20, 52] : [16, 42]
        })
      );
      if (isActive) marker.setZIndexOffset(1000);
      else marker.setZIndexOffset(0);
    });

    const active = branches[activeIndex];
    if (active) map.flyTo([active.lat, active.lng], 14, { duration: 0.8 });
  }, [activeIndex]);

  // Show only the markers that match the active city filter.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach((marker, index) => {
      const branch = branches[index];
      const visible = city === "Todas" || branch.city === city;
      if (visible) marker.addTo(map);
      else map.removeLayer(marker);
    });
  }, [city]);

  function selectBranch(index: number) {
    setActiveIndex(index);
  }

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
                const firstMatch = branches.findIndex(
                  (branch) => item === "Todas" || branch.city === item
                );
                setActiveIndex(firstMatch >= 0 ? firstMatch : 0);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="location-layout">
        <div className="map-panel">
          <div className="map-canvas" ref={mapNodeRef} aria-label="Mapa de sucursales" />
        </div>

        <aside className="branch-side" aria-label="Listado de sucursales">
          <div className="branch-list">
            {filteredBranches.map((branch) => {
              const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `Alexander Coffee ${branch.address}`
              )}`;
              const phoneHref = `tel:${branch.phone.replace(/[^\d+]/g, "")}`;
              const isActive = activeIndex === branch.index;
              const shortAddress = branch.address
                .replace(/,?\s*(La Paz|Santa Cruz de la Sierra|Santa Cruz)\s*$/i, "")
                .replace(/\bNo\.\s*/g, "Nº ")
                .trim();

              return (
                <article
                  className={`branch-card ${isActive ? "active" : ""}`}
                  key={`${branch.city}-${branch.name}`}
                  onClick={() => selectBranch(branch.index)}
                  aria-current={isActive}
                >
                  <div className="branch-card-top">
                    <span className="eyebrow">{branch.city}</span>
                    <a
                      className="branch-phone"
                      href={phoneHref}
                      onClick={(event) => event.stopPropagation()}
                    >
                      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
                        <path d="M6.62 10.79a15.5 15.5 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24 11.4 11.4 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
                      </svg>
                      {branch.phone}
                    </a>
                  </div>
                  <h3>{branch.name}</h3>
                  <p className="branch-address">{shortAddress}</p>
                  <p className="branch-hours">
                    <span className="hours-dot" aria-hidden="true" />
                    {branch.hours}
                  </p>
                  <div className="branch-actions">
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(event) => event.stopPropagation()}
                    >
                      Ver en mapa
                    </a>
                    <a href={phoneHref} onClick={(event) => event.stopPropagation()}>
                      Llamar
                    </a>
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
