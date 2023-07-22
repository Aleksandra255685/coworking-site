import { NavLink } from "react-router-dom";
import pointer from "./../img/pointer.png"

const Main = () => {
    return (  <main className="section">
    <div className="container" id="coworking-info">
      <div className="coworking-info" >
        <h1>Коворкинги</h1>
        <p>С 2022 года в кампусе ТПУ создаются новые современные коворкинги – неформальные пространства для хобби, учебы и отдыха. Здесь можно познакомиться с новыми людьми, обсудить учебные проекты и задания, выпить кофе и перекусить</p>
      </div>
      <ul className="coworking-list">
        <li className="coworking-list-item"><NavLink to="/taon"><img src={pointer} alt=""/> Таон</NavLink></li>
        <li className="coworking-list-item"><NavLink to="/kvark"><img src={pointer} alt=""/> Очарованный кварк</NavLink></li>
        <li className="coworking-list-item"><NavLink to="/formula"><img src={pointer} alt=""/> Формула</NavLink></li>
        <li className="coworking-list-item"><NavLink to="/neitrino"><img src={pointer} alt=""/> Нейтрино</NavLink> </li>
        <li className="coworking-list-item"><NavLink to="/bozon"><img src={pointer} alt=""/> Бозон</NavLink></li>
        <li className="coworking-list-item"><NavLink to="/foton"><img src={pointer} alt=""/> Фотон</NavLink> </li>
      </ul>
    </div>

    <div className="container">
      <div className="events" id="events">
        <h1>Мероприятия</h1>
        <NavLink to="/events" className="events-link">Подробнее <img src={pointer} alt=""/></NavLink>
      </div>
    </div>
  </main>);
}
 
export default Main;