import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Total from "./components/Total Amout/Total";
import About from "./Pages/About/About.js";
import ContactUs from "./Pages/Contact/ContactUs";

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/total" element={<Total />} />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
