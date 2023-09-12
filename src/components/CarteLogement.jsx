import { Link } from 'react-router-dom'

export default function CarteLogement({ title, cover, id }) {
    return (
        <Link to={'logement/' + id} className='carte-logement' >
            <img src={cover} alt="cover" />
            <h2>{title}</h2>
        </Link >
    )
}
