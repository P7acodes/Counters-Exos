import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <div>
        <Link to="/counter">
          <button>Counter</button>
        </Link>
        <Link to="/countdown">
          <button>Countdown</button>
        </Link>
        <Link to="/serieslist">
          <button>SeriesList</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
