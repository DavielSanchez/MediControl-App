import ImagenesMenu from "../Components/ImagenesMenu"
import ResumenTabs from "../Components/ResumenTabs"

function Inicio() {
  return (
    <>
    <div className="globalContentContainer">
      <ResumenTabs/>
      <ImagenesMenu/>
    </div>
    </>
  )
}

export default Inicio