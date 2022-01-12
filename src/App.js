import React from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  return (
    <div className="App">
      {Array.from(Array(500).keys()).map((sq) => (
        <Square key={sq} />
      ))}
    </div>
  );
};

export default App;
