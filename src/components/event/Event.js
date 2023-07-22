import { NavLink } from "react-router-dom";

const Event = ({title, img, date, time, index}) => {
    return ( 
    <NavLink to={`/event/${index}`} className="event">
        <li >
            <img src={img} alt={title} className="event__img"/>
            <h3>{title}</h3>
            <p>{date} | {time}</p>
        </li> 
    </NavLink>
    );
}
 
export default Event;