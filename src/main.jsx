import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./Acceuil.jsx";
import Counter from "./Counter.jsx";
import Countdown from "./Countdown.jsx";
import SeriesList from "./SeriesList.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/serieslist" element={<SeriesList />} />
      </Routes>
    </React.StrictMode>
  </Router>,
);
