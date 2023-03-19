import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import tag from "../../assets/images/price-tag.png";
import outOfStock from "../../assets/images/sale-tag.png";
import { ADD, SUBTRACT, Total } from "../../redux/createStore/productSlice";
import "./Total.css";
import {
  MidSizeButton,
  SmallSizeButton,
} from "../../Components/Buttons/Button";
import { Link } from "react-router-dom";

const ShopingCart = () => {
  const selector = useSelector((state) => state.productSlice.cart);
  const dispatch = useDispatch();

  const finalPrice = useMemo(() => {
    let fprice = selector.reduce((acc, curr) => {
      curr = amount(curr.price, curr.quantity);
      return acc + curr;
    }, 0);
    return fprice;
  }, [selector]);

  function discount(quantity) {
    if (quantity > 91) {
      return 20;
    }
    if (quantity > 51) {
      return 10;
    }
    if (quantity > 10) {
      return 5;
    }
    return 0;
  }

  function reducedPrice(price, quantity) {
    let applieddiscount = discount(quantity);
    if (applieddiscount === 0) {
      return price;
    }
    let dprice = applieddiscount * Number(price);
    let lprice = dprice / 100;
    let finalprice = price - lprice;
    return finalprice;
  }

  function amount(price, quantity) {
    let finalPrice = reducedPrice(price, quantity);
    let amount = quantity * finalPrice;
    return amount;
  }

  function handClick(id) {
    dispatch(ADD(id));
  }

  function handleDec(id) {
    dispatch(SUBTRACT(id));
  }

  function removeAll() {
    dispatch(Total([]));
  }

  return (
    <div className="shoping-cart-container">
      <div className="shoping-cart-container-header">
        <b>Shoping Cart</b>

        <div
          style={{
            cursor: "pointer",
            letterSpacing: "0.1rem",
            color: "grey",
            display: "flex",
            gap: "1rem"

          }}
        >
          <Link to={"/"}>Go Back To Home </Link>
          <div>/</div>
          <div
            style={{
              color: "red",
              fontWeight: "600",
              textDecoration: "underline",
            }}
            onClick={removeAll}
          >
            Remove All
          </div>
        </div>
      </div>
      <div className="shoping-cart-list">
        {selector?.map((item) => {
          return (
            <div key={item.id} className="shoping-cart-item">
              <div>
                <img
                  className="shoping-cart-image"
                  src={item.thumbnail}
                  alt="thumnail"
                />
                <div className="shoping-cart-product-quantity">
                  {item.stock > item.quantity ? (
                    <div
                      onClick={() => {
                        handClick(item.id);
                      }}
                    >
                      <SmallSizeButton text="+" title="Add to Cart" />
                    </div>
                  ) : (
                    <div>
                      <SmallSizeButton
                        text="i"
                        title="Quantity should be less than stock"
                      />
                    </div>
                  )}

                  {item.quantity}
                  {item.quantity ? (
                    <div
                      onClick={() => {
                        handleDec(item.id);
                      }}
                    >
                      <SmallSizeButton text="-" title="Remove from Cart" />
                    </div>
                  ) : (
                    <div>
                      <SmallSizeButton
                        text="i"
                        title="Quantity should be more than 0."
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="shoping-cart-product-details">
                <div className="shoping-cart-product-details-section-one">
                  <b>{item.title}</b>
                  <div>Brand : {item.brand}</div>
                  <div>Category: {item.category} </div>
                  <div>Rating : {item.rating}</div>
                  <div className="shoping-cart-product-details-section-one-description">
                    {item.description}
                  </div>
                </div>

                <div className="shoping-cart-product-details-section-two">
                  <div
                    className={`shoping-cart-product-details-section-two-upside   ${
                      item.quantity === item.stock ? "out-of-stock" : ""
                    }`}
                  >
                    {item.quantity === item.stock ? (
                      <div>Check Stock</div>
                    ) : (
                      <div>In Stock</div>
                    )}
                    <img
                      className="shoping-cart-product-details-section-two-tag"
                      src={item.quantity === item.stock ? outOfStock : tag}
                      alt="tag"
                    />
                  </div>
                  <div>
                    Stock :- <b>{item.stock}</b>
                  </div>
                </div>
              </div>
              <div className="shoping-cart-product-bill">
                <div className="shoping-cart-product-bill-style">
                  <div>Price</div>
                  <div>
                    {"\u20B9"} {item.price}
                  </div>
                </div>

                <div className="shoping-cart-product-bill-style">
                  <div>Discount</div>
                  <div>
                    <abbr
                      title="10% of product quantity 5% discount on the price 
                      50% of product quantity 10% discount on the price 
                      90% of product quantity 20% discount on the price"
                    >
                      <b> {discount(item.quantity).toFixed(2)}% </b>
                    </abbr>
                  </div>
                </div>

                <div className="shoping-cart-product-bill-style">
                  <div>Reduced Price</div>
                  <div>
                    {reducedPrice(item.price, item.quantity).toFixed(2)}
                  </div>
                </div>

                <div className="shoping-cart-product-bill-style">
                  <div>Delivery Charges</div>
                  <div>Free</div>
                </div>
                <hr />
                <div className="shoping-cart-product-bill-style">
                  <b>Amount</b>
                  <div>
                    {" "}
                    {"\u20B9"} {amount(item.price, item.quantity).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: " 2rem",
          fontSize: "1.6rem",
          marginRight: "2rem",
          letterSpacing: "0.1rem",
        }}
      >
        <div>Total Amount:-</div>{" "}
        <b>
          {finalPrice.toFixed(2)} {"\u20B9"}{" "}
        </b>
      </div>
      <div
        style={{ display: "flex", justifyContent: "flex-end", margin: "2rem" }}
      >
        <MidSizeButton text="Go To Payment" />
      </div>
    </div>
  );
};

export default ShopingCart;
