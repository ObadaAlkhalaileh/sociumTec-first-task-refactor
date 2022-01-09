import React from "react";
import "App.css";

import About from "components/About/About";
import Header from "components/Header/Header";
import Poster from "components/Poster/Poster";
import Products from "components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Poster />
      <About />
      <Products />
    </div>
  );
}

export default App;
