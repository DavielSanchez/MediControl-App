import { useLocation } from "react-router-dom";
import MedicoInfo from "../Sub-Components/MedicoInfo";
function MedicoPage() {

    const location = useLocation();
    const { ID } = location.state;

  return (
    <>
    <div className="globalContentContainer">
                <MedicoInfo ID={ID}/>
            </div>
    </>
  )
}

export default MedicoPage