import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SeriesList() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    fetch("/src/assets/series.json")
      .then((response) => response.json())
      .then((data) => setSeries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <div>
        <Link to="/">
          <button>Accueil</button>
        </Link>
      </div>
      <h1>Mes 20 séries préférées :</h1>
      <ul>
        {series.map((serie, index) => (
          <li key={index}>
            <strong>{serie.titre}</strong> - Note : {serie.note}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SeriesList;
