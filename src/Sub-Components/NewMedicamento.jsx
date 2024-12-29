import { useState } from "react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function NewMedicamento(H) {

    const MySwal = withReactContent(Swal)
    const url = `${import.meta.env.VITE_API_LINK}/pacientes/medicamentos/post/${H.ID}`;
  

    const [formData, setFormData] = useState({
        nombre: "",
        dosis: "",
        frecuencia: "",
        fechaInicio: null,
        fechaFin: null,
      });
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
      };
    
      const data = {
        nombre: formData.nombre,
        dosis: formData.dosis,
        frecuencia: formData.frecuencia,
        fechaInicio: formData.fechaInicio,
        fechaFin: formData.fechaFin,
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
            text: "Se ha guardado el Medicamento correctamente.",
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
        <button type="button" className="btn-secondary" data-bs-toggle="modal" data-bs-target="#newMedicamento">
        Agregar
        </button>

        <div className="modal modal-xl fade text-black" id="newMedicamento" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="newMedicamentoLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-3" id="newMedicamentoLabel">Medicamentos</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <h5>Campos con: (<span className="text-danger"> * </span>) son obligatorios.</h5>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <label htmlFor="nombre" className="form-label mt-4">Nombre del medicamento<span className="text-danger">*</span></label>
                    <input type="text" id="nombre" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="dosis" className="form-label mt-4">Dosis<span className="text-danger">*</span></label>
                    <input type="text" id="dosis" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="frecuencia" className="form-label mt-4">Frecuencia<span className="text-danger">*</span></label>
                    <input type="text" id="frecuencia" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="fechaInicio" className="form-label mt-4">Fecha de inicio</label>
                    <input type="date" id="fechaInicio" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="fechaFin" className="form-label mt-4">Fecha de fin</label>
                    <input type="date" id="fechaFin" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleChange}/>
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

export default NewMedicamento