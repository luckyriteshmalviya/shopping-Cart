import { useDispatch } from "react-redux";
import "./product.css";
import { ADD, SUBTRACT } from "../../../redux/productSlice";
import { SmallSizeButton } from "../../subComponents/buttons/button";

const Product = ({ item }) => {
  const dispatch = useDispatch();

  function handleInc(id) {
    dispatch(ADD(id));
  }

  function handleDec(id) {
    dispatch(SUBTRACT(id));
  }

  return (
    <div>
      <img className="shoping-cart-image" src={item.thumbnail} alt="thumnail" />
      <div className="shoping-cart-product-quantity">
        {item.stock > item.quantity ? (
          <div
            onClick={() => {
              handleInc(item.id);
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
            <SmallSizeButton text="i" title="Quantity should be more than 0." />
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
