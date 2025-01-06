import { useState, useEffect } from "react"

function AddPaciente() {


    
  return (
    <>
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Nuevo Paciente
</button>

<div className="modal modal-xl fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Nuevo Paciente</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <h3 className="fs-5">Datos Personales</h3>
        <div className="row">
            <div className="col-12 col-sm-6">
                <label htmlFor="nombres" className="form-label mt-4">Nombre(s)</label>
                <input type="text" id="nombres" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className="col-12 col-sm-6">
                <label htmlFor="apellidos" className="form-label mt-4">Apellido(s)</label>
                <input type="text" id="apellidos" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className="col-12 col-sm-6">
                <label htmlFor="nacimiento" className="form-label mt-4">Fecha de Nacimiento</label>
                <input type="date" id="nacimiento" className="form-control" aria-describedby="passwordHelpBlock" onChange={(e) => console.log(e.target.value)}/>
            </div>
            <div className="col-12 col-sm-6">
                <label htmlFor="genero" className="form-label mt-4">Genero</label>
                <select className="form-select form-select-lg mb-3" id="genero" aria-label="Large select example">
                    <option selected disabled>Open this select menu</option>
                    <option defaultValue="masculino">Masculino</option>
                    <option defaultValue="femenino">Femenino</option>
                </select>
            </div>
            <div className="col-12 col-sm-6">
                <label htmlFor="documentoId" className="form-label mt-4"># Documento de identidad</label>
                <input type="text" id="documentoId" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className="col-12 col-sm-6">
                <label htmlFor="estadoCivil" className="form-label mt-4">Estado Civil</label>
                <select className="form-select form-select-lg mb-3" id="estadoCivil" aria-label="Large select example">
                    <option selected disabled>Open this select menu</option>
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
                <input type="text" id="telefono" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className="col-12 col-sm-6">
                <label htmlFor="email" className="form-label mt-4">Email</label>
                <input type="email" id="email" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
        </div>

        <h3 className="mt-4 fs-5">Contacto de emergencia</h3>
        <div className="row">
            <div className="col-12 col-sm-6">
                <label htmlFor="nombre911" className="form-label mt-4">Nombre</label>
                <input type="text" id="nombre911" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className="col-12 col-sm-6">
                <label htmlFor="email" className="form-label mt-4">Relacion</label>
                <input type="text" id="email" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className="col-12 col-sm-6">
                <label htmlFor="email" className="form-label mt-4">Telefono</label>
                <input type="text" id="email" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
        </div>

        <h3 className="mt-4 fs-5">Datos seguro</h3>
        <div className="row">
            <div className="col-12 col-sm-6">
                <label htmlFor="seguroProveedor" className="form-label mt-4">Proveerdor</label>
                <input type="text" id="seguroProveedor" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className="col-12 col-sm-6">
                <label htmlFor="seguroPoliza" className="form-label mt-4">No. de Poliza</label>
                <input type="text" id="seguroPoliza" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
            <div className="col-12 col-sm-6">
                <label htmlFor="seguroCobertura" className="form-label mt-4">Detalles cobertura</label>
                <input type="text" id="seguroCobertura" className="form-control" aria-describedby="passwordHelpBlock"/>
            </div>
        </div>


      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default AddPaciente