import { useEffect, lazy, Suspense } from "react";
import "./section.css";
import { useDispatch } from "react-redux";
import { productDetails } from "../../../redux/productSlice";
import CartList from "../cartList/cartList";
import { Link } from "react-router-dom";
import ShopingCart from "../../../assets/images/shopping-cart.png";
import { MidSizeButton } from "../../../components/subComponents/buttons/button";
const ShowProduct = lazy(() => import("../showProduct/showProduct.js"));

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
        <Suspense fallback={<div>loading... </div>}>
          <ShowProduct />
        </Suspense>
        <CartList />
      </div>
    </>
  );
};

export default Section;
