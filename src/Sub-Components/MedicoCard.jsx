import { useState, useEffect } from 'react';
import Doctor from '../../public/IMG/Doctor.png';
import { differenceInYears } from 'date-fns';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MedicoCard({ ID }) {
    const [data, setData] = useState([]);
    const url = `${import.meta.env.VITE_API_LINK}/medicos/id/${ID}`;

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const result = await response.json();
            console.log(response)
            setData(result);
        } catch (error) {
            console.error(error);
        }
    };

    // function calculateAge(birthDate) {
    //     const today = new Date();
    //     return differenceInYears(today, new Date(birthDate));
    // }

    if (!data[0]) {
        return <span className="loader"></span>;
    }
        return (
            <Link 
            to={{pathname: `/medicos/${data[0]._id}`}}
            state={{ID: ID}}
            >
            <div className="medicoCard">
            <div className="card bg-transparent border border-0">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={Doctor} className="img-fluid rounded-start" alt="Medico" />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body text-white">
                            <h5 className="card-title">{data[0].nombre}</h5>
                            <p className="card-text">
                                Especialidad: {data[0].especialidad}<br />
                                Teléfono: {data[0].telefono}<br />
                                Email: {data[0].email}
                            </p>
                            {/* <p className="card-text">
                                <small className="text-white">
                                    Última actualización {formatDistanceToNow(new Date(data[0].actualizadoEn), { addSuffix: true, locale: es })}
                                </small>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </Link>
        )
    
}

MedicoCard.propTypes = {
  ID: PropTypes.node.isRequired,
};

export default MedicoCard;