import React from "react";
import "./App.css";
import Horoscope from "./components/Horoscope.jsx";
import NavbarMenu from "./components/NavbarMenu.jsx";
import data from "./data.js";


function App() {
  return(
    <div className="App">
      <NavbarMenu />
      <Horoscope dataArray={data} />
    </div>
  )
}
export default App;
