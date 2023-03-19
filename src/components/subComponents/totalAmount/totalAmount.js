import "./totalAmount.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { totalAmount } from "../../../utils/functions";

const TotalAmount = () => {
  const selector = useSelector((state) => state.productSlice.cart);

  const finalPrice = useMemo(() => {
    let fprice = selector.reduce((acc, curr) => {
      curr = totalAmount(curr.price, curr.quantity);
      return acc + curr;
    }, 0);
    return fprice;
  }, [selector]);

  return (
    <div className="shoping-cart-final-amount">
      <div>Total Amount:-</div>
      <b>
        {finalPrice.toFixed(2)} {"\u20B9"}
      </b>
    </div>
  );
};

export default TotalAmount;
