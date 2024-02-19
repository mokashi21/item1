// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import Home from "./component/Home";
import Navbar from "./pages/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
