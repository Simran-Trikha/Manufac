import React from "react";

import "./App.scss";
import ScatterChart from "./Components/ScatterChart";
import BarGraphChart from "./Components/BarGraphChart";
function App() {
  return (
    <div className="App">
      <div className="chart-1">
        <ScatterChart></ScatterChart>
      </div>
      <div className="chart-1">
        <BarGraphChart></BarGraphChart>
      </div>
    </div>
  );
}

export default App;
