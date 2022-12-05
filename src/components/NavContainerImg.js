import logo3 from "../img/camio.jpeg";
import logo1 from "../img/delivery1.jpeg";
import logo2 from "../img/delivery2.jpeg";
import logo4 from "../img/delivery3.jpeg";
import { Carousel } from "antd";
const contentStyle = {
  color: "#fff",
  lineHeight: "50px",
  textAlign: "center",
  background: "#364d79",
};

const NavContainerImg = () => {
  return (
    <div className="img-delivery-container">
      <Carousel autoplay>
        <div>
          <img src={logo3} alt="" />
        </div>
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
  );
};

export default NavContainerImg;
