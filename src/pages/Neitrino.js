import Carousel from "../components/carousel/Carousel";
import n1 from "./../img/neitrino1.jpg"
import n2 from "./../img/neitrino2.jpg"
import n3 from "./../img/neitrino3.jpg"
import n4 from "./../img/neitrino4.jpg"


const Neitrino = () => {
    return ( 
    <main className="section">
        <div className="container_coworking">
            <div className="coworking-img" >
                <Carousel>
                    <div className="item item-1"><img src={n1} alt=""/></div>
                    <div className="item item-2"><img src={n2} alt=""/></div>
                    <div className="item item-3"><img src={n3} alt=""/></div>
                    <div className="item item-4"><img src={n4} alt=""/></div>
                </Carousel>
            </div>
            <div className="coworking">
                <h1>Нейтрино</h1>
                <p>19 корпус ТПУ (ул. Усова, 4-a)</p>
                <p>Пространство открыто для всех желающих ежедневно с 8:00 до 20:00</p>
                <p>«Нейтрино» – многофункциональное трансформируемое пространство для самостоятельного обучения и мероприятий. Оно рассчитано на 40 человек</p>
                <p>Здесь есть зоны отдыха и переговоров, диваны и кресла, мобильные столы, маркерная доска и широкоформатный экран. Студенты могут здесь учиться, работать над совместными проектами, отдыхать</p>
                
            </div>
        </div>
    </main>

     );
}
 
export default Neitrino;