import { useSelector } from "react-redux";
import "./Cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.productSlice.cart);
  return (
    <div className="cart-product-container">
      <h4>Products in Cart :- {cart.length}</h4>
      {cart.map((item) => {
        return (
          <div key={item.id} className="cart-product">
            <b> {item.title}</b>
            
              <img className="cart-product-image" src={item.thumbnail}  alt="product-thumbnail" />
            

            <div className="cart-product-details">
              <div>Price</div>
              <div>{item.price}</div>
            </div>

            <div className="cart-product-details">
              <b>Quantity</b>
              <b>{item.quantity}</b>
            </div>

            <div className="cart-product-details">
              <div>
                Amount
              </div>
              <div>{item.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
