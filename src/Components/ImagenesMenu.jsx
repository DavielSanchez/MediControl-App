import ImagenMenu from '../Sub-Components/ImagenMenu'
import ImagenMenuBloqueado from '../Sub-Components/ImagenMenuBloqueado'
import { jwtDecode } from "jwt-decode";
import { Navigate  } from 'react-router-dom';
import '../../public/CSS/Home.css'

function ImagenesMenu() {


    const token = localStorage.getItem('token');
    
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role 
      console.log(userRole)

      if(userRole == 'administrador'){
        return (
            <>
            <section className="imagenes-menu">
                <ImagenMenu titulo='Gestor de citas medicas'/>
                <ImagenMenu titulo='Gestor de pacientes'/>
                <ImagenMenu titulo='Resultados de pruebas'/>
                <ImagenMenu titulo='Gestor de medicos'/>
                <ImagenMenu titulo='Gestor de pruebas medicas'/>
                <ImagenMenu titulo='Gestor de usuarios'/>
        </section>
            </>
        )
      }else if(userRole == 'asistente'){
        return (
            <>
            <section className="imagenes-menu">
                <ImagenMenu titulo='Gestor de citas medicas'/>
                <ImagenMenu titulo='Gestor de pacientes'/>
                <ImagenMenu titulo='Resultados de pruebas'/>
                <ImagenMenuBloqueado titulo='Gestor de medicos'/>
                <ImagenMenuBloqueado titulo='Gestor de pruebas medicas'/>
                <ImagenMenuBloqueado titulo='Gestor de usuarios'/>
        </section>
            </>
        )
      }else if(userRole == 'laboratorista'){
        return (
            <>
            <section className="imagenes-menu">
                <ImagenMenu titulo='Gestor de citas medicas'/>
                <ImagenMenu titulo='Gestor de pacientes'/>
                <ImagenMenu titulo='Resultados de pruebas'/>
                <ImagenMenuBloqueado titulo='Gestor de medicos'/>
                <ImagenMenuBloqueado titulo='Gestor de pruebas medicas'/>
                <ImagenMenuBloqueado titulo='Gestor de usuarios'/>
        </section>
            </>
        )
      }else if(userRole == 'medico'){
        return (
            <>
            <section className="imagenes-menu">
                <ImagenMenu titulo='Gestor de citas medicas'/>
                <ImagenMenu titulo='Gestor de pacientes'/>
                <ImagenMenu titulo='Resultados de pruebas'/>
                <ImagenMenuBloqueado titulo='Gestor de medicos'/>
                <ImagenMenuBloqueado titulo='Gestor de pruebas medicas'/>
                <ImagenMenuBloqueado titulo='Gestor de usuarios'/>
        </section>
            </>
        )
      }else{
        return <Navigate to="/login" />;
      }
}

export default ImagenesMenu