import Carousel from "../components/carousel/Carousel";
import f1 from "./../img/foton1.jpg"
import b2 from "./../img/bozon2.jpg"
import b3 from "./../img/bozon3.jpg"
import b4 from "./../img/bozon4.jpg"


const Foton = () => {
    return ( 
    <main className="section">
        <div className="container_coworking">
            <div className="coworking-img" >
                <Carousel>
                    <div className="item item-1"><img src={f1} alt=""/></div>
                    <div className="item item-2"><img src={b2} alt=""/></div>
                    <div className="item item-3"><img src={b3} alt=""/></div>
                    <div className="item item-4"><img src={b4} alt=""/></div>
                </Carousel>
            </div>
            <div className="coworking">
                <h1>Фотон</h1>
                <p>1 корпус ТПУ (ул. Советская 73)</p>
                <p>Пространство доступно для студентов и сотрудников университета в рабочее время корпуса — с 8:00 до 20:00 в будние и выходные дни</p>
                <p>Оно рассчитано примерно на 20 человек и предназначено для самостоятельной и командной работы, а также отдыха. В интерьере использована антикварная историческая мебель из Горного корпуса, например, стол, которому больше 100 лет</p>
                <p>Здесь появился арт-объект — скелет взрослого мамонта, напечатанный на 3D-принтере. Часть костей при этом подлинные</p>
            </div>
        </div>
    </main>
     );
}
 
export default Foton;