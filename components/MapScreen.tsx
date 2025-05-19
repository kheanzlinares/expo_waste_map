import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import React, { useEffect, useRef, useState } from "react";
import wasteData from "../data/mockData";
import FilterPanel from "./FilterPanel";

export default function MapScreen() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [showPaper, setShowPaper] = useState(true);
  const [showGlass, setShowGlass] = useState(true);

  useEffect(() => {
    if (!mapContainer.current) return;
    mapRef.current = new maplibregl.Map({
      container: mapContainer.current,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=5N49Er4fDCjwggmOCPDp",
      center: [4.8942, 52.4007],
      zoom: 15,
    });

    mapRef.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    
    return () => mapRef.current?.remove();
  }, []);

  useEffect(() => {
    if (!mapRef.current) return;

    // Remove old markers
    document.querySelectorAll(".map-marker").forEach((m) => m.remove());

    wasteData.Assets.forEach((asset) => {
      if (
        (asset.AssetType === "PaperGarbage" && showPaper) ||
        (asset.AssetType === "GlassGarbage" && showGlass)
      ) {
        const el = document.createElement("img");
        el.className = "map-marker";
        el.src =
          asset.AssetType === "PaperGarbage" ? "/paper.png" : "/glass.png";
        el.width = 32;
        el.height = 32;
        el.style.border = `2px solid ${
          asset.AssetType === "PaperGarbage" ? "red" : "blue"
        }`;
        el.style.borderRadius = "50%";

        new maplibregl.Marker({ element: el })
          .setLngLat([asset.Longitude, asset.Latitude])
          .addTo(mapRef.current!);
      }
    });
  }, [showPaper, showGlass]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <FilterPanel
        showPaper={showPaper}
        setShowPaper={setShowPaper}
        showGlass={showGlass}
        setShowGlass={setShowGlass}
      />
      <div ref={mapContainer} style={{ flex: 1 }} />
    </div>
  );
}
