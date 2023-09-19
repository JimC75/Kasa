import { useState, useEffect } from "react";
import CarteLogement from "../components/CarteLogement";
import HomeBanner from "../components/HomeBanner";


export default function Home() {
    const [logements, setLogements] = useState([]);
    useEffect(() => {
        fetch("/logements.json")
            .then(res => res.json())
            .then(data => setLogements(data))
            .catch(erreur => console.log(erreur))
    }, [])
    return (
        <>
            <HomeBanner />
            <div id="home-container">
                {logements.map(log =>
                    <CarteLogement key={log.id} title={log.title} cover={log.cover} id={log.id} />
                )}
            </div>
        </>
    )
}