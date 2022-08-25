import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages routes
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/dashboard";
import PendingPhotosForApproval from "./pages/dashboard/components/pendingSection/pendingPhotosForApproval";
import PendingResearchWorkForApproval from "./pages/dashboard/components/pendingSection/pendingResearchWorkForApproval";
import PendingVideosForApproval from "./pages/dashboard/components/pendingSection/pendingVideosForApproval";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import ResetPassword from "./pages/resetPassword/ResetPassword";
import DashboardHome from "./pages/dashboard/components/Home/DashboardHome";
import Community from "./portals/community/Community";
// pages Routes ends

// portals routes

// portals routes ends121

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
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

      <Route exact path="/community" element={<Community/>}>
      </Route>
    </Routes>
  );
}

export default App;
