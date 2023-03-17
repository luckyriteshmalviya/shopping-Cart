import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD, SUBTRACT } from "../../redux/createStore/productSlice";
import "./Total.css";

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
    <div className="total-container">
      <h2>Total Price Chart</h2>
      <table className="total-container-table">
        <th>Title</th>
        <th>Quantity</th>
        <th>Price per item</th>
        <th>Offered Discount</th>
        <th>Price After Discount</th>
        <th>Amount</th>
        {selector?.map((item) => {
          return (
            <tr>
              <td>
                <b>{item.title}</b>
              </td>
              <td>
                <button
                  onClick={() => {
                    handClick(item.id);
                  }}
                >
                  inc
                </button>{" "}
                {item.quantity}{" "}
                {item.quantity ? (
                  <button
                    onClick={() => {
                      handleDec(item.id);
                    }}
                  >
                    dec
                  </button>
                ) : (
                  <></>
                )}{" "}
              </td>
              <td>{item.price}</td>
              <td>
                {discount(item.quantity)}{" "}
                <abbr style={{ textDecoration: "none" }} title="discount">
                  {" "}
                  %{" "}
                </abbr>
              </td>
              <td>{reducedPrice(item.price, item.quantity)}</td>
              <td>
                <b>{amount(item.price, item.quantity)}</b>
              </td>
            </tr>
          );
        })}
      </table>

      <h2>Total Amount:- {finalPrice}</h2>
    </div>
  );
};

export default Total;
