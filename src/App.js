import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import JWTEditor from "./Components/JWTEditor";
import About from "./Components/About";
import Hash from "./Components/Hash";
import Base64Decoder from "./Components/base64Decoder";
import Footer from "./Components/Footer";
// import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div className="flex w-full justify-center items-center bg-gray-900 p-4">
          <div className="w-[80%]">
            <Routes>
              <Route path="/" element={<JWTEditor />} />
              <Route path="/512-hash" element={<Hash />} />
              <Route path="/base-64" element={<Base64Decoder />} />
              {/* <Route path="/profile" element={<Profile />} /> */}
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
