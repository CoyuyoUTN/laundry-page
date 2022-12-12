import logo1 from "../img/delivery1.jpeg";
import logo2 from "../img/delivery2.jpeg";
import logo4 from "../img/delivery3.jpeg";
import { Carousel } from "antd";

const NavContainerImg = () => {
  return (
    <div>
      <div className="carousel-subtitle">
        <p>No nos traigas tu ropa, nosotros vamos por ella!</p>
      </div>
      <div className="img-delivery-container">
        <Carousel autoplay>
          <div>
            <img src={logo1} alt="" />
          </div>
          <div>
            <img src={logo2} alt="" />
          </div>
          <div>
            <img src={logo4} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default NavContainerImg;
