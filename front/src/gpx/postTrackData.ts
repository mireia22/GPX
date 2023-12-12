import { GpxData } from "../types/Type";

export async function postTrackData(postData: GpxData): Promise<void> {
  console.log("API Request Payload:", {
    points: postData.points,
    totalDistance: postData.totalDistance,
    elevation: postData.elevation,
  });
  const response = await fetch("http://localhost:3000/api/v1", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      points: postData.points,
      totalDistance: postData.totalDistance,
      elevation: postData.elevation,
    }),
  });

  if (response.ok) {
    console.log("Track posted ");
  } else {
    console.error("Failed to post track");
    throw new Error("Failed to post track");
  }
}
