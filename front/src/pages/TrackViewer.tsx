// TrackViewer.jsx

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Map from "../components/map-components/Map";
import LineChart from "../components/map-components/LineChart";
import { useGpxDataContext } from "../context/gpxDataContext";
import { toKM } from "../utils/convertUnits";

const TrackViewer = () => {
  const { gpxData, setGpxData } = useGpxDataContext();
  const { points, elevation, totalDistance } = gpxData;
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/tracks/${id}`
        );
        const data = await response.json();
        setGpxData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, setGpxData]);

  return (
    <div className="flex">
      <div>
        <Map points={points} />
        <LineChart points={points} />
      </div>

      <aside className="flex flex-col bg-purple-950 text-white gap-2 p-2 max-w-[15vw] items-center text-center text-xs">
        <h5 className="font-semibold ">TOTAL DISTANCE:</h5>
        <p className="font-semibold text-xl">{toKM(totalDistance)} km</p>
        <h5 className="font-semibold  mt-8 text-xs">MAX ELEVATION:</h5>
        <p>{elevation.max} m</p>
        <h5 className="font-semibold ">MIN ELEVATION:</h5>
        <p>{elevation.min} m</p>
        <h5 className="font-semibold ">AVG ELEVATION:</h5>
        <p>{elevation.avg?.toFixed(2)} m</p>
      </aside>
    </div>
  );
};

export default TrackViewer;
