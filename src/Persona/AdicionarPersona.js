import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir después de enviar el formulario
import { Link } from "react-router-dom";

export default function AdicionarPersona() {
  let navigate = useNavigate(); // Para redirigir después de enviar el formulario

  // Estado para almacenar los datos de la persona
  const [personas, setPersonas] = useState({
    documento: "",
    nombreCompleto: "",
    email: "",
    telefono: "",
  });

  const { documento, nombreCompleto, email, telefono } = personas;

  const onInputChange = (e) => {
    setPersonas({ ...personas, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del formulario
    await axios.post("http://localhost:8080/persona", personas);
    navigate("/"); // Redirige a la página de inicio después de enviar
    // Redirigir o limpiar el formulario después de enviar
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Registrar Persona</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="documento" className="form-label">
                Documento
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Ingrese el documento"
                name="documento"
                value={documento}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nombreCompleto" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su nombre completo"
                name="nombreCompleto"
                value={nombreCompleto}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Telefono
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su teléfono"
                name="telefono"
                value={telefono}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Enviar
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancelar
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
