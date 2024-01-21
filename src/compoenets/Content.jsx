import "./content.css";
import cart from "../images/icon-cart.svg";

function Content({ cout, increase, decrease, add_cart }) {
  return (
    <div className="content">
      <h3>Sneaker Company</h3>
      <h1 className="content-h1">Fall Limited Edition Sneakers</h1>
      <p className="content-para1">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
        <div className="price">
          <h1>$125.00</h1>
          <span className="price-h5">
            <h5>50%</h5>
          </span>
          <p>$250.00</p>
        </div>
        <div className="buttons">
          <div className="btn1">
            <span onClick={decrease}>-</span>
            {cout}
            <span onClick={increase}>+</span>
          </div>
          <button className="cart-content" onClick={add_cart}>
            <span>
              <img src={cart} alt="cart-pic" />
            </span>
            Add to cart
          </button>
        </div>
      </p>
    </div>
  );
}

export default Content;
