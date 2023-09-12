import starActive from '../images/star-active.svg';
import starInactive from '../images/star-inactive.svg';

export default function RatingStars({ rating }) {
    const tab = [];
    for (let i = 0; i < 5; i++) {
        const star = <img src={i < rating ? starActive : starInactive} key={i} />;
        tab.push(star);
    }
    return (
        <div className='ratings'>
            {tab}
        </div>
    )
}