import "./index.css";

const QuickViewModal = (props) => {
  const { closeModal } = props;
  const onClickModalCloseButton = () => {
    closeModal();
  };

  return (
    <div className="quick-view-modal">
      <div className="quick-view-modal-card">
        <div className="quick-view-modal-images">
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719064868/product_qzf5go.png"
            alt="quick-view-modal"
            className="quick-view-card-image"
          />
          <div className="quick-view-modal-image-cards">
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719064868/product_qzf5go.png"
              alt="quick-view-modal"
              className="quick-view-card-image-slide"
            />
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719064868/product_qzf5go.png"
              alt="quick-view-modal"
              className="quick-view-card-image-slide"
            />
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719064868/product_qzf5go.png"
              alt="quick-view-modal"
              className="quick-view-card-image-slide"
            />
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719064868/product_qzf5go.png"
              alt="quick-view-modal"
              className="quick-view-card-image-slide"
            />
          </div>
        </div>
        <div className="quick-view-modal-content">
          <h4>Raju Rassibomb</h4>
          <button type="button" onClick={onClickModalCloseButton}>
            X
          </button>
          <h4>MRP:</h4>
          <h4>Raju's Dreams/-</h4>
          {/* divider */}
          <div>
            <h5>Product Description:</h5>
            <p>
              This product packs an extra punch, thanks to the literal blood,
              sweat and tears of a young boy.
            </p>
          </div>
          {/* divider */}
          <div>
            <h5>Product Contents:</h5>
            <ul>
              <li>10 hand-hurting pieces of rassi bombs</li>
              <li>Jilled with great pain</li>
              <li>Raju's hopes</li>
            </ul>
          </div>
          {/* divider */}
          <div>
            <h5>Shipping Time: </h5>
            <p>Before Raju understands that his dreams do not matter.</p>
          </div>
          <button>Choose Now</button>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
