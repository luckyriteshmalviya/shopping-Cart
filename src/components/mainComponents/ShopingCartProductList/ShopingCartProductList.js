import { useSelector } from "react-redux";
import Product from "../../subComponents/product/product";
import ProductBill from "../../subComponents/productBill/productBill";
import ProductDetail from "../../subComponents/productDetail/productDetail";
import "./ShopingCartProductList.css";

const ShopingCartProduct = () => {
  const selector = useSelector((state) => state.productSlice.cart);

  return (
    <div className="shoping-cart-list">
      {selector?.map((item) => {
        return (
          <div key={item.id} className="shoping-cart-item">
            <Product item={item} />
            <ProductDetail item={item} />
            <ProductBill item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ShopingCartProduct;
