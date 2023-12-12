import React, { useEffect, useState } from "react";
import { Circle, MapContainer, Polyline, TileLayer } from "react-leaflet";

const Map = ({ points }) => {
  const [center, setCenter] = useState([42.2167, 1.3333]);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    if (points && points.length > 0) {
      setCenter(points[0]);
      setZoom(12);
    } else {
      setCenter([42.2167, 1.3333]);
      setZoom(8);
    }
  }, [points]);

  return (
    <MapContainer center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {points && points.length > 0 && (
        <>
          <Circle
            center={points[0]}
            pathOptions={{ fillColor: "green" }}
            radius={120}
          />
          <Polyline pathOptions={{ color: "blue" }} positions={points} />
          <Circle
            center={points[points.length - 1]}
            pathOptions={{ fillColor: "red" }}
            radius={120}
          />
        </>
      )}
    </MapContainer>
  );
};

export default Map;
