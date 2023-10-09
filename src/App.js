import "./App.css";
import React, { useState } from "react";
import Counters from "./Counters";

function App() {
  const initialCounters = Counters();
  const [counts, setCounts] = useState(initialCounters);
  const [maxCount, setMaxCount] = useState(null);

  function increment(id) {
    const updatedCounts = counts.map((el) =>
      el.id === id ? { ...el, value: el.value + 1 } : el
    );
    setCounts(updatedCounts);
  }
  function victorySmile() {
    const maxNumber = Math.max(...counts.map((el) => el.value));
    const victorySm = counts.filter((el) => el.value === maxNumber);
    setMaxCount(victorySm);
  }

  return (
    <>
      <div className="smiles">
        {counts.map((el) => (
          <div className="smile" key={el.id}>
            <img
              src={el.src}
              alt={el.id + "smile"}
              onClick={() => increment(el.id)}
            />
            <div className="result">{el.value}</div>
          </div>
        ))}
      </div>

      <div>
        <button onClick={victorySmile}>Смайл переможець</button>
        <div className="victory">
          {maxCount && maxCount.length > 0 && (
            <div>
                {maxCount.map((winner) => (
                  <div key={winner.id}>
                    <img src={winner.src} alt="Виграшний смайл" /></div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
