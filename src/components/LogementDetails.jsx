import { Link } from "react-router-dom"
import Carousel from "./Carousel"
import RatingStars from "./RatingStars"
import Accordion from "./Accordion"
import NameSeparator from "./NameSeparator"

export default function LogementDetails({ pictures, title, location, tags, host, rating, description, equipments }) {
    console.log(host.name)
    return (
        <div className='grid-container'>
            <div className="div1">
                <Carousel pictures={pictures} />
            </div>
            <div className="div2">
                <div id="div2-left">
                    <h2>{title}</h2>
                    <p>{location}</p>
                    <ul id="tag-list">
                        {tags.map(tag =>
                            <li key={tag}>{tag}</li>
                        )}
                    </ul>
                </div>
                <div id="div2-right">
                    <div id="host-div">
                        {/* <p>{host.name}</p> */}
                        <NameSeparator name={host.name} />
                        <img src={host.picture} alt={"picture of " + host.name} />
                    </div>
                    <div id="rating-stars">
                        <RatingStars rating={rating} />
                    </div>
                </div>
            </div>
            <div className="div3">
                <Accordion title="Description" content={description} />
            </div>
            <div className="div4">
                <Accordion title="Description" content={equipments} list={true} />
                {/* <button><span className="to-upper-case">é</span>quipements<span className="arrow-up">^</span><span className="arrow-down">v</span></button>
                <ul id="equipments-list">
                    {equipments.map(e =>
                        <li key={e}>{e}</li>
                    )}
                </ul> */}
            </div>
        </div>)
}