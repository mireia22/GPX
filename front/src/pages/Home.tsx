import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostTrackForm from "../components/PostTrackForm";
import { useGpxDataContext } from "../context/gpxDataContext";
import { toKM } from "../utils/convertUnits";

const Home = () => {
  const { setGpxData } = useGpxDataContext();
  const [savedTracks, setSavedTracks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/");
        const data = await response.json();
        setSavedTracks(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [savedTracks]);

  return (
    <div className="flex flex-col items-center gap-6">
      <article className="flex flex-col items-center gap-2">
        <h4 className="font-semibold text-xl">Saved Tracks:</h4>
        {savedTracks.length > 0 ? (
          <ul className="flex gap-2">
            {savedTracks.map((data) => (
              <li
                key={data._id}
                className="p-2 bg-purple-900 text-white cursor-pointer"
              >
                <Link to={`/tracks/${data._id}`}>
                  <p>{toKM(data.totalDistance)} km</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tracks</p>
        )}
      </article>
      <article className="flex flex-col items-center gap-2">
        <h4 className="font-semibold text-xl">Post New Track:</h4>
      </article>
      <PostTrackForm />
    </div>
  );
};

export default Home;
