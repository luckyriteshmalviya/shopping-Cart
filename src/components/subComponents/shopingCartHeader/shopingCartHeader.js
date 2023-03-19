import "./shopingCartHeader.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Total } from "../../../redux/productSlice";

const ShopingCartHeader = () => {
  const dispatch = useDispatch();

  function removeAll() {
    dispatch(Total([]));
  }

  return (
    <div className="shoping-cart-container-header">
      <b>Shoping Cart</b>
      <div className="shoping-cart-container-header-right-part">
        <Link
          className="shoping-cart-container-header-right-part-link"
          to={"/"}
        >
          Go Back To Home
        </Link>
        <div>/</div>
        <div
          className="shoping-cart-container-header-right-part-remove-all"
          onClick={removeAll}
        >
          Remove All
        </div>
      </div>
    </div>
  );
};

export default ShopingCartHeader;
