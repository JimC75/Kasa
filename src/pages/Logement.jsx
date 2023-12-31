import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import LogementDetails from '../components/LogementDetails';


export default function Logement() {
    const { logementId } = useParams();
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("/logements.json")
            .then(res => res.json())
            .then(Logements => {
                const logementEnCours = Logements.find(e => e.id == logementId);
                logementEnCours ? setLogement(logementEnCours) : navigate("/404");

            })
            .catch(erreur => console.log(erreur))
    }, [])
    return (
        <div>
            {logement == null ? <div>Chargement en cours...</div> :
                <LogementDetails pictures={logement.pictures} title={logement.title} location={logement.location} tags={logement.tags} host={logement.host} rating={logement.rating} description={logement.description} equipments={logement.equipments} key={logement.id} />}
        </div>
    )
}
