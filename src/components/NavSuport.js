import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import lavIcon from "../img/lavIconP.png";
import { BsWhatsapp } from "react-icons/bs";
import { BiDirections } from "react-icons/bi";

const NavSuport = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
      <Container className="container-navSuport">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand
          href="#home"
          className="firstNav-content wow animate__animated animate__bounceInLeft"
        >
          <img alt="" src={lavIcon} className="d-inline-block align-top" />{" "}
          <p>LAVADERO AGÜITAS</p>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand
            href="#action8"
            className="navBar-data wow animate__animated animate__bounceInRight"
          >
            <p>
              <BiDirections /> Direccion: Rawson 2191
            </p>
            <p>
              <BsWhatsapp /> Tel: 223-5492929
            </p>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavSuport;
