import React from "react";

import {
  WhatVisione,
  Header,
  Services,
  Projects
} from "./containers";

import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <WhatVisione />
    <Services />
    <Projects/>
  </div>
);

export default App;
