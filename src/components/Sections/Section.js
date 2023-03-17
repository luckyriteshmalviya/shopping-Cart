import { useEffect, useState } from "react";
import "./Section.css";
import { useDispatch, useSelector } from "react-redux";
import { productDetails, Total } from "../../redux/createStore/productSlice";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import ShowProduct from "../ShowProduct/ShowProduct";

const Section = () => {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();
  const reduxCart = useSelector((state) => state.productSlice.cart);

  useEffect(() => {
    dispatch(productDetails());
    setCart(reduxCart);
  }, []);

  const selector = useSelector((state) => state.productSlice.productDetails);
  const [list, setList] = useState([...selector]);

  const handleAddToCart = (id) => {
    let selectedProducts = list?.find((data) => data.id === id);
    let modifiedProd = { ...selectedProducts, quantity: 1 };

    if (cart.length === 0) {
      setCart([modifiedProd]);
      return;
    }
    for (let item of cart) {
      if (item.id === id) {
        item.quantity += 1;
        setCart([...cart]);
        return;
      } else {
        setCart([...cart, modifiedProd]);
      }
    }
  };

  useEffect(() => {
    setList(selector);
  }, [selector]);

  function handleRemoveFromCart(id) {
    let cartList = [...cart];
    if (cartList.length === 0) return;

    for (let item of cartList) {
      if (item.id === id) {
        item.quantity -= 1;
        let fcartList = cartList.filter((elem) => elem.quantity > 0);
        setCart([...fcartList]);
      }
    }
  }

  function handleTotal() {
    dispatch(Total(cart));
  }
  return (
    <>
      <div style={{display: "flex", gap: "2rem", fontSize: "2rem", justifyContent: "flex-end", marginRight: "2rem"}}>
        <div>Cart</div>
        <Link  to={"/total"}  onClick={handleTotal}>
          Total
        </Link>
      </div>
      
        <div className="section-one-main-container" >
          <ShowProduct
            list={list}
            addToCart={handleAddToCart}
            removeFromCart={handleRemoveFromCart}
          />
          <Cart cart={cart} />
        </div>
      
    </>
  );
};

export default Section;
