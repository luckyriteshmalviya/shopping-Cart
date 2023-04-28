import { useDispatch, useSelector } from "react-redux";
import "./showProduct.css";
import { Total } from "../../../redux/productSlice";
import { SmallSizeButton } from "../../subComponents/buttons/button";
import Slider from "react-slick";
import ShowProductDetails from "../../subComponents/showProductDetails/showProductDetails";
import { useState } from "react";
import Pagination from "./pagination";

const ShowProduct = ({productList}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const dispatch = useDispatch();
  const selector = productList;
  const reduxCart = useSelector((state) => state.productSlice.cart);

  var settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = selector.length>lastPostIndex ? selector.slice(firstPostIndex, lastPostIndex) : selector; 

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
    <div>
       <Pagination
                totalPosts={selector.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
       />
    
    <div className="showProduct-container" >
      {currentPosts?.map((item) => {
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

            <ShowProductDetails item={item} />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default ShowProduct;
