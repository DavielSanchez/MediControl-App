import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function AddMedico() {

  const MySwal = withReactContent(Swal)

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;
    const userName = decodedToken.name;

  const [formData, setFormData] = useState({
    nombre: "",
    especialidad: "",
    telefono: "",
    email: "",
    direccion: ""
  });

  const url = `${import.meta.env.VITE_API_LINK}/medicos/add`;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const data = {
    nombre: formData.nombre,
    especialidad: formData.especialidad,
    telefono: formData.telefono,
    email: formData.email,
    direccion: formData.direccion,
    creadoPor: {
        nombre: userName,
        rol: userRole,
    }
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
        window.location.replace("/medicos");
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
        text: "Se ha guardado el paciente correctamente.",
      })
      window.location.replace("/medicos");

    } catch (error) {
      console.error("Error:", error);
      MySwal.fire({
        icon: "error",
        title: "Ha ocurrido un error al guardar la informacion",
        text: "Intentalo nuevamente.",
        showConfirmButton: true,
      })
      window.location.replace("/medicos");
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Nuevo Medico
      </button>

      <div
        className="modal modal-xl fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-4" id="staticBackdropLabel">
                Nuevo Paciente
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            <h5>Campos con: (<span className="text-danger fs-4"> * </span>) son obligatorios.</h5>
              <h3 className="fs-5">Datos personales</h3>
              <div className="row">
                <div className="col-12 col-sm-6">
                  <label htmlFor="nombre" className="form-label mt-4">
                    Nombre(s) <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="especialidad" className="form-label mt-4">
                  Especialidad <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="especialidad"
                    className="form-control"
                    value={formData.especialidad}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="telefono" className="form-label mt-4">
                    Telefono<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="telefono"
                    className="form-control"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="email" className="form-label mt-4">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                  </div>
                <div className="row">
                <div className="col-12 col-sm-6">
                  <label htmlFor="direccion" className="form-label mt-4">
                    Direccion
                  </label>
                  <input
                    type="text"
                    id="direccion"
                    className="form-control"
                    value={formData.telefono911}
                    onChange={handleChange}
                  />
                </div>
            </div>

              {/* Similar sections for "Datos de contacto", "Contacto de emergencia", and "Datos seguro" */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
                data-bs-dismiss="modal"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddMedico;