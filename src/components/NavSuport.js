import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import lavIcon from "../img/lavIconP.png";
const NavSuport = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="sm">
      <Container className="container-navSuport">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home" className="firstNav-content">
          <img alt="" src={lavIcon} className="d-inline-block align-top" />{" "}
          <p>LAVADERO AGÜITAS</p>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand href="#action8" className="navBar-data">
            <p>Direccion: Rawson 2191</p>
            <p>Tel: 223-5492929</p>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavSuport;
