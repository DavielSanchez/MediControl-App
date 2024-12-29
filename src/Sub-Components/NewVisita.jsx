import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function NewVisita(H) {


    const MySwal = withReactContent(Swal)
    const url = `${import.meta.env.VITE_API_LINK}/pacientes/visitas/post/${H.ID}`;
  

    const [formData, setFormData] = useState({
        medico: "",
        notas: "",
        fechaVisita: null
      });
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const data = {
        medico: formData.medico,
        notas: formData.notas,
        fechaVisita: formData.fechaVisita,
      }
    
      const handleSubmit = async () => {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
    
          if (!response.ok) {
            window.location.replace("/pacientes");
            MySwal.fire({
              icon: "error",
              title: "Ha ocurrido un error al guardar la informacion.",
              showConfirmButton: true,
            })
            throw new Error("Error al guardar el paciente");
          }
    
          MySwal.fire({
            icon: "success",
            title: "Exito!",
            text: "Se ha guardado la visita correctamente.",
          })
          window.location.replace(`/pacientes/${H.ID}`);
    
        } catch (error) {
          console.error("Error:", error);
          MySwal.fire({
            icon: "error",
            title: "Ha ocurrido un error al guardar la informacion",
            text: "Intentalo nuevamente.",
            showConfirmButton: true,
          })
          window.location.replace(`/pacientes/${H.ID}`);
        }
      };

  return (
    <>
        <button type="button" className="btn-secondary" data-bs-toggle="modal" data-bs-target="#newVisita">
        Agregar
        </button>

        <div className="modal modal-xl fade text-black" id="newVisita" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="newVisitaLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-3" id="newVisitaLabel">Visita al Medico</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <h5>Campos con: (<span className="text-danger"> * </span>) son obligatorios.</h5>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <label htmlFor="medico" className="form-label mt-4">Medico<span className="text-danger">*</span></label>
                    <input type="text" id="medico" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="notas" className="form-label mt-4">Notas<span className="text-danger">*</span></label>
                    <input type="text" id="notas" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="fechaVisita" className="form-label mt-4">Fecha de visita</label>
                    <input type="date" id="fechaVisita" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleChange}/>
                </div>
                
            </div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn-danger" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" className="btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>Guardar</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default NewVisita