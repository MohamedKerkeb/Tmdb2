import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Contenue from "./components/Contenue/Contenue";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Contenue />
    </div>
  );
}

export default App;
