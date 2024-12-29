import { useState, useEffect } from 'react';
import Search from '../Sub-Components/Search'
import AddPaciente from '../Sub-Components/AddPaciente';
import '../../public/CSS/Pacientes.css'
import { jwtDecode } from "jwt-decode";
import { Navigate } from 'react-router-dom';
import PacienteCards from '../Components/PacienteCards';


function Pacientes() {

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role 
    const [url, setUrl] = useState(`${import.meta.env.VITE_API_LINK}/pacientes`)
    const baseUrl = `${import.meta.env.VITE_API_LINK}/pacientes`
    const [debounceTimeout, setDebounceTimeout] = useState(null);
    const [query, setQuery] = useState('')


    // const handleSearchResults = (results) => {
    //     console.log("Resultados recibidos:", results);
    //     console.log(results);
    //     if (!results) {
    //         console.log(url)
    //     }else if(results){
    //     setUrl(`${import.meta.env.VITE_API_LINK}/pacientes/name/${results}`)
    //     console.log(url)
    // }};

    // const handleSearchResults = (results) => {
    //     console.log("Resultados recibidos:", results);
    //     if (!results || results.trim() === "") {
    //       setUrl(baseUrl);
    //     } else {
    //       setUrl(`${import.meta.env.VITE_API_LINK}/pacientes/name/${results}`);
    //     }
    //     console.log("URL actualizada:", url);
    //   };

    useEffect(() => {
        if (debounceTimeout) clearTimeout(debounceTimeout);
    
        const timeout = setTimeout(() => {
          if (!query.trim()) {
            setUrl(baseUrl);
          } else {
            setUrl(`${import.meta.env.VITE_API_LINK}/pacientes/name/${query}`);
          }
        }, 100);
    
        setDebounceTimeout(timeout);
    
        return () => clearTimeout(timeout);
      }, [query]);
    
      const handleSearchResults = (results) => {
        setQuery(results);
      };



    if(userRole == 'administrador' || userRole == 'asistente'){
        return(
            <>
            <div className="globalContentContainer">
                <p className='title'>Pacientes</p>
                <div className="SearchAndAdd">
                <Search placeholder="Buscar paciente por su nombre" onResults={handleSearchResults}/>
                <AddPaciente/>
                </div>
                <PacienteCards url={url}/>
            </div>
    </>
        )
    }else if (userRole == 'medico') {
        return(
            <>
            <div className="globalContentContainer">
                <p className='title'>Pacientes</p>
                <div className="SearchAndAdd">
                <Search url={url} placeholder="Buscar paciente por su nombre" onResults={handleSearchResults}/>
                </div>
                <PacienteCards url={url}/>
            </div>
    </>
        )
    }else if (userRole == 'laboratorista') {
        return(
            <>
            <div className="globalContentContainer">
                <p className='title'>Pacientes</p>
                <div className="SearchAndAdd">
                <Search url={url} placeholder="Buscar paciente por su nombre" onResults={handleSearchResults}/>
                </div>
                <PacienteCards url={url}/>
            </div>
    </>
        )
    }else{
        <Navigate to={'/login'}/>
    }

}

export default Pacientes