import Contact from "./Contact";
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
            Home
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            About
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Services
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Team
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
