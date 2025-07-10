import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function EditarPersona() {
  const navigate = useNavigate();
  const { id } = useParams();

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
    e.preventDefault();
    await axios.put(`http://localhost:8080/persona/${id}`, personas);
    navigate("/");
  };

  const loadPersona = async () => {
    const result = await axios.get(`http://localhost:8080/persona/${id}`);
    setPersonas(result.data);
  };

  useEffect(() => {
    loadPersona();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Editar Persona</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="documento" className="form-label">
                Documento
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese el documento"
                name="documento"
                value={documento}
                onChange={onInputChange}
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
                onChange={onInputChange}
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
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefono" className="form-label">
                Teléfono
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Ingrese su teléfono"
                name="telefono"
                value={telefono}
                onChange={onInputChange}
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
