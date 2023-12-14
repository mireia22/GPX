import "leaflet/dist/leaflet.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TrackViewer from "./pages/TrackViewer";
import { useGpxDataContext } from "./context/gpxDataContext";

const App = () => {
  const { gpxData } = useGpxDataContext();
  console.log("gpxData:", gpxData);

  return (
    <div>
      <header className="h-[2rem] w-full p-2 bg-slate-900 text-white flex items-center">
        <Link to="/"> HOME</Link>
      </header>
      <main className="max-w-[100vw]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tracks/:id" element={<TrackViewer />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
