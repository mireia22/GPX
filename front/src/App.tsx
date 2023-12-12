import { useState } from "react";
import "leaflet/dist/leaflet.css";
import Map from "./components/Map";
import FileInput from "./components/FileInput";
import { GpxData } from "./types/Type";

const App = () => {
  const [gpxData, setGpxData] = useState<GpxData>({
    points: [],
    totalDistance: null,
    elevation: {
      min: null,
      max: null,
      avg: null,
    },
  });
  console.log("gpxData:", gpxData);

  const { points, elevation, totalDistance } = gpxData;

  const toKM = (m: number | null) => m && (m / 1000).toFixed(2);

  return (
    <div>
      <header className="h-2 w-full p-2">TRACKER</header>
      <div className="flex justify-between">
        <Map points={points} />
        <aside className="flex flex-col bg-slate-600 text-white gap-4 p-2">
          <p>TOTAL DISTANCE: {toKM(totalDistance)} km</p>
          <p>MAX ELEVATION: {elevation.max} m</p>
          <p>MIN ELEVATION: {elevation.min} m</p>
          <p className="text-green-500">
            AVG ELEVATION: {elevation.avg?.toFixed(2)} m
          </p>
          <FileInput setGpxData={setGpxData} />
        </aside>
      </div>
    </div>
  );
};

export default App;
