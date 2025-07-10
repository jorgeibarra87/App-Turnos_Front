import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar.js";
import Inicio from "./pages/Inicio.js";
import AdicionarPersona from "./Persona/AdicionarPersona.js";
import EditarPersona from "./Persona/EditarPersona.js";
import VerPersona from "./Persona/VerPersona.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route
            exact
            path="/adicionar-persona"
            element={<AdicionarPersona />}
          />
          <Route exact path="/editar-persona/:id" element={<EditarPersona />} />
          <Route exact path="/ver-persona/:id" element={<VerPersona />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
