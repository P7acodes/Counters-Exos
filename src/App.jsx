import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        textAlign: "center",
        border: "1px solid black",
        padding: "20px",
        width: "200px",
        margin: "0 auto",
      }}
    >
      <h2>Compteur</h2>
      <p>Nombre : {count}</p>
      <button onClick={increment}>Incrémenter</button>
      <button onClick={decrement}>Décrémenter</button>
    </div>
  );
}

export default Counter;
