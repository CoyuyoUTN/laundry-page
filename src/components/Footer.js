import imglocation from "../img/ubicacion.jpg";
import { TfiLocationPin } from "react-icons/tfi";
import { BsCalendarCheck } from "react-icons/bs";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="home">
            Inicio
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#aboutus">
            Sobre nosotros
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#service">
            Servicios
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#contact">
            Contacto
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#delivery">
            Delivery
          </a>
        </li>
      </ul>
      <div className="footerUbication-container">
        <div className="ubication-container">
          <p>
            <TfiLocationPin /> Ubicación
          </p>
          <a href="https://www.google.com/maps/place/Lavadero+Ag%C3%BCitas/@-38.0094672,-57.5492007,15z/data=!4m5!3m4!1s0x0:0xe4cd380779283b80!8m2!3d-38.0094605!4d-57.5491948">
            <img src={imglocation} alt="" />
          </a>
        </div>
        <div className="horary-container">
          <p>
            <BsCalendarCheck /> Horarios
          </p>
          <div className="timeLists">
            <dl>
              <li>Lunes</li>
              <li>Martes</li>
              <li>Miércoles</li>
              <li>Jueves</li>
              <li>Viernes</li>
              <li>Sábado</li>
              <li>Domingo</li>
            </dl>
            <ul>
              <li>8:00-18:00</li>
              <li>8:00-18:00</li>
              <li>8:00-18:00</li>
              <li>8:00-18:00</li>
              <li>8:00-18:00</li>
              <li>8:00-13:00</li>
              <li>Cerrado</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
