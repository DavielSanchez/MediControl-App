import PacienteInfo from "../Sub-Components/PacienteInfo";
import PacienteInfoMedico from "../Sub-Components/PacienteInfoMedico";
import { useLocation } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import EditPaciente from "../Sub-Components/EditPaciente";

function PacientePage() {
    const location = useLocation();
    const { ID } = location.state;

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role 

    if (userRole == 'laboratorista') {
        return(
            <>
            <div className="globalContentContainer">
                <PacienteInfo ID={ID}/>
            </div>
            </>
        )
    }else if (userRole == 'medico') {
        return(
            <>
            <div className="globalContentContainer">
            <div className="tabTitleEdit">
                    <h2>Mantenimiento de pacientes</h2>
                    <h3>
                        <EditPaciente ID={ID}/>
                    </h3>
                    </div>
                <PacienteInfoMedico ID={ID}/>
            </div>
            </>
        )
    }else{
            return(
                <>
                <div className="globalContentContainer">
                    <div className="tabTitleEdit">
                    <h2>Mantenimiento de pacientes</h2>
                    <h3>
                        <EditPaciente ID={ID}/>
                    </h3>
                    </div>
                    <PacienteInfo ID={ID}/>
                </div>
                </>
            )
    }
    
}

export default PacientePage;
