import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header-container">
      <div>
        <Link className="header-link logo" to={"/"}>
          INHERITX
        </Link>
      </div>
      <div className="searchBar">
        <input
          className="searchInput"
          placeholder="Search Here.."
          defaultValue=""
        />
        <div>
          <i className="bx bx-search"></i>
        </div>
      </div>

      <div>
        <Link className="header-link" to={"/"}>
          Home
        </Link>
      </div>
      <div>
        <Link className="header-link" to={"/about"}>
          About
        </Link>
      </div>
      <div>
        <Link className="header-link" to={"/contact"}>
          Contact Us
        </Link>
      </div>
      <div class="header-right">
        <abbr class="login" title="Coming Soon..">
          log in
        </abbr>
        <abbr class="signin" title="Coming Soon..">
          Sign up
        </abbr>
      </div>
    </header>
  );
};

export default Header;
