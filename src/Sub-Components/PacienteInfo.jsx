import { useState, useEffect } from "react";
import { differenceInYears, format } from "date-fns";
import Masculino from "../../public/IMG/Masculino.png";
import Femenino from "../../public/IMG/Femenino.png";

function PacienteInfo(P) {
  
    const [data, setData] = useState({});
    const url = `${import.meta.env.VITE_API_LINK}/pacientes/id/${P.ID}`;
  
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
  
    function calculateAge(birthDate) {
      if (!birthDate) return "N/A";
      const today = new Date();
      return differenceInYears(today, new Date(birthDate));
    }
  
    if (!Object.keys(data).length) {
      return <span className="loader"></span>;
    }
  
    if(data.genero == 'masculino'){
      return (
          <>
            
              <div className="apartadoPacienteMasculino">
                  <h2>Datos Personales</h2>
                  <div className="row mb-3">
                  <div className="col-5 d-flex justify-content-center">
                      <img src={Masculino} alt="Género" width={"50%"} />
                  </div>
                  <div className="col-6 d-flex justify-content-start">
                      <div className="containerName">
                      <h3>
                          {data.nombres || "N/A"} {data.apellidos || "N/A"}
                      </h3>
                      <p>
                          <strong>Edad:</strong> {calculateAge(data.fechaNacimiento)} años
                      </p>
                      <p>
                          <strong>Género:</strong> {data.genero || "N/A"}
                      </p>
                      <p>
                          <strong>No. Identificación:</strong> {data.documentoIdentidad || "N/A"}
                      </p>
                      <p>
                          <strong>Estado Civil:</strong> {data.estadoCivil || "N/A"}
                      </p>
                      <p>
                          <strong>Teléfono:</strong> {data.contacto?.telefono || "N/A"}
                      </p>
                      </div>
                  </div>
                  </div>
                  <div className="row mb-3">
                  <div className="col-6">
                      <p><strong>Calle:</strong> {data.contacto?.direccion?.calle || "N/A"}</p>
                  </div>
                  <div className="col-6">
                      <p><strong>Ciudad:</strong> {data.contacto?.direccion?.ciudad || "N/A"}</p>
                  </div>
                  <div className="col-6">
                      <p><strong>Estado o Provincia:</strong> {data.contacto?.direccion?.estado || "N/A"}</p>
                  </div>
                  <div className="col-6">
                      <p><strong>País:</strong> {data.contacto?.direccion?.pais || "N/A"}</p>
                  </div>
                  </div>
              </div>
              <div className="apartadoPacienteMasculino">
                  <h2>Historial Médico</h2>
                  {data.historialMedico?.length ? (
                  data.historialMedico.map((H, index) => (
                      <div className="row" key={index}>
                      <div className="col-1 d-flex justify-content-end">{index + 1}-</div>
                      <div className="col-11">
                          <div className="row">
                          <div className="col-6">
                              <p><strong>Condición:</strong> {H.condicion || "N/A"}</p>
                          </div>
                          <div className="col-6">
                              <p><strong>Fecha:</strong> {format(new Date(H.fechaDiagnostico), 'dd/MM/yyyy') || "N/A"}</p>
                          </div>
                          <div className="col-12">
                              <p><strong>Notas:</strong> {H.notas || "N/A"}</p>
                          </div>
                          </div>
                      </div>
                      </div>
                  ))
                  ) : (
                  <p>No hay historial médico disponible.</p>
                  )}
              </div>
      
              <div className="apartadoPacienteMasculino">
                  <h2>Alergias</h2>
                  {data.alergias?.length ? (
                  data.alergias.map((H, index) => (
                      <div className="row" key={index}>
                      <div className="col-1 d-flex justify-content-end">{index + 1}-</div>
                      <div className="col-11">
                          <div className="row">
                          <div className="col-6">
                              <p>{H || "N/A"}</p>
                          </div>
                          </div>
                      </div>
                      </div>
                  ))
                  ) : (
                  <p>No hay registro de alergias disponibles</p>
                  )}
              </div>
      
              <div className="apartadoPacienteMasculino">
                  <h2>Medicamentos</h2>
                  {data.medicamentos?.length ? (
                  data.medicamentos.map((H, index) => (
                      <div className="row" key={index}>
                      <div className="col-1 d-flex justify-content-end">{index + 1}-</div>
                      <div className="col-11">
                          <div className="row">
                          <div className="col-4">
                              <p><strong>Nombre:</strong> {H.nombre || "N/A"}</p>
                          </div>
                          <div className="col-4">
                              <p><strong>Dosis:</strong> {H.dosis || "N/A"}</p>
                          </div>
                          <div className="col-4">
                              <p><strong>Frecuencia:</strong> {H.frecuencia || "N/A"}</p>
                          </div>
                          <div className="col-6">
                          <p><strong>Fecha de inicio:</strong> {format(new Date(H.fechaInicio), 'dd/MM/yyyy') || "N/A"}</p>
                          </div>
                          <div className="col-6">
                          <p><strong>Fecha de fin: </strong>{H.fechaFin ? format(new Date(H.fechaFin), 'dd/MM/yyyy') : "Activo"}</p>
                          </div>
                          </div>
                      </div>
                      </div>
                  ))
                  ) : (
                  <p>No hay resgistro de medicamentos disponibles.</p>
                  )}
              </div>
      
              <div className="apartadoPacienteMasculino">
              <h2>Contacto de Emergencia</h2>
                  <div className="row">
                      <div className="col-6">
                          <p><strong>Nombre:</strong> {data.contactoEmergencia.nombre || "N/A"}</p>
                      </div>
                      <div className="col-6">
                          <p><strong>Relacion:</strong> {data.contactoEmergencia.relacion || "N/A"}</p>
                      </div>
                      <div className="col-12">
                          <p><strong>telefono:</strong> {data.contactoEmergencia.telefono || "N/A"}</p>
                      </div>
                  </div>
              </div>
  
              <div className="apartadoPacienteMasculino">
              <h2>Seguro Medico</h2>
                  <div className="row">
                      <div className="col-6">
                          <p><strong>Proveedor:</strong> {data.seguro.proveedor || "N/A"}</p>
                      </div>
                      <div className="col-6">
                          <p><strong>Numero de Poliza:</strong> {data.seguro.numeroPoliza || "N/A"}</p>
                      </div>
                      <div className="col-12">
                          <p><strong>Detalles de cobertura:</strong> {data.seguro.detallesCobertura || "N/A"}</p>
                      </div>
                  </div>
              </div>
  
              <div className="apartadoPacienteMasculino">
              <h2>Visitas al medico</h2>
              {data.visitas?.length ? (
                data.visitas.map((H, index) => (
                  <div className="row" key={index}>
                    <div className="col-1 d-flex justify-content-end">{index + 1}-</div>
                    <div className="col-11">
                      <div className="row">
                        <div className="col-4">
                          <p><strong>Fecha:</strong> {H.fechaVisita || "N/A"}</p>
                        </div>
                        <div className="col-4">
                          <p><strong>Notas:</strong> {H.notas || "N/A"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay resgistro de visitas anteriores.</p>
              )}
              </div>   
          </>
        );
    }else{
      return (
          <>
            <div className="apartadoPacienteFemenino">
            <h2>Datos Personales</h2>
              <div className="row mb-3">
                <div className="col-md-5 col-sm-12 d-flex justify-content-center">
                  <img src={Femenino} alt="Género" width={"50%"} />
                </div>
                <div className="col-md-7 col-sm-12 d-flex justify-content-start">
                  <div className="containerName">
                    <h3>
                      {data.nombres || "N/A"} {data.apellidos || "N/A"}
                    </h3>
                    <p>
                      <strong>Edad:</strong> {calculateAge(data.fechaNacimiento)} años
                    </p>
                    <p>
                      <strong>Género:</strong> {data.genero || "N/A"}
                    </p>
                    <p>
                      <strong>No. Identificación:</strong> {data.documentoIdentidad || "N/A"}
                    </p>
                    <p>
                      <strong>Estado Civil:</strong> {data.estadoCivil || "N/A"}
                    </p>
                    <p>
                      <strong>Teléfono:</strong> {data.contacto?.telefono || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-6">
                  <p><strong>Calle:</strong> {data.contacto?.direccion?.calle || "N/A"}</p>
                </div>
                <div className="col-6">
                  <p><strong>Ciudad:</strong> {data.contacto?.direccion?.ciudad || "N/A"}</p>
                </div>
                <div className="col-6">
                  <p><strong>Estado o Provincia:</strong> {data.contacto?.direccion?.estado || "N/A"}</p>
                </div>
                <div className="col-6">
                  <p><strong>País:</strong> {data.contacto?.direccion?.pais || "N/A"}</p>
                </div>
              </div>
              </div>
              <div className="apartadoPacienteFemenino">
              <h2>Historial Médico</h2>
              {data.historialMedico?.length ? (
                data.historialMedico.map((H, index) => (
                  <div className="row" key={index}>
                    <div className="col-1 d-flex justify-content-end">{index + 1}-</div>
                    <div className="col-11">
                      <div className="row">
                        <div className="col-6">
                          <p><strong>Condición:</strong> {H.condicion || "N/A"}</p>
                        </div>
                        <div className="col-6">
                          <p><strong>Fecha:</strong> {format(new Date(H.fechaDiagnostico), 'dd/MM/yyyy') || "N/A"}</p>
                        </div>
                        <div className="col-12">
                          <p><strong>Notas:</strong> {H.notas || "N/A"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay historial médico disponible.</p>
              )}
              </div>
              <div className="apartadoPacienteFemenino">
              <h2>Alergias</h2>
              {data.alergias?.length ? (
                data.alergias.map((H, index) => (
                  <div className="row" key={index}>
                    <div className="col-1 d-flex justify-content-end">{index + 1}-</div>
                    <div className="col-11">
                      <div className="row">
                        <div className="col-6">
                          <p>{H || "N/A"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay registro de alergias disponibles</p>
              )}
              </div>
              <div className="apartadoPacienteFemenino">
              <h2>Medicamentos</h2>
              {data.medicamentos?.length ? (
                data.medicamentos.map((H, index) => (
                  <div className="row" key={index}>
                    <div className="col-1 d-flex justify-content-end">{index + 1}-</div>
                    <div className="col-11">
                      <div className="row">
                        <div className="col-4">
                          <p><strong>Nombre:</strong> {H.nombre || "N/A"}</p>
                        </div>
                        <div className="col-4">
                          <p><strong>Dosis:</strong> {H.dosis || "N/A"}</p>
                        </div>
                        <div className="col-4">
                          <p><strong>Frecuencia:</strong> {H.frecuencia || "N/A"}</p>
                        </div>
                        <div className="col-6">
                        <p><strong>Fecha de inicio:</strong> {format(new Date(H.fechaInicio), 'dd/MM/yyyy') || "N/A"}</p>
                        </div>
                        <div className="col-6">
                        <p><strong>Fecha de fin: </strong>{H.fechaFin ? format(new Date(H.fechaFin), 'dd/MM/yyyy') : "Activo"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay resgistro de medicamentos disponibles.</p>
              )}
              </div>
              <div className="apartadoPacienteFemenino">
              <h2>Contacto de Emergencia</h2>
                  <div className="row">
                      <div className="col-6">
                          <p><strong>Nombre:</strong> {data.contactoEmergencia.nombre || "N/A"}</p>
                      </div>
                      <div className="col-6">
                          <p><strong>Relacion:</strong> {data.contactoEmergencia.relacion || "N/A"}</p>
                      </div>
                      <div className="col-12">
                          <p><strong>telefono:</strong> {data.contactoEmergencia.telefono || "N/A"}</p>
                      </div>
                  </div>
              </div>
              <div className="apartadoPacienteFemenino">
              <h2>Seguro Medico</h2>
                  <div className="row">
                      <div className="col-6">
                          <p><strong>Proveedor:</strong> {data.seguro.proveedor || "N/A"}</p>
                      </div>
                      <div className="col-6">
                          <p><strong>Numero de Poliza:</strong> {data.seguro.numeroPoliza || "N/A"}</p>
                      </div>
                      <div className="col-12">
                          <p><strong>Detalles de cobertura:</strong> {data.seguro.detallesCobertura || "N/A"}</p>
                      </div>
                  </div>
              </div>
              <div className="apartadoPacienteFemenino">
              <h2>Visitas al medico</h2>
              {data.visitas?.length ? (
                data.visitas.map((H, index) => (
                  <div className="row" key={index}>
                    <div className="col-1 d-flex justify-content-end">{index + 1}-</div>
                    <div className="col-11">
                      <div className="row">
                        <div className="col-4">
                          <p><strong>Fecha:</strong> {H.fechaVisita || "N/A"}</p>
                        </div>
                        <div className="col-4">
                          <p><strong>Notas:</strong> {H.notas || "N/A"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No hay resgistro de visitas anteriores.</p>
              )}
              </div>
          </>
        );
    }
  }

export default PacienteInfo

