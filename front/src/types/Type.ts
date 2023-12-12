export type GpxData = {
  points: { lat: number | null; lon: number | null }[];
  totalDistance: number | null;
  elevation: { min: number | null; max: number | null; avg: number | null };
};

export type SetGpxData = React.Dispatch<React.SetStateAction<GpxData>>;
