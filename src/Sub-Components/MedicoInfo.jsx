import { useState, useEffect } from "react";
import { format } from "date-fns";
import Doctor from "../../public/IMG/Doctor.png";
import DeleteMedico from "./DeleteMedico";

function MedicoInfo(P) {

    const [data, setData] = useState({});
    const url = `${import.meta.env.VITE_API_LINK}/medicos/id/${P.ID}`;

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const result = await response.json();
          setData(result[0] || {});
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <>
    <div className="apartadoPacienteMasculino">
                  <h2>Datos Personales</h2>
                  <div className="row mb-3">
                  <div className="col-5 d-flex justify-content-center">
                      <img src={Doctor} alt="Género" width={"60%"} />
                  </div>
                  <div className="col-6 d-flex justify-content-start">
                      <div className="containerName">
                      <h3>
                          {data.nombre || "N/A"}
                      </h3>
                      <p>
                          <strong>Especialidad</strong> {data.especialidad}
                      </p>
                      <p>
                          <strong>Telefono:</strong> {data.telefono || "N/A"}
                      </p>
                      <p>
                          <strong>Email:</strong> {data.email || "N/A"}
                      </p>
                      <p>
                          <strong>Direccion:</strong> {data.direccion || "N/A"}
                      </p>
                      <p>
                          <strong>Estado:</strong> {data.estado || "N/A"}
                      </p>
                      <p>
                        <strong>Fecha de registro:</strong>{" "}
                        {data.fechaRegistro
                            ? format(new Date(data.fechaRegistro), "dd/MM/yyyy")
                            : "N/A"}
                    </p>
                      </div>
                  </div>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <div className="col-2">
                        <button className="btn-warning d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil me-2" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
        </svg>
                            Editar
                        </button>
                    </div>
                    <div className="col-1">
                        <DeleteMedico ID={P.ID}/>
                    </div>
                  </div>
              </div>
    </>
  )
}

export default MedicoInfo