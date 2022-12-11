import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavSuport from "./components/NavSuport";
import "./index.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Services from "./components/Services";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavSuport />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/servicios" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
