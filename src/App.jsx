import { useContext, useState } from "react";
import "./App.css";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import Testimonials from "./components/testimonials/Testimonials";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "rgb(0 27 43)" : "white",
        color: darkMode ? "white" : "#222",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
