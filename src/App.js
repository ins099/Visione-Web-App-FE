import React from "react";

import {
  WhatVisione,
  Header,
  Services,
  Projects,
  Customers,
  Contacts
} from "./containers";

import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <WhatVisione />
    <Services />
    <Projects/>
    <Customers/>
    <Contacts/>
  </div>
);

export default App;
