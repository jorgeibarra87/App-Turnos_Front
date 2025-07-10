import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Inicio() {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    loadPersonas();
  }, []);

  const loadPersonas = async () => {
    const result = await axios.get("http://localhost:8080/persona");
    //console.log(result.data);
    setPersonas(result.data);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table table-striped border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">DOCUMENTO</th>
              <th scope="col">EMAIL</th>
              <th scope="col">NOMBRE</th>
              <th scope="col">TELEFONO</th>
              <th scope="col">ACCION</th>
            </tr>
          </thead>
          <tbody>
            {personas.map((persona, index) => (
              <tr key={index}>
                <th scope="row">{persona.idPersona}</th>
                <td>{persona.documento}</td>
                <td>{persona.email}</td>
                <td>{persona.nombreCompleto}</td>
                <td>{persona.telefono}</td>
                <td>
                  <button className="btn btn-primary mx-2">Ver</button>
                  <button className="btn btn-outline-primary mx-2">
                    Editar
                  </button>
                  {/* <button className="btn btn-danger mx-2">Eliminar</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
