import { useState, useEffect } from 'react';
import Masculino from '../../public/IMG/Masculino.png';
import Femenino from '../../public/IMG/Femenino.png'
import { formatDistanceToNow } from 'date-fns';
import { differenceInYears } from 'date-fns';
import { es } from 'date-fns/locale';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PacienteCard({ ID }) {
    const [data, setData] = useState([]);
    const url = `${import.meta.env.VITE_API_LINK}/pacientes/id/${ID}`;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    function calculateAge(birthDate) {
        const today = new Date();
        return differenceInYears(today, new Date(birthDate));
    }

    if (!data[0]) {
        return <span className="loader"></span>;
    }

    if (data[0].genero == 'masculino') {
        return (
            <Link 
            to={{pathname: `/pacientes/${data[0]._id}`}}
            state={{ID: ID}}
            >
            <div className="pacienteCardMasculino">
            <div className="card bg-transparent border border-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Masculino} className="img-fluid rounded-start" alt="Paciente Masculino" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-white">
                            <h5 className="card-title">{data[0].nombres} {data[0].apellidos}</h5>
                            <p className="card-text">
                                Edad: {calculateAge(data[0].fechaNacimiento)} años<br />
                                Teléfono: {data[0].contacto.telefono}<br />
                                Cédula: {data[0].documentoIdentidad}
                            </p>
                            <p className="card-text">
                                <small className="text-white">
                                    Última actualización {formatDistanceToNow(new Date(data[0].actualizadoEn), { addSuffix: true, locale: es })}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </Link>
        )
    }else if (data[0].genero == 'femenino') {
        return (
            <Link
            to={{pathname: `/pacientes/${data[0]._id}`}}
            state={{ID: ID}}
            >
            <div className="pacienteCardFemenino">
            <div className="card bg-transparent border border-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={Femenino} className="img-fluid rounded-start" alt="Paciente Masculino" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-white">
                            <h5 className="card-title">{data[0].nombres} {data[0].apellidos}</h5>
                            <p className="card-text">
                                Edad: {calculateAge(data[0].fechaNacimiento)} años<br />
                                Teléfono: {data[0].contacto.telefono}<br />
                                Cédula: {data[0].documentoIdentidad}
                            </p>
                            <p className="card-text">
                                <small className="text-white">
                                    Última actualización {formatDistanceToNow(new Date(data[0].actualizadoEn), { addSuffix: true, locale: es })}
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </Link>
            
        )
    }
}

PacienteCard.propTypes = {
  ID: PropTypes.node.isRequired,
};

export default PacienteCard;