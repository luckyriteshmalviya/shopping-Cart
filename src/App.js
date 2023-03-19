import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./components/mainComponents/header/header";
import Footer from "./components/mainComponents/footer/footer";
import About from "./Pages/About/About";
import ContactUs from "./Pages/Contact/ContactUs";
import ShopingCart from "./Pages/shopingCart/shopingCart";

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
