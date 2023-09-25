import { useState } from "react"

export default function Accordion({ title, content, list }) {
    const [open, setOpen] = useState(true);

    return (
        <div className={`accordion${open ? ' open' : ''}`}>
            <button onClick={() => setOpen(!open)}><span>{title}</span><span className="arrow"><i className="fa-solid fa-chevron-down"></i></span></button>
            <div className="dropdown-content">
                {!list ?
                    <p>{content}</p> :

                    <ul>{
                        content.map(e =>
                            <li key={e}>{e}</li>
                        )}
                    </ul>
                }
            </div>
        </div>
    )
}