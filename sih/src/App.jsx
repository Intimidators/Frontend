import "./App.css";

<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
=======
import { Routes, Route } from "react-router-dom";
>>>>>>> main
=======
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
>>>>>>> main

// pages routes
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> main
import Dashboard from "./pages/dashboard/dashboard";
import PendingPhotosForApproval from "./pages/dashboard/components/pendingSection/pendingPhotosForApproval";
import PendingResearchWorkForApproval from "./pages/dashboard/components/pendingSection/pendingResearchWorkForApproval";
import PendingVideosForApproval from "./pages/dashboard/components/pendingSection/pendingVideosForApproval";
<<<<<<< HEAD
=======
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
>>>>>>> main
=======
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import DashboardHome from "./pages/dashboard/components/Home/DashboardHome";
import Community from "./portals/community/Community";
>>>>>>> main
// pages Routes ends

// portals routes

// portals routes ends121

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
<<<<<<< HEAD
<<<<<<< HEAD
      <Route path="/signup" element={<Signup />} />

      <Route exact path="/dashboard" element={<Dashboard />}>
        <Route path="pendingPhotos" element={<PendingPhotosForApproval />} />
        <Route path="pendingVideos" element={<PendingVideosForApproval />} />
        <Route path="pendingResearch" element={<PendingResearchWorkForApproval />} />
      </Route>
=======
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/signup" element={<Signup />} />
>>>>>>> main
=======
      <Route path="/signup" element={<Signup />} />

      <Route exact path="/dashboard" element={<Dashboard />}>
        <Route path="" element={<DashboardHome />} />
        <Route path="pendingPhotos" element={<PendingPhotosForApproval />} />
        <Route path="pendingVideos" element={<PendingVideosForApproval />} />
        <Route
          path="pendingResearch"
          element={<PendingResearchWorkForApproval />}
        />
      </Route>
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/signup" element={<Signup />} />

      {/* <Route exact path="/community" element={<Community/>}> */}
      {/* </Route> */}
>>>>>>> main
    </Routes>
  );
}

export default App;
