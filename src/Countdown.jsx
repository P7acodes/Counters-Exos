import React, { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h2>Compte à rebours</h2>
      <p>Temps restant : {timeLeft} secondes</p>
    </div>
  );k,
}

export default Countdown;
