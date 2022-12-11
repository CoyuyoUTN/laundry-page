import { FaWater } from "react-icons/fa";
import { WiStrongWind } from "react-icons/wi";
import { MdOutlineIron } from "react-icons/md";
import { IoIosWater } from "react-icons/io";
import { Link } from "react-router-dom";
import BannerService from "./BannerService";

const MainServices = () => {
  return (
    <div>
      {" "}
      <BannerService />
      <div className="body-card-services" id="service">
        <div class="container">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <FaWater className="fa" />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3 className="h3-services">Lavado</h3>
                <p className="p-services">
                  Tráiganos toda su ropa de una y se la devolveremos impecable.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <WiStrongWind className="fa" />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3 className="h3-services">Secado</h3>
                <p className="p-services">
                  Le secamos la ropa para que queda calentita y perfumada!
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <MdOutlineIron className="fa" />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3 className="h3-services">Planchado</h3>
                <p className="p-services">
                  Servicio rápido y de gran comodidad. ¡Tu ropa lista para usar!
                  Cada prenda se plancha a mano, con dedicación y cuidado
                  especial.
                </p>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <div class="icon">
                  <IoIosWater className="fa" />
                </div>
              </div>
            </div>
            <div class="face face2">
              <div class="content">
                <h3 className="h3-services">Desmanchado</h3>
                <p className="p-services">
                  Trabajamos con todo tipo de manchas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to={"/servicios"}>
          <button className="button__send btn-mrn" id="button">
            ¡Vea todos nuestros servicios!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MainServices;
