import React from "react";

import VvgnliMainMenu from "../../../../main__menu_vvgnli/VvgnliMainMenu";
import PeopleSubmenu from "../people__submenu/PeopleSubmenu";

const SeniorFellow = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div className="main__content__about__us">
        <div className="main__content__about__us__container">
          {console.log("about us section")}
          <PeopleSubmenu />
          senior fellow
        </div>
      </div>
    </>
  );
};

export default SeniorFellow;
