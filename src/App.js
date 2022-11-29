import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavSuport from "./components/NavSuport";
import "./index.css";
import BannerMain from "./components/BannerMain";
import NavDelivery from "./components/NavDelivery";
import AboutUs from "./components/AboutUs";
import ImagesLav from "./components/ImagesLav";
import NavContainerImg from "./components/NavContainerImg";
import DaoProducts from "./components/DaoProducts";
import DaoPlancha from "./components/DaoPlancha";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import NavContact from "./components/NavContact";

function App() {
  return (
    <div className="App">
      <NavSuport />
      <div className="container-content-page">
        <NavBar />
        <BannerMain />
        <AboutUs />
        <ImagesLav />
        <NavDelivery />
        <NavContainerImg />
        <NavContact />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
