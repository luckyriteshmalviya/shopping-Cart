import { useDispatch, useSelector } from "react-redux";
import "./ShowProduct.css";
import { Total } from "../../redux/createStore/productSlice";
import { SmallSizeButton } from "../../Components/Buttons/Button";
import Slider from "react-slick";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.productSlice.productDetails);
  const reduxCart = useSelector((state) => state.productSlice.cart);

  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleAddToCart = (id) => {
    let selectedProducts = selector?.find((data) => data.id === id);
    let modifiedProd = { ...selectedProducts, quantity: 1 };

    if (reduxCart.length === 0) {
      dispatch(Total([modifiedProd]));
      return;
    }
    let mcart = JSON.parse(JSON.stringify(reduxCart));

    for (let item of mcart) {
      if (item.id === id) {
        item.quantity += 1;
        dispatch(Total([...mcart]));
        return;
      }
    }
    dispatch(Total([...reduxCart, modifiedProd]));
  };

  function handleRemoveFromCart(id) {
    if (reduxCart.length === 0) return;
    let cartList = JSON.parse(JSON.stringify(reduxCart));
    for (let item of cartList) {
      if (item.id === id) {
        item.quantity -= 1;
        let fcartList = cartList.filter((elem) => elem.quantity > 0);
        dispatch(Total([...fcartList]));
      }
    }
  }

  return (
    <div className="showProduct-container">
      {selector?.map((item) => {
        return (
          <div className="sample" key={item.id}>
            <div className="sample-image-slider-container">
              <Slider {...settings}>
                {item?.images?.map((data, index) => {
                  return (
                    <div key={index}>
                      <img className="sample-image" src={data} alt="product" />
                    </div>
                  );
                })}
              </Slider>
              <div className="sample-cart">
                <div onClick={() => handleAddToCart(item.id)}>
                  <SmallSizeButton text="+" title="Add to Cart" />
                </div>

                <i className="bx bx-cart"></i>
                <div onClick={() => handleRemoveFromCart(item.id)}>
                  <SmallSizeButton text="-" title="Remove from Cart" />
                </div>
              </div>
              <div className="sample-brand">{item.brand}</div>
            </div>

            <div className="sample-detail-1">
              <div className="sample-detail-1-title">{item.title}</div>
              <div className="rating">{item.rating}</div>
            </div>

            <div className="sample-detail-2">
              <div>Price</div>
              <div>{item.price}</div>
            </div>

            <div className="sample-detail-3">
              <div className="sample-description">{item.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProduct;
