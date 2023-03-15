import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return <div className="header-container">
  <h1><Link className="link" to={"/about"}>About</Link></h1>
  <h1><Link className="link" to={"/"}>Inheritx</Link></h1>
  <h1><Link className="link" to={"/contact"}>Contact</Link></h1>
  </div>;
};

export default Header;
