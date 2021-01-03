import React from "react";
import "./style.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import ContextSlide from "./components/ContextSlide";
import Product from "./components/Product";

import { Context, ThemeContext } from "./context/ThemeContext";

export default function App() {
  return (
    <Context>
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <div className="row mt-5">
              <ContextSlide />
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/product">
                  <Product />
                </Route>
                <Route exact path="/">
                  <Main />
                </Route>
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </Router>
    </Context>
  );
}
