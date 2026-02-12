import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Homepage from "./pages/Homepage";

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
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
