import imglocation from "../img/ubicacion.jpg";
import { Image } from "antd";
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
          <a class="menu__link" href="#">
            Inicio
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Sobre nosotros
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Servicios
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Contacto
          </a>
        </li>
      </ul>
      <div className="footerUbication-container">
        <p>Ubicación</p>
        <Image width={300} src={imglocation} />
      </div>
    </footer>
  );
};

export default Footer;
