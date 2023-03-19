import "./showProductDetails.css";

const ShowProductDetails = ({ item }) => {
  return (
    <>
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
    </>
  );
};

export default ShowProductDetails;
