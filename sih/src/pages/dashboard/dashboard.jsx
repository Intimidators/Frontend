import React from "react";
import { Outlet } from "react-router-dom";
// import DashboardMainMenu from "./main__menu__dashboard/DashboardMainMenu";

const dashboardHome = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__body">
        <div className="dashboard__body__homepage">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default dashboardHome;
