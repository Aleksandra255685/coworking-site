import { NavLink } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import k1 from "./../img/kvark1.jpg"
import k2 from "./../img/kvark2.jpg"
import k3 from "./../img/kvark3.jpg"
import k4 from "./../img/kvark4.jpg"


const Kvark = () => {
    return ( 
    <main className="section">
        <div className="container_coworking">
            <div className="coworking-img" >
                <Carousel>
                    <div className="item item-1"><img src={k1} alt=""/></div>
                    <div className="item item-2"><img src={k2} alt=""/></div>
                    <div className="item item-3"><img src={k3} alt=""/></div>
                    <div className="item item-4"><img src={k4} alt=""/></div>
                </Carousel>
            </div>
            <div className="coworking">
                <h1>Очарованный кварк</h1>
                <p>Бизнес-инкубатор ТПУ (ул.Белинского 51)</p>
                <p>Пространство открыто для индивидуальной работы с 9:00 до 21:00</p>
                <p>Прощадь коворкинга — более 200 квадратных метров. «Кварк» оборудован компьютерами, зонами для работы, занятий и отдыха</p>
                <p>Также ты можешь провести свое мероприятие или собрание в одном из залов. Сейчас доступны круглый стол для 8 человек, амфитеатр на 30 человек и пространство с телевизором на 15 человек</p>
                <div className="timetable_link">
                <NavLink to="/kvark_timetable"> Расписание</NavLink>
                </div>
            </div>
        </div>
    </main>
     );
}
 
export default Kvark;