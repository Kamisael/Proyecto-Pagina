import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MapContainer() {
  useEffect(() => {
    // crea un nuevo mapa Leaflet en el elemento de DOM con el id "map"
    const map = L.map("map").setView([7.067, -73.867], 13);

    // añade una capa de mapa base de OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    const characterIcon = L.icon({
      iconUrl:
        "https://cdn.pixabay.com/photo/2014/04/03/09/59/motorcycle-309527_1280.png", // URL de la imagen del personaje
      iconSize: [60, 40], // tamaño del icono en píxeles
      iconAnchor: [25, 50], // punto de anclaje del icono (centro inferior)
    });

    // agrega el marcador del personaje al mapa
    L.marker([7.067, -73.867], { icon: characterIcon }).addTo(map);
  }, []);

  return <div id='map' style={{ width: "100%", height: "100vh" }}></div>;
}

export default MapContainer;
