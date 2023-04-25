import "./showProductDetails.css";

const ShowProductDetails = ({ item }) => {
  return (
    <>
      <div className="sample-detail-1">
        <div className="sample-detail-1-title">{item.title}</div>
        <div className="rating">{item.rating}{"\u2605"}</div>
      </div>

      <div className="sample-detail-2">
        <div>Price</div>
        <div>{"\u20B9"}{item.price}</div>
      </div>

      <div className="sample-detail-3">
        <div className="sample-description">{item.description}</div>
      </div>
    </>
  );
};

export default ShowProductDetails;
