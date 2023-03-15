import { useEffect, useState } from "react";
import "./Section.css";
import { useDispatch, useSelector, useStore } from "react-redux";
import { productDetails } from "../../redux/createStore/productSlice";

const Section = () => {
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productDetails());
  }, []);

  const selector = useSelector((state) => state.productSlice.productDetails);
  console.log("selector", selector);

  const [list, setList] = useState([...selector]);

  const handleClick = (e) => {
    console.log(e);
    
    let selectedProducts = list.filter((data)=>data.id==e)

    selectedProducts = new Set([...selectedProducts]);
    console.log("==============", selectedProducts, "++++++++++++++++++++++");

    setCart([...cart, ...selectedProducts]);
  };
  console.log(cart);
  useEffect(() => {
    setList(selector);
  }, [selector]);

  return (
    <>
      <div className="section-one-main-container">
        <div>
          <div className="section-one-main-container-products">
            {list?.map((item) => {
              return (
                <div className="section-one-product" key={item.id}>
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
                  <div>Rating :- {item.rating}</div>
                  <br />
                  <div>{item.description}</div>

                  <button onClick={() => handleClick(item.id)}>
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        <div>side</div>
      </div>
    </>
  );
};

export default Section;
