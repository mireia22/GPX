import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GpxDataProvider } from "./context/gpxDataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <GpxDataProvider>
        <App />
      </GpxDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
