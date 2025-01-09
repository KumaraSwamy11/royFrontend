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
import SuccessPage from "./components/Builder/SuccessPage";
import Login from "./components/Builder/Login";
import BuilderProfile from "./components/Builder/BuilderProfile";

function App() {
  return (
    <Router>
      {/* Conditionally render Header, Home, Adv, Choose, and Footer for all routes except /success */}
      <Routes>
        <Route
          path="/success"
          element={
            <>
              <Header />
              <SuccessPage />
              <Footer />
            </>
          } // SuccessPage will be shown full screen
        />
        {/* Add other routes */}

        <Route path="/login" element={<Login />} />
        <Route path="/builderprofile" element={<BuilderProfile />} />

        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Adv />
              <Choose />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

// <>
// <Router>
//
//   <Routes>
//     <Route path="/success" element={<SuccessPage />} />
//   </Routes>
// </Router>
// </>
