import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";

export default function VerPersona() {
  const [persona, setPersona] = React.useState({
    documento: "",
    nombreCompleto: "",
    email: "",
    telefono: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadPersona();
  }, []);

  const loadPersona = async () => {
    const result = await axios.get(`http://localhost:8080/persona/${id}`);
    setPersona(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Detalles Persona</h2>

          <div className="card">
            <div className="card-header">
              Detalles de la Persona id: {persona.idPersona}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Documento:</b> {/* Aquí va el documento de la persona */}
                  {persona.documento}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {/* Aquí va el email de la persona */}
                  {persona.email}
                </li>
                <li className="list-group-item">
                  <b>Nombre Completo:</b>{" "}
                  {/* Aquí va el nombre completo de la persona */}
                  {persona.nombreCompleto}
                </li>
                <li className="list-group-item">
                  <b>Teléfono:</b> {/* Aquí va el teléfono de la persona */}
                  {persona.telefono}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-outline-primary my-2" to="/">
            Volver a Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
