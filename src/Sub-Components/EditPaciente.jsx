import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';
import DeletePaciente from './DeletePaciente';
function EditPaciente(P) {

    const [dataUser, setDataUser] = useState([]);
    const MySwal = withReactContent(Swal)
    const urlDelete = `${import.meta.env.VITE_API_LINK}/pacientes/delete/${P.ID}`
    const urlEdit = `${import.meta.env.VITE_API_LINK}/pacientes/put/${P.ID}`;
    const url = `${import.meta.env.VITE_API_LINK}/pacientes/id/${P.ID}`

    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setDataUser(result);
        } catch (error) {
            console.error(error);
        }
    };

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

    useEffect(() => {
        if (dataUser.length > 0) {
            console.log(dataUser)
            setFormData({
                ...formData,
                nombres: dataUser[0].nombres || "",
                apellidos: dataUser[0].apellidos || "",
                fechaNacimiento: dataUser[0].fechaNacimiento || "",
                genero: dataUser[0].genero || "",
                documentoIdentidad: dataUser[0].documentoIdentidad || "",
                estadoCivil: dataUser[0].estadoCivil || "",
                telefono: dataUser[0].contacto.telefono || "",
                correo: dataUser[0].contacto.correo || "",
                calle: dataUser[0].contacto.direccion.calle || "",
                ciudad: dataUser[0].contacto.direccion.ciudad || "",
                estado: dataUser[0].contacto.direccion.estado || "",
                codigoPostal: dataUser[0].contacto.direccion.codigoPostal || "",
                pais: dataUser[0].contacto.direccion.pais || "",
                nombre: dataUser[0].contactoEmergencia.nombre || "",
                relacion: dataUser[0].contactoEmergencia.relacion || "",
                telefono911: dataUser[0].contactoEmergencia.telefono || "",
                proveedor: dataUser[0].seguro.proveedor || "",
                numeroPoliza: dataUser[0].seguro.numeroPoliza || "",
                detallesCobertura: dataUser[0].seguro.detallesCobertura || "",
            });
        }else{
            console.log('aun no')
        }
    }, [dataUser]);


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
        // creadoPor: {
        //     nombre: userName,
        //     rol: userRole,
        // }
      }

      const handleSubmit = async () => {
        try {
            const response = await fetch(urlEdit, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
      
            if (response.ok) {
              MySwal.fire("Éxito", "Paciente actualizado correctamente", "success");
              window.location.replace("/pacientes");
            } else {
              MySwal.fire("Error", "No se pudo actualizar el paciente", "error");
              window.location.replace("/pacientes");
            }
          } catch (error) {
            console.error("Update error:", error);
            MySwal.fire("Error", "Hubo un problema al actualizar el paciente", "error");
            window.location.replace("/pacientes");
          }
      }

    return (
        <>
    <div className="botones d-flex">
    <h2 className="btn-warning d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil me-2" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
        </svg>
        Editar
    </h2>
    <DeletePaciente ID={P.ID}/>
    </div>
    
    <div className="modal modal-xl fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar Paciente</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h3 className="fs-5">Datos Personales</h3>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <label htmlFor="nombres" className="form-label mt-4">Nombre(s)</label>
                    <input type="text" id="nombres" className="form-control" aria-describedby="passwordHelpBlock" value={formData.nombres} onChange={
                        handleChange
                        }/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="apellidos" className="form-label mt-4">Apellido(s)</label>
                    <input type="text" id="apellidos" className="form-control" aria-describedby="passwordHelpBlock" value={formData.apellidos} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="fechaNacimiento" className="form-label mt-4">Fecha de Nacimiento</label>
                    <input type="date" id="fechaNacimiento" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="genero" className="form-label mt-4">Genero</label>
                    <select className="form-select form-select-lg mb-3" id="genero" aria-label="Large select example" onChange={handleChange}>
                        <option selected disabled>{formData.genero}</option>
                        <option defaultValue="masculino">Masculino</option>
                        <option defaultValue="femenino">Femenino</option>
                    </select>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="documentoId" className="form-label mt-4"># Documento de identidad</label>
                    <input type="text" id="documentoId" className="form-control" aria-describedby="passwordHelpBlock" value={formData.documentoIdentidad} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="estadoCivil" className="form-label mt-4">Estado Civil</label>
                    <select className="form-select form-select-lg mb-3" id="estadoCivil" aria-label="Large select example" onChange={handleChange}>
                        <option selected disabled>{formData.estadoCivil}</option>
                        <option defaultValue="soltero">Soltero</option>
                        <option defaultValue="casado">Casado</option>
                        <option defaultValue="divorciado">Divorciado</option>
                        <option defaultValue="viudo">Viudo</option>
                    </select>
                </div>
            </div>
    
            <h3 className="mt-4 fs-5">Datos de contacto</h3>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <label htmlFor="telefono" className="form-label mt-4">Telefono</label>
                    <input type="text" id="telefono" className="form-control" aria-describedby="passwordHelpBlock" value={formData.telefono} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="email" className="form-label mt-4">Email</label>
                    <input type="email" id="email" className="form-control" aria-describedby="passwordHelpBlock" value={formData.correo} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="calle" className="form-label mt-4">Calle</label>
                    <input type="text" id="calle" className="form-control" aria-describedby="passwordHelpBlock" value={formData.calle} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="ciudad" className="form-label mt-4">Ciudad</label>
                    <input type="text" id="ciudad" className="form-control" aria-describedby="passwordHelpBlock" value={formData.ciudad} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="estado" className="form-label mt-4">Estado o provincia</label>
                    <input type="text" id="estado" className="form-control" aria-describedby="passwordHelpBlock" value={formData.estado} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="codigoPostal" className="form-label mt-4">Codigo Postal</label>
                    <input type="text" id="codigoPostal" className="form-control" aria-describedby="passwordHelpBlock" value={formData.codigoPostal} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="pais" className="form-label mt-4">Pais</label>
                    <input type="text" id="pais" className="form-control" aria-describedby="passwordHelpBlock" value={formData.pais} onChange={handleChange}/>
                </div>
            </div>
    
            <h3 className="mt-4 fs-5">Contacto de emergencia</h3>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <label htmlFor="nombre911" className="form-label mt-4">Nombre</label>
                    <input type="text" id="nombre911" className="form-control" aria-describedby="passwordHelpBlock" value={formData.nombre} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="email" className="form-label mt-4">Relacion</label>
                    <input type="text" id="email" className="form-control" aria-describedby="passwordHelpBlock" value={formData.relacion} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="email" className="form-label mt-4">Telefono</label>
                    <input type="text" id="email" className="form-control" aria-describedby="passwordHelpBlock" value={formData.telefono911} onChange={handleChange}/>
                </div>
            </div>
    
            <h3 className="mt-4 fs-5">Datos seguro</h3>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <label htmlFor="seguroProveedor" className="form-label mt-4">Proveerdor</label>
                    <input type="text" id="seguroProveedor" className="form-control" aria-describedby="passwordHelpBlock" value={formData.proveedor} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="seguroPoliza" className="form-label mt-4">No. de Poliza</label>
                    <input type="text" id="seguroPoliza" className="form-control" aria-describedby="passwordHelpBlock" value={formData.numeroPoliza} onChange={handleChange}/>
                </div>
                <div className="col-12 col-sm-6">
                    <label htmlFor="seguroCobertura" className="form-label mt-4">Detalles cobertura</label>
                    <input type="text" id="seguroCobertura" className="form-control" aria-describedby="passwordHelpBlock" value={formData.detallesCobertura} onChange={handleChange}/>
                </div>
            </div>
    
    
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Understood</button>
          </div>
        </div>
      </div>
    </div>
        </>
      )
}

export default EditPaciente