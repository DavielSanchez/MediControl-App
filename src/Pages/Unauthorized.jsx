
import '../../public/CSS/Home.css'
import Medic from '../../public/IMG/Medic.png'
function Unauthorized() {


  return (
    <>
    <div className="containerUnauthorized d-flex justify-content-center align-items-center">
      <div className="container">
      <div className="containerImage d-flex justify-content-center">
      <img src={Medic} alt="Logo medico" width={'50%'} />
      </div>
      <div className="containerText mt-5">
      <h3 className='text-center'>Hola, no estás autorizado para seguir más allá de este punto! <br />Contacta a soporte si crees que hay algun problema.</h3>
      <div className="links d-flex justify-content-center mt-5">
        <a className='btn-primary' href="/">Ir al inicio</a>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Unauthorized