import "./ShowProduct.css";

const ShowProduct = ({ list, addToCart, removeFromCart }) => {
  return (
    <div className="showProduct-container" >
      {list?.map((item) => {
        return (
          <div className="sample" key={item.id} >
            <div style={{ position: "relative" }}>
              <img
                style={{ borderRadius: "10px" }}
                className="sample-image"
                src={item.images[0]}
                alt="product"
              />
              <div className="sample-cart">
                <span onClick={() => addToCart(item.id)}>+</span>
                <i className="bx bx-cart-add"></i>
                <span onClick={() => removeFromCart(item.id)}>-</span>
              </div>
              <div className="sample-brand">{item.brand}</div>
            </div>

            <div className="sample-detail-1">
              <div style={{ whiteSpace: "nowrap" }}>{item.title}</div>
              <div className="rating">{item.rating}</div>
            </div>

            <div className="sample-detail-2" style={{ color: "gray" }}>
              <div>Price</div>
              <div>{item.price}</div>
            </div>

            <div
              className="sample-detail-3"
              style={{ color: "rgb(102, 102, 102)" }}
            >
              <div className="sample-description">{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProduct;
