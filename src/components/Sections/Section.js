import { useEffect, useState } from "react";
import "./Section.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import { productDetails } from "../../redux/createStore/productSlice";

const Section = () => {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetails());
  }, []);

  const selector = useSelector((state) => state.productSlice.productDetails);

  const [list, setList] = useState([...selector]);

  const handleClick = (id) => {
    let selectedProducts = list.find((data) => data.id === id);

    let modifiedProd = {...selectedProducts, quantity:1}


    // console.log( typeof(selectedProducts),"==============", selectedProducts, "++++++++++++++++++++++");

    setCart([...cart, modifiedProd]);
  };

  console.log(cart);
  useEffect(() => {
    setList(selector);
  }, [selector]);

  return (
    <>
      <div className="section-one-main-container">
        <div>
          <div className="section-one-main-container-products">
            {list?.map((item) => {
              console.log(item.thumbnail)
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
                  <div><b>Rating</b> :- {item.rating}</div>
                  <br />
                  <div>{item.description}</div>

                  <button onClick={() => handleClick(item.id)}>
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          {" "}
          <h1>Cart</h1>
          {cart.map((item, index) => {
            return (
              <div key={index}>
                <div className="section-one-product-title"> {item.title}</div>
                <div className="section-one-product-image">
                  <img
                    src={item.thumbnail}
                    width="250px"
                    alt="product-thumbnail"
                  />
                </div>
                <span className="section-one-product-price">
                  Price :- {item.price}
                </span>
                <div>quantity :- {item.quantity}</div>

<div><b>Amount:-</b> </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
