import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className='error'>
            <p className="quatre">Erreur de Chargement</p>
            <p className="oops">Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/' className='retour'>Retourner à la page d'accueil</Link>
        </div>
    )
}
