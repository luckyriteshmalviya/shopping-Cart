import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import tag from '../../assets/images/sale-tag.png'
import { ADD, SUBTRACT } from "../../redux/createStore/productSlice";
import "./Total.css";
import { IncButton, DecButton } from "../../Components/Buttons/Button";

const Total = () => {
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

  return (
    <div className="shoping-cart-container">
      <div className="shoping-cart-container-header">
        <div>Shoping Cart</div>
        <div>Remove All</div>
      </div>
      <div className="shoping-cart-list">
        {selector?.map((item) => {
          return (
            <div key={item.id} className="shoping-cart-item">
              <div>
                <img style={{borderRadius: "0.5rem"
                }} src={item.thumbnail} width="120px" height="100px" alt="thumnail" />
                <div className="shoping-cart-detail-style">
                  <div
                    onClick={() => {
                      handClick(item.id);
                    }}
                  >
                    <IncButton />
                  </div>
                  {item.quantity}
                  {item.quantity ? (
                    <div
                      onClick={() => {
                        handleDec(item.id);
                      }}
                    >
                      <DecButton />
                    </div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  borderRight: "1px solid rgb(205, 205, 205)",
                  borderLeft: "1px solid rgb(205, 205, 205)",
                  margin: "2rem", padding: "0rem 2rem"
                }}
              >
                <div style={{textAlign: "left"
              }}><div>{item.brand}</div>
                <b>{item.title}</b>
                <div>{item.rating}</div>
                <div>{item.description}</div></div>
                

                <div style={{backgroundColor: "#e7e7e7", position:"relative", height: "1.4rem", borderRadius: "0.2rem", padding: "0.2rem"}}>{item.category}
                
                <div style={{position: "absolute", top:"23px", right:"-10px"}}><img src={tag} alt="tag" width="35px" /></div>
                 </div>
                
                
              </div>
              <div style={{ width: "30%" }}>
                <div className="shoping-cart-detail-style">
                  <div>Price</div>
                  <div>
                    {"\u20B9"} {item.price}
                  </div>
                </div>

                <div className="shoping-cart-detail-style">
                  <div>Discount</div>
                  <div>
                    <abbr
                      style={{ textDecoration: "none" }}
                      title="10% of product quantity 5% discount on the price 
                      50% of product quantity 10% discount on the price 
                      90% of product quantity 20% discount on the price"
                    >
                      {discount(item.quantity).toFixed(2)}%
                    </abbr>
                  </div>
                </div>

                <div className="shoping-cart-detail-style">
                  <div>Reduced Price</div>
                  <div>{reducedPrice(item.price, item.quantity).toFixed(2)}</div>
                </div>

                <div className="shoping-cart-detail-style">
                  <div>Delivery Charges</div>
                  <div>Free</div>
                </div>
                <hr />
                <div className="shoping-cart-detail-style">
                  <b>Amount</b>
                  <div>{amount(item.price, item.quantity).toFixed(2)}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h2>Total Amount:- {finalPrice.toFixed(2)}</h2>
    </div>
  );
};

export default Total;
