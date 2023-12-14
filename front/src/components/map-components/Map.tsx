import React, { useEffect, useState } from "react";
import { Circle, MapContainer, Polyline, TileLayer } from "react-leaflet";

const Map = ({ points }) => {
  return (
    <MapContainer center={[42.2167, 1.3333]} zoom={12}>
      {" "}
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
