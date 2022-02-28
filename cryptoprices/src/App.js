import React from "react";
import "./App.css";
//Import route and our components
import { Route, Switch } from "react-router-dom";
import Currencies from "./pages/Currencies";
import Main from "./pages/Main";
import Price from "./pages/Price";
import Nav from "./components/Nav";

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Route>
        <Route Path="/" element={<Main />} />
        <Route Path="/currencies" element={<Currencies />} />
        <Route Path="/price" element={<Price />} />
        <Route Path="main" element={<Main />} />
        <Route Path="nav" element={<Nav />} />
      </Route>
    </div>
  );
}

export default App;