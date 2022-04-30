import React from "react";

import {
  WhatVisione,
  Header,
  Services,
  Projects,
  Customers,
  Contacts
} from "./containers";
import Footer from "./components/footer/Footer";

import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <WhatVisione />
    <Services />
    <Projects/>
    <Customers/>
    <Contacts/>
    <Footer/>
  </div>
);

export default App;
