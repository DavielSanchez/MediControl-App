import ImagenMenu from '../Sub-Components/ImagenMenu'
import ImagenMenuBloqueado from '../Sub-Components/ImagenMenuBloqueado'
import { jwtDecode } from "jwt-decode";
import { Navigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../../public/CSS/Home.css'

function ImagenesMenu() {


    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role 
    const userName = decodedToken.name

      if(userRole == 'administrador'){
        return (
            <>
            <p className='title'>{userName}, Administrador</p>
            <section className="imagenes-menu">
                <ImagenMenu titulo='Gestor de citas medicas'/>
                <Link className='text-black' to={'/pacientes'}><ImagenMenu titulo='Gestor de pacientes'/></Link>
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
            <p className='title'>{userName}, Asistente</p>
            <section className="imagenes-menu">
                <ImagenMenu titulo='Gestor de citas medicas'/>
                <Link className='text-black' to={'/pacientes'}><ImagenMenu titulo='Gestor de pacientes'/></Link>
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
            <p className='title'>{userName}, Laboratorista</p>
            <section className="imagenes-menu">
                <ImagenMenu titulo='Gestor Resultados de pruebas'/>
                <Link className='text-black' to={'/pacientes'}><ImagenMenu titulo='Pacientes'/></Link>
                <ImagenMenuBloqueado titulo='Citas medicas'/>
                <ImagenMenuBloqueado titulo='Gestor de medicos'/>
                <ImagenMenuBloqueado titulo='Gestor de pruebas medicas'/>
                <ImagenMenuBloqueado titulo='Gestor de usuarios'/>
        </section>
            </>
        )
      }else if(userRole == 'medico'){
        return (
            <>
            <p className='title'>{userName}, Medico</p>
            <section className="imagenes-menu">
                <ImagenMenu titulo='Citas Medicas'/>
                <Link className='text-black' to={'/pacientes'}><ImagenMenu titulo='Pacientes'/></Link>
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