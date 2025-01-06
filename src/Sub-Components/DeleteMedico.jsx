import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content';

function DeleteMedico(P) {

    const MySwal = withReactContent(Swal)
    const urlDelete = `${import.meta.env.VITE_API_LINK}/medicos/delete/${P.ID}`


    const Eliminar = async () => {
        MySwal.fire({
            icon: "warning",
            title: "Ten cuidado",
            text: "Estas seguro que quieres eliminar este paciente?",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            showConfirmButton: true,
            confirmButtonText: "Confirmar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(urlDelete, {
                      method: 'DELETE',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    });
              
                    if (response.ok) {
                      const result = await response.json();
                      MySwal.fire("Exito", "Paciente elminado correctamente", "success");
                      window.location.replace("/medicos");
                    } else {
                      MySwal.fire("Error", "No se pudo eliminar el paciente", "error");
                      window.location.replace("/pacientes");
                    }
                  } catch (error) {
                    MySwal.fire("Error", "Hubo un problema al eliminar el paciente", "error");
                    window.location.replace("/medicos");
                  }
            }
        })
        
    }

  return (
    <>
    <button className="btn-danger d-flex align-items-center" onClick={Eliminar}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash me-2" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
        </svg>
        Eliminar
    </button>
    </>
  )
}

export default DeleteMedico