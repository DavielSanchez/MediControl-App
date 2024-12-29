import MedicoCard from '../Sub-Components/MedicoCard';
import { useState, useEffect } from 'react';



function MedicoCards({url}) {

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
    <div className="medicosCards mt-5">
        {
            data.map((M) => (
                <MedicoCard ID={M._id} key={M._id}/>
            ))
        }
    </div>
    </>
  )
}

export default MedicoCards