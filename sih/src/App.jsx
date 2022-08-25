import "./App.css";

import { Routes, Route } from "react-router-dom";

// pages routes
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
// pages Routes ends

// portals routes

// portals routes ends

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
