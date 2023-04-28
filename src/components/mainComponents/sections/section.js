import { useEffect, lazy, Suspense, useState } from "react";
import "./section.css";
import { useDispatch, useSelector } from "react-redux";
import { productDetails } from "../../../redux/productSlice";
import CartList from "../cartList/cartList";
import { Link } from "react-router-dom";
import ShopingCart from "../../../assets/images/shopping-cart.png";
import { MidSizeButton } from "../../../components/subComponents/buttons/button";
const ShowProduct = lazy(() => import("../showProduct/showProduct.js"));

const Section = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState();
  const selector = useSelector((state) => state.productSlice.productDetails);

  const [categories, setCategories] = useState("All Categories");

  const handleFilterChange = (e) => {
    setCategories(e.target.value);
  };

  useEffect(() => {
    dispatch(productDetails());
  }, []);

  useEffect(() => {
    let allP = selector.filter((item) => item.category===categories);
    setProducts(allP);
  }, [categories]);

  return (
    <>
      <div className="section-one-header">
        <abbr className="section-one-header-left-part" title="coming soon...">
          <div>Filter</div>
          <div> / </div>
          <select
            className="section-one-header-left-part-list"
            onChange={handleFilterChange}
          >
            <option>All</option>
            <option>smartphones</option>
            <option>laptops</option>
            <option>fragrances</option>
            <option>skincare</option>
            <option>groceries</option>
            <option>home-decoration</option>
            <option>furniture</option>
            <option>tops</option>
          </select>
        </abbr>
        <Link className="section-one-go-to-cart-link" to={"/total"}>
          Go to Shoping Cart
          <img src={ShopingCart} alt="shoping-cart" width="35px" />
        </Link>
      </div>

      <div className="section-one-main-container">
        <div className="section-one-main-container-show-product">
          <Suspense fallback={<div>loading... </div>}>
            <ShowProduct productList={categories==="All Categories"? selector : products} />
          </Suspense>
        </div>
        <div className="section-one-main-container-cartlist">
          <CartList />
        </div>
      </div>
    </>
  );
};

export default Section;
