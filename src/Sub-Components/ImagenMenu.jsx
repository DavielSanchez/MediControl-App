import Imagen from '../../public/IMG/salud-digital-el-concepto-que-revoluciono-la-atencion-medica.png'
function ImagenMenu(e) {
  return (
    <>
    <div className="imagenMenu">
        <img src={Imagen} alt="" width={'100%'} />
        <p>{e.titulo}</p>
    </div>
    </>
  )
}

export default ImagenMenu