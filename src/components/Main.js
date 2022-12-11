import NavBar from "./NavBar";
import BannerMain from "./BannerMain";
import NavDelivery from "./NavDelivery";
import AboutUs from "./AboutUs";
import ImagesLav from "./ImagesLav";
import NavContainerImg from "./NavContainerImg";
import Contact from "./Contact";
import NavContact from "./NavContact";
import MainServices from "./MainServices";
import Footer from "./Footer";
import NavBarLeft from "./NavBarLeft";

const Main = () => {
  return (
    <div className="container-content-page">
      <NavBar />
      <BannerMain />
      <AboutUs />
      <ImagesLav />
      <NavDelivery />
      <NavContainerImg />
      <MainServices />
      <NavContact />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
