import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar
      bg="light"
      expand="md"
      variant="light"
      className=" sup-nav sup-nav-child"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-nav">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#aboutus">Nosotros</Nav.Link>
            <Nav.Link href="#delivery">Delivery</Nav.Link>
            <Nav.Link href="#service">Servicios</Nav.Link>
            <Nav.Link href="#contact">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
