import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Polyline } from "react-leaflet";
import gpxParser from "gpxparser";

const App = () => {
  const [trackPoints, setTrackPoints] = useState(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mireia22/GPX/main/gpx/1085063.gpx")
      .then((res) => res.text())
      .then((gpxData) => {
        const gpx = new gpxParser();
        gpx.parse(gpxData);
        setTrackPoints(gpx.tracks[0].points);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <MapContainer
        center={[42.2167, 1.3333]}
        zoom={13}
        style={{ height: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {trackPoints && (
          <Polyline
            positions={trackPoints.map((point) => [point.lat, point.lon])}
            color="red"
            weight={3}
          />
        )}
      </MapContainer>
    </div>
  );
};

export default App;
