import gpxParser from "gpxparser";
import { GpxData } from "../types/Type";

export function parseTrack(gpxData): GpxData {
  const gpx = new gpxParser();
  gpx.parse(gpxData);
  console.log("parseTrack gpx:", gpx);
  const { points, distance, elevation } = gpx.tracks[0];

  const newGpxData = {
    points: points,
    totalDistance: distance.total,
    elevation: {
      min: elevation.min,
      max: elevation.max,
      avg: elevation.avg,
    },
  };
  console.log("parseTrack parsedData", newGpxData);
  return newGpxData;
}
