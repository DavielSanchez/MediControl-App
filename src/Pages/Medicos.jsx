import { useState, useEffect } from 'react';
import Search from '../Sub-Components/Search'
import '../../public/CSS/Medicos.css'
// import { Navigate } from 'react-router-dom';
import AddMedico from '../Sub-Components/AddMedico';
import MedicoCards from '../Components/MedicoCards';

function Medicos() {

    const [url, setUrl] = useState(`${import.meta.env.VITE_API_LINK}/medicos`)
    const baseUrl = `${import.meta.env.VITE_API_LINK}/medicos`
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const [query, setQuery] = useState('')

    useEffect(() => {
        if (debounceTimeout) clearTimeout(debounceTimeout);
    
        const timeout = setTimeout(() => {
          if (!query.trim()) {
            setUrl(baseUrl);
          } else {
            setUrl(`${import.meta.env.VITE_API_LINK}/medicos/name/${query}`);
          }
        }, 100);
    
        setDebounceTimeout(timeout);
    
        return () => clearTimeout(timeout);
      }, [query]);

    const handleSearchResults = (results) => {
        setQuery(results);
      };

  return (
    <>
    <div className="globalContentContainer">
        <p className='title'>Medicos</p>
            <div className="SearchAndAdd">
                <Search placeholder="Buscar doctor por su nombre" onResults={handleSearchResults}/>
                <AddMedico/>
            </div>
            <MedicoCards url={url}/>
    </div>
    </>
  )
}

export default Medicos