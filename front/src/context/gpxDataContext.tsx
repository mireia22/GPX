import { createContext, useContext, useState } from "react";
import { GpxData } from "../types/Type";

const GpxDataContext = createContext<GpxData>({
  points: [],
  totalDistance: null,
  elevation: {
    min: null,
    max: null,
    avg: null,
  },
});

export const useGpxDataContext = () => {
  return useContext(GpxDataContext);
};

export const GpxDataProvider = ({ children }) => {
  const [gpxData, setGpxData] = useState<GpxData>({
    points: [],
    totalDistance: null,
    elevation: {
      min: null,
      max: null,
      avg: null,
    },
  });

  const sharedState = {
    gpxData,
    setGpxData,
  };

  return (
    <GpxDataContext.Provider value={sharedState}>
      {children}
    </GpxDataContext.Provider>
  );
};
