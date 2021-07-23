import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box/Box";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Box text={"Hola Bro"}></Box>
        <Counter numero={20}></Counter>
      </header>
    </div>
  );
}

export default App;
