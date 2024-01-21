import NavBar from "./compoenets/NavBar";
import Slider from "./compoenets/slider";
import Content from "./compoenets/Content";
import LaptopSlider from "./compoenets/LaptopSlider";
import "./App.css";
import { useState } from "react";

function App() {
  const [cout, setCount] = useState(0);
  var [cartcard, setCartCard] = useState(0);

  const add_cart = () => {
    setCartCard((currentCount) => currentCount + cout);
  };

  const decrease_cart = () => {
    setCartCard((currentCartCard) => currentCartCard - 1);
  };

  const increase = () => {
    setCount((currentCount) => currentCount + 1);
  };

  const decrease = () => {
    // if (cout < 1) return;
    // setCount(cout - 1);
    setCount((currentCount) => Math.max(0, currentCount - 1));
  };
  return (
    <div className="App">
      <NavBar cartcard={cartcard} decrease_cart={decrease_cart} />
      <div className="slider_content">
        <div className="slider">
          <Slider />
        </div>
        <div className="laptopslider">
          <LaptopSlider />
        </div>

        <Content
          cout={cout}
          increase={increase}
          decrease={decrease}
          add_cart={add_cart}
        />
      </div>
    </div>
  );
}

export default App;
