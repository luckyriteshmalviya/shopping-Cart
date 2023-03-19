import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Templates/Header/Header";
import Footer from "./Templates/Footer/Footer";
import About from "./Pages/About/About.js";
import ContactUs from "./Pages/Contact/ContactUs";
import ShopingCart from "./Pages/Total Amout/Total";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/total" element={<ShopingCart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
