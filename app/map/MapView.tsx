"use client";

import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";

export default function MapView() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://demotiles.maplibre.org/style.json",
      center: [107.8070, 11.5471], // Bảo Lộc
      zoom: 12,
    });

    new maplibregl.Marker()
      .setLngLat([107.8070, 11.5471])
      .setPopup(new maplibregl.Popup().setText("Trung tâm Bảo Lộc"))
      .addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      style={{ width: "100%", height: "calc(100vh - 80px)" }}
    />
  );
}
