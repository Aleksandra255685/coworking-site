import { NavLink } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import t1 from "./../img/taon1.jpg"
import t2 from "./../img/taon2.jpg"
import t3 from "./../img/taon3.jpg"
import t4 from "./../img/taon4.jpg"


const Taon = () => {
    return ( 
    <main className="section">
        <div className="container_coworking">
            <div className="coworking-img" >
                <Carousel>
                    <div className="item item-1"><img src={t1} alt=""/></div>
                    <div className="item item-2"><img src={t2} alt=""/></div>
                    <div className="item item-3"><img src={t3} alt=""/></div>
                    <div className="item item-4"><img src={t4} alt=""/></div>
                </Carousel>
            </div>
            <div className="coworking">
                <h1>Таон</h1>
                <p>МКЦ ТПУ (ул. Усова, 13-в, правое крыло)</p>
                <p> Пространство открыто для всех желающих ежедневно с 9:00 до 23:00</p>
                <p>Это новое открытое пространство для групповой работы студентов. В твоём распоряжении коворкинг-зона, проектор с зрительным залом в виде амфитеатра и фуд-зона</p>
                <div className="timetable_link">
                    <NavLink to="/taon_timetable"> Расписание</NavLink>
                </div>
            </div>
        </div>
    </main>
     );
}
 
export default Taon;