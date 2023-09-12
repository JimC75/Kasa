import { useParams } from 'react-router-dom'
import Logements from "../data/logements.json";
import LogementDetails from '../components/LogementDetails';

export default function Logement() {
    const { logementId } = useParams();
    const logement = Logements.find(e => e.id == logementId);
    return (
        <div>
            <LogementDetails pictures={logement.pictures} title={logement.title} location={logement.location} tags={logement.tags} host={logement.host} rating={logement.rating} description={logement.description} equipments={logement.equipments} key={logement.id} />
        </div>
    )
}
