import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <>
      <h4>Products in Cart :- {cart.length}</h4>

      <div className="cart-product-container">
        {cart.map((item, index) => {
          return (
            <div key={index} className="cart-product">
              <div className="cart-product-title"> {item.title}</div>
              <div className="cart-product-image">
                <img
                  src={item.thumbnail}
                  width="100px"
                  alt="product-thumbnail"
                />
              </div>
              <span className="cart-product-price">Price :- {item.price}</span>
              <div>Quantity :- {item.quantity}</div>

              <div>
                <b>Amount:- {Number(item.price) * Number(item.quantity)}</b>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
