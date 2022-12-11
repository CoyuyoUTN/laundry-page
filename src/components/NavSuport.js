import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import lavIcon from "../img/lavIconP.png";

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
    </Navbar>
  );
};

export default NavSuport;
