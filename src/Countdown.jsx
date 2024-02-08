import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [running, setRunning] = useState(true);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft === 0) {
            clearInterval(timer);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [running]);

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTimeLeft(60);
    setRunning(true);
  };

  return (
    <div style={styles.container}>
      <div>
        <Link to="/">
          <button>Accueil</button>
        </Link>
      </div>
      <h2>Compte à rebours</h2>
      <p>Temps restant : {timeLeft} secondes</p>
      <div style={styles.buttonContainer}>
        <button onClick={handleStop}>Arrêter</button>
        <button onClick={handleReset}>Réinitialiser</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  buttonContainer: {
    marginTop: "20px",
  },
};

export default Countdown;
