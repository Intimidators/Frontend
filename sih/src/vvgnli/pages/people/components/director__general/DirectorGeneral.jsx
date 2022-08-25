import React from "react";

import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";
import PeopleSubmenu from "../people__submenu/PeopleSubmenu";
import img1 from "./people1.jpg";
const DirectorGeneral = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div style={{ padding: "0" }} className="main__content__about__us">
        <div className="main__content__about__us__container">
          {console.log("about us section")}
          <PeopleSubmenu />
          <div
            style={{ width: "100%", height: "100%", border: "2px solid red" }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "2px solid green",
                display: "flex",
              }}
              className="upper"
            >
              <div
                style={{
                  width: "20%",
                  height: "30vh",
                  border: "2px solid blue",
                }}
              >
                <img
                  style={{ width: "100%", height: "100% " }}
                  src={img1}
                  alt="image"
                ></img>
              </div>
              <div></div>
            </div>
            <div className="lower">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DirectorGeneral;
