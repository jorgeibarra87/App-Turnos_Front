import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import Navbar from "./layout/Navbar.js";
import Inicio from "./pages/Inicio.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
    </div>
  );
}

export default App;
