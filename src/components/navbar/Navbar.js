import { NavLink } from "react-router-dom";
import logo from "./../../img/logo.svg"

const Navbar = () => {
    return ( <nav className="nav">
    <div className="nav-row">
      <NavLink to="/" className="logo">
        <img src={logo} alt=""/>
      </NavLink>
      
      <ul className="nav-list">
        <li><NavLink to="/" className="nav-list-link">Коворкинги</NavLink></li>
        <li><NavLink to="/events" className="nav-list-link">Мероприятия</NavLink></li>
      </ul>
      <div className="tpu-link">
        <a href="https://tpu.ru/"  target="_blank" rel="noreferrer">ТПУ</a>
      </div>
    </div>
  </nav> );
}
 
export default Navbar;