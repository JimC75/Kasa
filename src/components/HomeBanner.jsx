import BannerImg from "../images/home-banner.jpg"

export default function HomeBanner() {
    return <div id="home-banner">
        <img src={BannerImg} alt="bannière Kasa" />
        <div className="overlay">
            <h2>Chez vous,<span id="line-break"></span> partout et ailleurs</h2>
        </div>
    </div>
}