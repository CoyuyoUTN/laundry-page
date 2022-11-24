import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import NavSuport from "./components/NavSuport";
import "./index.css";
import BannerMain from "./components/BannerMain";
import NavDelivery from "./components/NavDelivery";

function App() {
  return (
    <div className="App">
      <NavSuport />
      <div className="container-content-page">
        <NavBar />
        <BannerMain />
        <NavDelivery />
      </div>
    </div>
  );
}

export default App;
