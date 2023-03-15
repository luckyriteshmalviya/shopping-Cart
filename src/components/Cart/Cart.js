import './Cart.css'

const Cart =({cart})=>{
return(<>
<h4>Products in Cart :- {cart.length}</h4>

<div>
{cart.map((item, index) => {
            return (
              <div key={index} className="cart-product">
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

                <div>
                  <b>Amount:- {Number(item.price) * Number(item.quantity)}</b>
                </div>
              </div>
            );
          })}</div>
</>)
}

export default Cart