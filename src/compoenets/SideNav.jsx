import { Navbar, Nav } from "react-bootstrap";
import "./side-nav.css";
import close from "../images/icon-close.svg";

function SideNav({ setShowSide, showside }) {
  const handleclose = () => {
    setShowSide(!showside);
  };
  return (
    <>
      {showside && (
        <Navbar className="side-nav">
          <img
            src={close}
            alt=""
            className="side-close"
            onClick={handleclose}
          />
          <Nav.Link href="#home">Collections</Nav.Link>
          <Nav.Link href="#features">Men</Nav.Link>
          <Nav.Link href="#pricing">Women</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
        </Navbar>
      )}
    </>
  );
}

export default SideNav;
