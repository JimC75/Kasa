import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="container head">
            <img src={logo} alt="" />
            <nav>
                <Link to='/' className='nav-header nav-home'>Accueil</Link>
                <Link to='/about' className='nav-header'>A propos</Link>

            </nav>
        </header>
    )
}