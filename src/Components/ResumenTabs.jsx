import ResumenTab from '../Sub-Components/ResumenTab';
import { jwtDecode } from "jwt-decode";
import { Navigate  } from 'react-router-dom';
function ResumenTabs() {

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role

    if(userRole == 'administrador'){
        return (
            <>
            <section className="ResumenTabLayout">
                <ResumenTab Title='Usuarios' Value='11'/>
                <ResumenTab Title='Medicos' Value='32'/>
                <ResumenTab Title='Pruebas' Value='52'/>
        </section>
            </>
        )
      }else if(userRole == 'asistente'){
        return (
            <>
            <section className="ResumenTabLayout">
                <ResumenTab Title='Citas Pendientes' Value='25'/>
                <ResumenTab Title='Pacientes' Value='85'/>
                <ResumenTab Title='Medicos' Value='2'/>
        </section>
            </>
        )
      }else if(userRole == 'laboratorista'){
        return (
            <>
            <section className="ResumenTabLayout">
                
        </section>
            </>
        )
      }else if(userRole == 'medico'){
        return (
            <>
            <section className="ResumenTabLayout">
                
        </section>
            </>
        )
      }else{
        return <Navigate to="/login" />;
      }
}

export default ResumenTabs