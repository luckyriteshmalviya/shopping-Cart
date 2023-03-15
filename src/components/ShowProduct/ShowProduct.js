import './ShowProduct.css'

const ShowProduct = ({list,addToCart,  removeFromCart})=>{
    return(    <div className="section-one-main-container-products">
      hi
            {/*       {list.list}{list?.map((item) => {
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
                    <b>Price</b> :- {item.price}
                  </span>
                  <div>
                    <b>Rating</b> :- {item.rating}
                  </div>
                  <br />
                  <div>{item.description}</div>

                  <button onClick={() => addToCart(item.id)}>
                    Add to Cart
                  </button>
                  <div>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove from Cart
                    </button>
                  </div>
                </div>
              );
            })} */}
          </div>
    )
}

export default ShowProduct