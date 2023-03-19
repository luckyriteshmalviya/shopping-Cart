import "./productBill.css";
import { totalAmount, reducedPrice, discount } from "../../../utils/functions";

const ProductBill = ({ item }) => {
  return (
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
        <div>{reducedPrice(item.price, item.quantity).toFixed(2)}</div>
      </div>

      <div className="shoping-cart-product-bill-style">
        <div>Delivery Charges</div>
        <div>Free</div>
      </div>
      <hr />
      <div className="shoping-cart-product-bill-style">
        <b>Amount</b>
        <div>
          {"\u20B9"} {totalAmount(item.price, item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ProductBill;
