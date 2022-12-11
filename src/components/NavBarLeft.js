import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBarLeft() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg="light"
          expand={expand}
          fixed="top"
          className="mb-3 sup-nav sup-nav-child"
        >
          <Container fluid>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton></Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="me-auto navbar-nav">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#aboutus">Nosotros</Nav.Link>
                  <Nav.Link href="#delivery">Delivery</Nav.Link>
                  <Nav.Link href="#service">Servicios</Nav.Link>
                  <Nav.Link href="#contact">Contacto</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBarLeft;
