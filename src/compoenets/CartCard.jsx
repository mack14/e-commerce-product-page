import Card from "react-bootstrap/Card";
import "./cartcard.css";
import del_icon from "../images/icon-delete.svg";
import cart_logo_icon from "../images/image-product-1-thumbnail.jpg";

function CartCard({ cartcard, decrease_cart }) {
  const price = "125.00";
  const price_number = parseFloat(price);
  const total = cartcard * price_number;

  return (
    <div className="cart-card">
      <Card border="primary" className="card">
        <p className="header">Cart</p>
        {cartcard <= 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <Card.Body>
            <div className="card-detail">
              <div className="card-image-1">
                <img src={cart_logo_icon} alt="card logo" />
              </div>
              <div className="card-content">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  <span>${price} * </span>
                  <span>{cartcard} </span>
                  <span className="total">${total}.00</span>
                </p>
              </div>
              <div className="del_icon" onClick={decrease_cart}>
                <img src={del_icon} alt="delete-icon" />
              </div>
            </div>
            <button className="checkout">Checkout</button>
          </Card.Body>
        )}
      </Card>
    </div>
  );
}

export default CartCard;
