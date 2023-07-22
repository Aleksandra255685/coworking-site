import { NavLink } from "react-router-dom";import 
Carousel from "../components/carousel/Carousel";
import f1 from "./../img/formula1.jpg"
import f2 from "./../img/formula2.jpg"
import f3 from "./../img/formula3.jpg"
import f4 from "./../img/formula4.jpg"


const Formula = () => {
    return (
    <main className="section">
        <div className="container_coworking">
            <div className="coworking-img" >
                <Carousel>
                    <div className="item item-1"><img src={f1} alt=""/></div>
                    <div className="item item-2"><img src={f2} alt=""/></div>
                    <div className="item item-3"><img src={f3} alt=""/></div>
                    <div className="item item-4"><img src={f4} alt=""/></div>
                </Carousel>
            </div>
            <div className="coworking">
                <h1>Формула</h1>
                <p>Главный корпус ТПУ (пр.Ленина 30)</p>
                <p>Пространство открыто для индивидуальной работы с 9:00 до 20:00</p>
                <p>Плюс одно место для твоих событий! Новое пространство «Формула» теперь можно забронировать для групповых мероприятий</p>
                <p>Если ты хочешь поучиться, встретиться с друзьями или отдохнуть в перерывах между парами — «Формула» открыта и записываться туда не нужно</p>
                <div className="timetable_link">
                <NavLink to="/formula_timetable"> Расписание</NavLink>
                </div>
            </div>
        </div>
    </main>
    
     );
}
 
export default Formula;