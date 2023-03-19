import "./shopingCart.css";
import { MidSizeButton } from "../../components/subComponents/buttons/button";
import ShopingCartProductList from "../../components/mainComponents/ShopingCartProductList/ShopingCartProductList";
import TotalAmount from "../../components/subComponents/totalAmount/totalAmount";
import ShopingCartHeader from "../../components/subComponents/shopingCartHeader/shopingCartHeader";

const ShopingCart = () => {
  return (
    <div className="shoping-cart-container">
      <ShopingCartHeader />
      <ShopingCartProductList />
      <TotalAmount />
      <div className="shoping-cart-payment-button">
        <MidSizeButton text="Go To Payment" />
      </div>
    </div>
  );
};

export default ShopingCart;
