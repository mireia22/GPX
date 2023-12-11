import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
const markers = [
  {
    geocode: [42.2032, 1.34],
    popUp: "Figols",
    // popUp: ["Start", "Finish"],
  },
  {
    geocode: [42.1732, 1.31651],
    popUp: "Coll de Nargó",

    // popUp: ["Start", "Finish"],
  },
];

const App = () => {
  const [trackData, setTrackData] = useState(null);

  return (
    <div>
      <MapContainer center={[42.2167, 1.3333]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <TileLayer
          attribution="Steam WaterColor"
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        /> */}

        {markers.map((marker) => (
          <Marker position={marker.geocode}></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default App;
