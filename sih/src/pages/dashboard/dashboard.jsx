import React from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "./components/DashboardMenu/dashboardMenu";
// import DashboardMainMenu from "./main__menu__dashboard/DashboardMainMenu";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <DashboardMenu />
      <div className="dashboard">
        <div className="dashboard__body">
          <div className="dashboard__body__homepage">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
