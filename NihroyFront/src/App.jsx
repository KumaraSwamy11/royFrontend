import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Adv from "./components/Home/Adv";
import Choose from "./components/Home/Choose";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Home />
        <Adv />
        <Choose />
        <Footer />
      </Router>
    </>
  );
}

export default App;
