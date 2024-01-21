import { Navbar, Nav } from "react-bootstrap";
import "./navbar.css";
import menu from "../images/icon-menu.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import CartCard from "./CartCard";
import SideNav from "./SideNav";
import { useState } from "react";

function NavBar({ cartcard, decrease_cart }) {
  const [activeLink, setActiveLink] = useState("");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const [showcard, setShowCard] = useState(false);
  const handshowcard = () => {
    setShowCard(!showcard);
  };
  const [showside, setShowSide] = useState(false);
  const handleShowSide = () => {
    setShowSide(!showside);
  };
  return (
    <>
      <Navbar className="nav">
        <>
          <img
            src={menu}
            alt="nenu-icon"
            className="menu-icon"
            onClick={handleShowSide}
          />
          <Navbar.Brand href="#" className="seaker-nav">
            Sneaker
          </Navbar.Brand>

          <div className="laptop_nav">
            <Nav.Link
              href="#"
              onClick={() => handleNavLinkClick("Collections")}
              className={activeLink === "Collections" ? "active" : ""}
            >
              Collections
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => handleNavLinkClick("Men")}
              className={activeLink === "Men" ? "active" : ""}
            >
              Men
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => handleNavLinkClick("women")}
              className={activeLink === "women" ? "active" : ""}
            >
              Women
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => handleNavLinkClick("about")}
              className={activeLink === "about" ? "active" : ""}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#"
              onClick={() => handleNavLinkClick("contact")}
              className={activeLink === "contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
          </div>

          <div style={{ position: "relative" }}>
            <img
              src={cart}
              alt="cart"
              className="cart"
              onClick={handshowcard}
            />
            {cartcard > 0 && (
              <span
                style={{
                  position: "absolute",
                  bottom: "13px",
                  left: "5px",
                  backgroundColor: "hsl(26, 100%, 55%)",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 8px",
                  fontSize: "14px",
                }}
              >
                {cartcard}
              </span>
            )}
          </div>

          <img src={avatar} alt="avatar" className="avatar" />
        </>
      </Navbar>
      {showcard && (
        <CartCard cartcard={cartcard} decrease_cart={decrease_cart} />
      )}
      {showside && <SideNav setShowSide={setShowSide} showside={showside} />}
    </>
  );
}

export default NavBar;
