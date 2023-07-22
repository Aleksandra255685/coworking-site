import footer_logo from "./../../img/footer_logo.svg"

const Footer = () => {
    return ( <footer className="footer">
    <div className="footer_logo">
      <img src={footer_logo} alt=""/>
    </div>
    <div className="footer_text">
      <p>
      © 2023 Национальный исследовательский Томский политехнический университет
      </p>
      <p>
      При использовании материалов активная ссылка на источник обязательна
      </p>
    </div>
  </footer> );
}
 
export default Footer;