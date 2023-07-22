import { Dialog,Tab } from "@headlessui/react";
import { useState } from "react";
import { IoIosClose } from 'react-icons/io'

const TimetableF = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return ( 
    <main className="section">
        <div className="container_timetable" >
            <iframe className="frame" src="https://teamup.com/ksydby7ndwaw1wa3fm" title="formula">
            </iframe>
            <button className="open" onClick={() => setIsOpen(true)}>Забронировать</button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
            <div className="bg">
                <Dialog.Panel className="popup">
                    <button className="close" onClick={() => setIsOpen(false)}><IoIosClose/></button>
                    <Tab.Group>
                        <Tab.List className="tab_list">
                            <Tab className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}>Личное</Tab>
                            <Tab className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}>Публичное</Tab>
                        </Tab.List>
                        <Tab.Panels>
                            <Tab.Panel>
                                <form  className={toggleState === 1 ? "content  active-content" : "content"}>
                                    <div>
                                        <h3><strong>Контактная информация </strong></h3>
                                        <input type="text" required="" name="name" placeholder="ФИО" ></input>
                                        <input type="tel" required="" name="tel" placeholder="Контактный телефон"></input>
                                    </div>
                                    <div>
                                        <h3><strong>Мероприятие</strong></h3>
                                        <input type="text" required="" name="title" placeholder="Название мероприятия" ></input>
                                        <input type="date" required="" name="date" placeholder="Дата" ></input>
                                        <input type="time" required="" name="time" placeholder="Время" ></input>
                                        <input type="number" required="" name="number" placeholder="Количество участников" ></input>
                                    </div>
                                </form>
                            </Tab.Panel>
                            <Tab.Panel  className={toggleState === 2 ? "content  active-content" : "content"}>
                            <form>
                                    <div>
                                        <h3><strong>Контактная информация</strong></h3>
                                        <input type="text" required="" name="name" placeholder="ФИО" ></input>
                                        <input type="tel" required="" name="tel" placeholder="Контактный телефон"></input>
                                    </div>
                                    <div>
                                        <h3><strong>Мероприятие</strong></h3>
                                        <input type="text" required="" name="title" placeholder="Название мероприятия" ></input>
                                        <input type="date" required="" name="date" placeholder="Дата" ></input>
                                        <input type="time" required="" name="time" placeholder="Время" ></input>
                                        <input type="number" required="" name="number" placeholder="Количество участников" ></input>
                                        <textarea placeholder="Описание мероприятия" name="message" id="message"></textarea>
                                        <label for="myfile">Афиша:</label>
                                        <input type="file" id="file" name="file"></input>
                                    </div>
                                </form>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                    <button className="send">Отправить</button>
                </Dialog.Panel>
            </div>
            </Dialog>
        </div>
    </main>
        
    
    );
}
 
export default TimetableF;