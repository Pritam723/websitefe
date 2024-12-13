import React from "react";
import ReactDOM from "react-dom";
import Home from "./src/Home";
import Test from "./src/Home/Test";
import Navbar from "./src/Home/Navbar";
// import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

function App() {
  return <Home />;
}

ReactDOM.render(<App />, document.getElementById("root"));
