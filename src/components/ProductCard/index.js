import "./index.css";

const ProductCard = (props) => {
  const { product } = props;
  const { imageUrl, title } = product;

  return (
    <li className="product-card">
      <img src={imageUrl} alt={title} className="product-card-image" />
      <div className="product-card-content">
        <p className="product-card-title">{title}</p>
        <button className="product-card-button" type="button">
          QUICK VIEW
        </button>
      </div>
    </li>
  );
};

export default ProductCard;
