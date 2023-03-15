
const Navbar = () => {

  return (
    <div className="navbar-main-Container">
      <div className="navbar-content">
        
        <div
          className="navbar-options" 
        >
          Header
          <div className="navbar-nav">
            <div className="nav-item">
              {/* <Link to="/" className="nav-link" aria-current="page"> */}
                {/* Home */}
              {/* </Link> */}
            </div>
            
            <div className="nav-item">
              {/* <Link  className="nav-link" aria-current="page" to="/about"> */}
                {/* About */}
              {/* </Link> */}
            </div>
            <div className="nav-item">
              {/* <Link className="nav-link" to="/contact"> */}
                {/* Contact */}
              {/* </Link> */}
            </div>
          </div>
         
        </div>
        <button>Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
