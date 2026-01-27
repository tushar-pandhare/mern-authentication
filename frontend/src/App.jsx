import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// import SignupPage from "./SignupPage";
// import LoginPage from "./LoginPage";

const Home = () => {
  return (
    <div>
      <h2>Welcome 🎉 You are logged in!</h2>
    </div>
  );
};

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
