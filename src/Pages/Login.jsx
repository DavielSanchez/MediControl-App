import { useState } from 'react'
import MedicLogo from '../../public/IMG/Medic.png'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import '../../public/CSS/Login.css'

function Login() {

  const MySwal = withReactContent(Swal)

    const [username, setUsername] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const url = `${import.meta.env.VITE_API_LINK}/login`

    const handleLogin = async () => {
      try {
        console.log(userPassword);
    
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, userPassword }),
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          MySwal.fire({
            icon: "error",
            title: errorData.message,
            showConfirmButton: true,
          });
          return;
        }
    
        const data = await response.json();
    
        if (data.token) {
          localStorage.setItem('token', data.token);
          window.location.href = '/';
        } else {
          MySwal.fire({
            icon: "error",
            title: "Error al iniciar sesión",
            text: "Intentalo nuevamente.",
            showConfirmButton: true,
          });
        }
      } catch {
        MySwal.fire({
          icon: "error",
          title: "Error al conectar con el servidor",
          text: "Verifica tu conexión y vuelve a intentarlo",
          showConfirmButton: true,
        });
      }
    };
  return (
    <>
    <div className="LoginContainer">
    <div className="LoginBackground"></div>
        <div className="LoginBox">
            <div className="LoginImage">
                <img src={MedicLogo} alt="LogoLogin"/>
            </div>
            <div className="LoginInputs">
            <label htmlFor="userName">Nombre de Usuario</label>
            <div className="input-group">
            <input type="text" id="userName" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => {
                setUsername(e.target.value)
            }}/>
            </div>
            <label htmlFor="userPassword">Contraseña</label>
            <div className="input-group">
            <input type="password" id="userPassword" aria-describedby="basic-addon3 basic-addon4" onChange={(e) => {
                setUserPassword(e.target.value)
            }}/>
            </div>
            </div>
            <div className="custom-btn-container">
            <button type="button" className="custom-btn" onClick={handleLogin}>Entrar</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login