import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import QuickViewModal from "./components/QuickViewModal";

const productList = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dzduqsp2x/image/upload/v1719064868/product_qzf5go.png",
    title: "Raju Rassibomb",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dzduqsp2x/image/upload/v1719064868/product_qzf5go.png",
    title: "Ladiyon ki Rani Chani",
  },
];

function App() {
  const [showModal, setShowModal] = useState(false);

  const onClickQuickViewButton = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="top-section">
        {showModal && <QuickViewModal closeModal={closeModal} />}

        <Header />
        <div>
          <h3 className="top-section-title">
            The choise is yours.
            <br />
            Because they don't have one.
          </h3>
          <button
            onClick={onClickQuickViewButton}
            className="top-section-button"
            type="button"
          >
            QUICK VIEW
          </button>
        </div>
      </div>
      <div className="middle-section">
        <div className="about-section">
          <div className="about-title-section">
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719053109/orange-line-frame_mjrhdl.png"
              alt="orange-line-frame"
              className="orange-line-frame"
            />
            <h4 className="about-section-title">About</h4>
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719053109/orange-line-frame_mjrhdl.png"
              className="orange-line-frame"
              alt="orange-line-frame"
            />
          </div>
          <div className="about-section-content">
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719054812/about-side-frame_dasldj.png"
              alt="about-side-frame"
              className="about-side-frame"
            />
            <p className="about-section-content-desc">
              Our products are crafted exclusively from the dreams and screams
              of young kids who wanted to show their mastery in their chosen
              fields, but were directed towards a factory for daily wages. Each
              cracker bursts brighter than their lost smiles, and can be heard
              louder than their cries for miles. Buy them, burst them, brag
              about them. <br />
              <span className="about-section-content-desc-span">
                The choice is yours. Because they don’t have one.
              </span>
            </p>
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719054812/about-side-frame_dasldj.png"
              className="about-side-frame"
              alt="about-side-frame"
            />
          </div>
        </div>
        <div className="product-section">
          <div className="about-title-section">
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719053109/orange-line-frame_mjrhdl.png"
              className="orange-line-frame"
              alt="orange-line-frame"
            />
            <h4 className="about-section-title our-products-section-title">
              Our products
            </h4>
            <img
              src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719053109/orange-line-frame_mjrhdl.png"
              className="orange-line-frame"
              alt="orange-line-frame"
            />
          </div>
          <ul className="product-list">
            {productList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
        <img
          src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719067446/orange-one-line-bottom-frame_i1jyww.png"
          alt="orange-line-from-bottom"
          className="orange-line-from-bottom"
        />
      </div>
      <div className="footer-section">
        <img
          src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719073137/Frame_64_by0ji9.png"
          className="yellow-line-frame"
          alt="yellow-line-frame"
        />

        <div className="footer-section-content">
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719067886/flower-frame_wi7pua.png"
            alt="flower-frame"
            className="flower-frame"
          />
          <div>
            <h4 className="footer-section-title">Follow us on</h4>
            <div className="follow-us-icons">
              <img
                src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719068395/001-instagram_h9dzli.png"
                alt="instagram"
                className="follow-us-icon"
              />
              <img
                src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719068395/002-youtube_oezdtc.png"
                className="follow-us-icon"
                alt="youtube"
              />
              <img
                src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719068395/003-twitter_ucpxto.png"
                className="follow-us-icon"
                alt="twitter"
              />
              <img
                src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719068399/004-facebook_wd8von.png"
                className="follow-us-icon"
                alt="facebook"
              />
              <img
                src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719068400/005-linkedin_elrem7.png"
                className="follow-us-icon"
                alt="linkedin"
              />
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719067886/flower-frame_wi7pua.png"
            className="flower-frame"
            alt="flower-frame"
          />
        </div>
        <img
          src="https://res.cloudinary.com/dzduqsp2x/image/upload/v1719073137/Frame_64_by0ji9.png"
          alt="yellow-line-frame"
          className="yellow-line-frame"
        />
      </div>
    </>
  );
}

export default App;
