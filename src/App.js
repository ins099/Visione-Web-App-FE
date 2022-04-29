import React from "react";

import {
  WhatVisione,
  Header,
  Services,
  Projects,
  Customers
} from "./containers";

import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <WhatVisione />
    <Services />
    <Projects/>
    <Customers/>
  </div>
);

export default App;
