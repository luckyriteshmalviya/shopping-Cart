import { useEffect } from "react";
import "./Section.css";
import { useDispatch } from "react-redux";
import { productDetails } from "../../redux/createStore/productSlice";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import ShowProduct from "../ShowProduct/ShowProduct";
import ShopingCart from "../../assets/images/shopping-cart.png";
import { MidSizeButton } from "../../Components/Buttons/Button";

const Section = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetails());
  }, []);

  return (
    <>
      <div className="section-one-header">
        <abbr className="section-one-header-left-part" title="coming soon...">
          <div>Filter</div>
          <div> / </div>
          <div>Sort</div>
        </abbr>
        <Link className="section-one-go-to-cart-link" to={"/total"}>
          <MidSizeButton text="Go to Shoping Cart" />
          <img src={ShopingCart} alt="shoping-cart" width="35px" />
        </Link>
      </div>

      <div className="section-one-main-container">
        <ShowProduct />
        <Cart />
      </div>
    </>
  );
};

export default Section;
