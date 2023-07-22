import { useParams } from 'react-router-dom';
import {events} from './../helpers/EventsList';

const Event = () => {
    const {id} = useParams();
    const event = events[id];
    
    return ( 
    <main className="section">
        <div className="container_event">
            <div className="event_info">
                <h1 className='title'>{event.title}</h1>
                <div>
                    <p className="description">{event.description}</p>
                    <p className="venues"><b>Где?</b>   {event.venues}</p>
                    <p className="time"><b>Когда?</b>   {event.date} в {event.time}</p>
                </div>
                <div className="event_link">
                    <a href={event.link}  target="_blank"  rel="noreferrer" >Зарегистрироваться</a>
                </div>
            </div>
            <img src={event.img} alt={event.title}/>
        </div>
    </main> );
}
 
export default Event;