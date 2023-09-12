import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="container">
            <img src={logo} alt="" />
            <p>© 2023 Kasa. All rights reserved</p>
        </footer>
    )
}