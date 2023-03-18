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
      <div  >
        <Link to={"/total"} style={{display: "flex", justifyContent: "flex-end", alignItems: "center",margin: "1rem", gap: "4px", textDecoration: "none"}}>
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
