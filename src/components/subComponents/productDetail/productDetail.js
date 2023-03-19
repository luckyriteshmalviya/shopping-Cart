import outOfStock from "../../../assets/images/price-tag.png";
import tag from "../../../assets/images/sale-tag.png";
import "./productDetail.css";

const ProductDetail = ({ item }) => {
  return (
    <div className="shoping-cart-product-details">
      <div className="shoping-cart-product-details-section-one">
        <b>{item.title}</b>
        <div>Brand : {item.brand}</div>
        <div>Category: {item.category} </div>
        <div>Rating : {item.rating}</div>
        <div className="shoping-cart-product-details-section-one-description">
          {item.description}
        </div>
      </div>

      <div className="shoping-cart-product-details-section-two">
        <div
          className={`shoping-cart-product-details-section-two-upside   ${
            item.quantity >= item.stock ? "out-of-stock" : ""
          }`}
        >
          {item.quantity >= item.stock ? (
            <div>Check Stock</div>
          ) : (
            <div>In Stock</div>
          )}
          <img
            className="shoping-cart-product-details-section-two-tag"
            src={item.quantity >= item.stock ? outOfStock : tag}
            alt="tag"
          />
        </div>
        <div>
          Stock :- <b>{item.stock}</b>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
