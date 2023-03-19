import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/mainComponents/header/header";
import Footer from "./components/mainComponents/footer/footer";
import About from "./pages/about/about";
import ContactUs from "./pages/contact/contactUs";
import ShopingCart from "./pages/shopingCart/shopingCart";

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
