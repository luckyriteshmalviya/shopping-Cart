import { useEffect, useState } from "react";
import "./Section.css";
import { useDispatch, useSelector } from "react-redux";
import { productDetails, Total } from "../../redux/createStore/productSlice";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";

const Section = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetails());
  }, []);

  const selector = useSelector((state) => state.productSlice.productDetails);
  const [list, setList] = useState([...selector]);

  const handleAddToCart = (id) => {
    let selectedProducts = list.find((data) => data.id === id);
    let modifiedProd = { ...selectedProducts, quantity: 1 };

    if (cart.length === 0) {
      setCart([modifiedProd]);
      return;
    }
    let cartList = [...cart];
    for (let item of cartList) {
      if (item.id === id) {
        item.quantity += 1;
        setCart([...cartList]);
      } else {
        setCart([...cart, modifiedProd]);
      }
    }

  };

  console.log("filteredCart", cart);

  useEffect(() => {
    setList(selector);
  }, [selector]);

  function handleshowCart() {
    setShowCart(!showCart);
  }

  function handleRemoveFromCart(id) {
    let cartList = [...cart];
    if (cartList.length == 0) return;

    for (let item of cartList) {
      if (item.id === id) {
        item.quantity -= 1;
        setCart([...cartList]);
      }
    }
  }

  function handleTotal(){
  
    dispatch(Total(cart))
  }
  return (
    <>
      <div className="section-one-main-container">
        <div>
          <div className="section-one-main-container-products">
            {list?.map((item) => {
              return (
                <div className="section-one-product" key={item.id}>
                  <div className="section-one-product-title"> {item.title}</div>
                  <div className="section-one-product-image">
                    <img
                      src={item.thumbnail}
                      width="250px"
                      alt="product-thumbnail"
                    />
                  </div>
                  <span className="section-one-product-price">
                    <b>Price</b> :- {item.price}
                  </span>
                  <div>
                    <b>Rating</b> :- {item.rating}
                  </div>
                  <br />
                  <div>{item.description}</div>

                  <button onClick={() => handleAddToCart(item.id)}>
                    Add to Cart
                  </button>
                  <div>
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      Remove from Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <button
            onClick={() => {
              handleshowCart();
            }}
          >
            <div>Cart</div>
          </button>
          <div className={`${showCart ? "show-cart" : "hide-cart"}`}>
            <Cart cart={cart} />
          </div>
        </div>

        <div>
          <Link className="link" to={"/total"}>
            <button onClick={handleTotal}> Total</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Section;
