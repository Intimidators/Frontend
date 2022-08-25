import React from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "./components/DashboardMenu/dashboardMenu";
// import DashboardMainMenu from "./main__menu__dashboard/DashboardMainMenu";

const dashboardHome = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__body">
        <DashboardMenu />
        <div className="dashboard__body__homepage">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default dashboardHome;
