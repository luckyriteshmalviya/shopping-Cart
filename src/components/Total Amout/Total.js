import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Total.css";

const Total = () => {
    const [state, setState] = useState(0)
  const selector = useSelector((state) => state.productSlice.cart);

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
    return 0
  }

  function reducedPrice(price, quantity){
    console.log(price, quantity)
    let cdiscount = discount(quantity)
    if (cdiscount===0){
       return price
    }
    let dprice = cdiscount* Number(price)
    let lprice = dprice /100
    let fprice = price-lprice
    return fprice
  }

  function amount(price, quantity){
    let finalPrice = reducedPrice(price, quantity)
    let amount = quantity*finalPrice
    return amount
  }

  function handleInput(e){
setState(state+1)

}
  return (
    <div className="total-container">
      <h2>Total Amount</h2>
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
              <td>{item.title}</td>
              <td>
              <input type="number" onChange={handleInput} defaultValue={item.quantity}  />
              </td>
              <td>{item.price}</td>
              <td>{discount(item.quantity)} %</td>
              <td>{reducedPrice(item.price, item.quantity)}</td>
              <td>{amount(item.price, item.quantity)}</td>
            </tr>
          );
        })}
      </table>

      <div>Total Amount:-</div>
      <Link to={"/"} className="link">
        <button>Back To Home</button>
      </Link>
    </div>
  );
};

export default Total;
