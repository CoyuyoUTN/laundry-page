import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import lavIcon from "../img/lavIconP.png";
import { BsWhatsapp } from "react-icons/bs";
import { IoIosArrowUp } from "react-icons/io";

const NavSuport = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container className="container-navSuport">
        <Navbar.Brand
          href="#home"
          className="firstNav-content  animate__animated animate__bounceInLeft"
        >
          <img alt="" src={lavIcon} className="d-inline-block align-top" />{" "}
          <Link to={"/"}>
            <p className="lav-nav-name">LAVADERO AGÜITAS</p>
          </Link>
        </Navbar.Brand>
      </Container>
      <a
        href="https://api.whatsapp.com/send?phone=5492235492929"
        className="whatsapp"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp className="whatsapp-icon" />
      </a>
      <a href="#up" className="whatsapp-2">
        <IoIosArrowUp className="whatsapp-icon" />
      </a>
    </Navbar>
  );
};

export default NavSuport;
