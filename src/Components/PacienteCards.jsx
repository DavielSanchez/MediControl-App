import PacienteCard from "../Sub-Components/PacienteCard"
import { useState, useEffect } from 'react';



function PacienteCards({url}) {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [url]);

      const fetchData = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <>
    <div className="pacientesCards mt-5">
        {
            data.map((M) => (
                <PacienteCard ID={M._id} key={M._id}/>
            ))
        }
    </div>
    </>
  )
}

export default PacienteCards