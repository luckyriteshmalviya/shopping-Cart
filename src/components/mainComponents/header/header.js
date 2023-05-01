import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [searchValue, setsearchValue] = useState("")
  const navigate = useNavigate();

  function handleInput (e){
      if(e.key==="Enter"){
        e.preventDefault();
        navigate(searchValue? `/?id=${searchValue}`: "/")
      }
  }

  return (
    <header className="header-container">
      <div>
        <Link className="header-link logo" to={"/"}>
         R-Mart
        </Link>
      </div>
      <div className="searchBar">
        <input
          className="searchInput"
          placeholder="Search Here.."
          defaultValue=""
          value={searchValue}
          onChange={(e)=>setsearchValue(e.target.value)}
          onKeyUp={handleInput}
        />
        <div>
        <Link className="header-link" to={searchValue ? `/?id=${searchValue}`: "/"}>
          <i className="bx bx-search"></i>
        </Link>
        </div>
      </div>

      <div>
        <Link className="header-link" to="/">
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
