import React from "react";

import "./App.css";

import Header from "./Components/Header/header";
import { Provider } from "react-redux";
import store from "./Store/store";

function App() {
  return (
    <Provider store={store}>
      <div class="home-bg" style={{ overflowX: "hidden" }}>
        <Header />
      </div>
    </Provider>
  );
}

export default App;
