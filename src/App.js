import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Total from "./components/Total Amout/Total";

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/total" element={<Total />} />
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
