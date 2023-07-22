import Event from "../components/event/Event";
import { events } from "../helpers/EventsList";

const Events = () => {
    return ( <main className="section">
    <div className="container_events">
        <h2>Мероприятия</h2>
        <ul className="events-list">
            {events.map((event, index) => {
                return <Event key={index} title={event.title} img={event.img}
                date={event.date} time={event.time} index={index}/>
            })}

        </ul>
    </div>
</main> );
}
 
export default Events;