import Logements from "../data/logements.json";
import CarteLogement from "../components/CarteLogement";
import HomeBanner from "../components/HomeBanner";


export default function Home() {
    return (
        <>
            <HomeBanner />
            <div id="home-container">
                {Logements.map(log =>
                    <CarteLogement key={log.id} title={log.title} cover={log.cover} id={log.id} />
                )}
            </div>
        </>
    )
}