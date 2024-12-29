import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function AddPaciente() {

  const MySwal = withReactContent(Swal)

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;
    const userName = decodedToken.name;

  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    genero: "",
    documentoIdentidad: "",
    estadoCivil: "",
    telefono: "",
    correo: "",
    calle: "",
    ciudad:"",
    estado: "",
    codigoPostal: "",
    pais:"",
    nombre: "",
    relacion: "",
    telefono911: "",
    proveedor: "",
    numeroPoliza: "",
    detallesCobertura: "",
  });

  const url = `${import.meta.env.VITE_API_LINK}/pacientes/add`;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const data = {
    nombres: formData.nombres,
    apellidos: formData.apellidos,
    fechaNacimiento: formData.fechaNacimiento,
    genero: formData.genero,
    documentoIdentidad: formData.documentoIdentidad,
    estadoCivil: formData.estadoCivil,
    contacto: {
        telefono: formData.telefono,
        correo: formData.correo,
        direccion:{
            calle: formData.calle,
            ciudad: formData.ciudad,
            estado: formData.estado,
            codigoPostal: formData.codigoPostal,
            pais: formData.pais,
        },
    },
    contactoEmergencia: {
        nombre: formData.nombre,
        relacion: formData.relacion,
        telefono: formData.telefono911,
    },
    seguro: {
        proveedor: formData.proveedor,
        numeroPoliza: formData.numeroPoliza,
        detallesCobertura: formData.detallesCobertura,
    },
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
        text: "Se ha guardado el paciente correctamente.",
      })
      window.location.replace("/pacientes");

    } catch (error) {
      console.error("Error:", error);
      MySwal.fire({
        icon: "error",
        title: "Ha ocurrido un error al guardar la informacion",
        text: "Intentalo nuevamente.",
        showConfirmButton: true,
      })
      window.location.replace("/pacientes");
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
        Nuevo Paciente
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
                  <label htmlFor="nombres" className="form-label mt-4">
                    Nombre(s) <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="nombres"
                    className="form-control"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="apellidos" className="form-label mt-4">
                    Apellido(s) <span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    className="form-control"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="fechaNacimiento" className="form-label mt-4">
                    Fecha de Nacimiento<span className="text-danger">*</span>
                  </label>
                  <input
                    type="date"
                    id="fechaNacimiento"
                    className="form-control"
                    value={formData.nacimiento}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="genero" className="form-label mt-4">
                    Género <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select form-select-lg mb-3"
                    id="genero"
                    value={formData.genero}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Selecciona un género
                    </option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="documentoIdentidad" className="form-label mt-4">
                    No. Documento de identidad
                  </label>
                  <input
                    type="text"
                    id="documentoIdentidad"
                    className="form-control"
                    value={formData.documentoId}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="estadoCivil" className="form-label mt-4">
                    Estado Civil <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select form-select-lg mb-3"
                    id="estadoCivil"
                    value={formData.estadoCivil}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>
                    <option value="soltero">Soltero</option>
                    <option value="casado">Casado</option>
                    <option value="divorciado">Divorciado</option>
                    <option value="viudo">Viudo</option>
                  </select>
                </div>
                  </div>
                <h3 className="fs-5 mt-4">Datos de contacto</h3>
                <div className="row">
                <div className="col-12 col-sm-6">
                  <label htmlFor="telefono911" className="form-label mt-4">
                    Telefono
                  </label>
                  <input
                    type="text"
                    id="telefono911"
                    className="form-control"
                    value={formData.telefono911}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="correo" className="form-label mt-4">
                    Email
                  </label>
                  <input
                    type="email"
                    id="correo"
                    className="form-control"
                    value={formData.correo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="calle" className="form-label mt-4">
                    Calle de Residencia
                  </label>
                  <input
                    type="text"
                    id="calle"
                    className="form-control"
                    value={formData.calle}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="ciudad" className="form-label mt-4">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    id="ciudad"
                    className="form-control"
                    value={formData.ciudad}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="estado" className="form-label mt-4">
                    Estado o Provincia
                  </label>
                  <input
                    type="text"
                    id="estado"
                    className="form-control"
                    value={formData.estado}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="codigoPostal" className="form-label mt-4">
                    Codigo Postal
                  </label>
                  <input
                    type="text"
                    id="codigoPostal"
                    className="form-control"
                    value={formData.codigoPostal}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="pais" className="form-label mt-4">
                    Pais
                  </label>
                  <input
                    type="text"
                    id="pais"
                    className="form-control"
                    value={formData.pais}
                    onChange={handleChange}
                  />
                </div>
            </div>
            <h3 className="fs-5 mt-4">Contacto de Emergencia</h3>
            <div className="row">
            <div className="col-12 col-sm-6">
                  <label htmlFor="nombre" className="form-label mt-4">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="form-control"
                    value={formData.nombre}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="relacion" className="form-label mt-4">
                    Relacion
                  </label>
                  <input
                    type="text"
                    id="relacion"
                    className="form-control"
                    value={formData.relacion}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="telefono" className="form-label mt-4">
                    Telefono
                  </label>
                  <input
                    type="text"
                    id="telefono"
                    className="form-control"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>
            </div>
            <h3 className="fs-5 mt-4">Datos del Seguro</h3>
            <div className="row">
            <div className="col-12 col-sm-6">
                  <label htmlFor="proveedor" className="form-label mt-4">
                    Proveedor
                  </label>
                  <input
                    type="text"
                    id="proveedor"
                    className="form-control"
                    value={formData.proveedor}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="numeroPoliza" className="form-label mt-4">
                    No. de Poliza
                  </label>
                  <input
                    type="text"
                    id="numeroPoliza"
                    className="form-control"
                    value={formData.numeroPoliza}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <label htmlFor="detallesCobertura" className="form-label mt-4">
                    Detalles de Cobertura
                  </label>
                  <input
                    type="text"
                    id="detallesCobertura"
                    className="form-control"
                    value={formData.detallesCobertura}
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

export default AddPaciente;