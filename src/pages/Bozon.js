import Carousel from "../components/carousel/Carousel";
import b1 from "./../img/bozon1.jpg"
import b2 from "./../img/bozon2.jpg"
import b3 from "./../img/bozon3.jpg"
import b4 from "./../img/bozon4.jpg"


const Bozon = () => {
    return ( 
    <main className="section">
        <div className="container_coworking">
            <div className="coworking-img" >
                <Carousel>
                    <div className="item item-1"><img src={b1} alt=""/></div>
                    <div className="item item-2"><img src={b2} alt=""/></div>
                    <div className="item item-3"><img src={b3} alt=""/></div>
                    <div className="item item-4"><img src={b4} alt=""/></div>
                </Carousel>
            </div>
            <div className="coworking">
                <h1>Бозон</h1>
                <p>20 корпус ТПУ (пр. Ленина 2 стр 5)</p>
                <p>Пространство доступно для студентов и сотрудников университета в рабочее время корпуса — с 8:00 до 20:00 в будние и выходные дни</p>
                <p>В студенческой зоне находятся уютные диваны и кресла, мобильные столы, стулья, маркерная доска, широкоформатный экран, теннисный стол, дартс, спортивный уголок. Здесь можно учиться, работать над проектами, проводить мероприятия и перекусывать. В преподавательской зоне есть место для переговоров, отдыха и принятия пищи</p>
            </div>
        </div>
    </main>
     );
}
 
export default Bozon;