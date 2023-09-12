import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="container">
            <img src={logo} alt="" />
            <nav>
                <Link to='/' className='nav-header'>Home</Link>
                <Link to='/about' className='nav-header'>About</Link>

            </nav>
        </header>
    )
}