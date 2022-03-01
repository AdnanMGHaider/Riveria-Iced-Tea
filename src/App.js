import React, { useState } from "react";
import classes from "./App.module.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import TasteAndQuality from "./Components/TasteAndQuality/TasteAndQuality";
import AllIcedTea from "./Components/AllIcedTeas/AllIcedTeas";
import Testimonials from "./Components/Testimonials/Testimonials";
import Featured from "./Components/Featured/Featured";
import Instagram from "./Components/Instagram/Instagram";
import FindUs from "./Components/FindUs/FindUs";
import Footer from "./Components/Footer/Footer";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <main className={classes.container}>
        <TasteAndQuality />
        <AllIcedTea />
        <Testimonials />
        <Featured />
        <Instagram />
        <FindUs />
      </main>
      <Footer />
    </CartProvider>
  );
}
export default App;
