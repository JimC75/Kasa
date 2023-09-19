import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="container head">
            <img src={logo} alt="" />
            <nav>
                <NavLink to='/' className={({ isActive }) => `nav-header nav-home ${isActive ? "active" : ""}`}>Accueil</NavLink>
                <NavLink to='/about' className='nav-header'>A propos</NavLink>

            </nav>
        </header>
    )
}