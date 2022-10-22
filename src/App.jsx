import React from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Category from "./components/Category";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;
