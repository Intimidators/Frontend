import React from "react";

// import Login from "./pages/Login";

import "./index.css";

import { Routes, Route } from "react-router-dom";
// import Signup from "./pages/Signup";

// import SocialMedia from "./portals/social_media/SocialMedia";
import ThemeLanguageSwitcher from "./components/theme_language_switcher/ThemeLanguageSwitcher";
import PortalsMenu from "./components/portals_menu/PortalsMenu";
import Vvgnli from "./vvgnli/Vvgnli";

import About from "./vvgnli/pages/about_us/About";

import Research from "./vvgnli/pages/research/Research";

import EResource from "./vvgnli/pages/e_resources/EResource";
import DirectorGeneralDesk from "./vvgnli/pages/about_us/components/director__general__desk/DirectorGeneralDesk";
import VisionAndMission from "./vvgnli/pages/about_us/components/vision__and__mission/VisionAndMission";
import History from "./vvgnli/pages/about_us/components/history/History";
import GoverningBodies from "./vvgnli/pages/about_us/components/governing__bodies/GoverningBodies";
import Infrastructure from "./vvgnli/pages/about_us/components/infrastructure/Infrastructure";
import Networking from "./vvgnli/pages/about_us/components/networking/Networking";
import WhosWho from "./vvgnli/pages/about_us/components/whos__who/WhosWho";
import CentreForInternationalNetworking from "./vvgnli/pages/research/components/centre_for_international_networking/CentreForInternationalNetworking";
import CentreForLabourMarketStudies from "./vvgnli/pages/research/components/centre__for__labour__market__studies/CentreForLabourMarketStudies";
import CentreForEmploymentRelationsAndRegulations from "./vvgnli/pages/research/components/centre_for_employment_relations_and_regulations/CentreForEmploymentRelationsAndRegulations";
import CentreForAgrarianRelationsRuralAndBehaviouralStudies from "./vvgnli/pages/research/components/centre_for_agrarian_relations_rural_and_behavioural_studies/CentreForAgrarianRelationsRuralAndBehaviouralStudies";
import CentreForNationalResourceCentreOnChildLabour from "./vvgnli/pages/research/components/centre_for_national_resource _centre_on_child_labour/CentreForNationalResourceCentreOnChildLabour";
import CentreForIntegratedLabourHistoryResearchProgramme from "./vvgnli/pages/research/components/centre_for_integrated_labour_history_research_programme/CentreForIntegratedLabourHistoryResearchProgramme";
import CentreForLabourAndHealthStudies from "./vvgnli/pages/research/components/centre_for_labour_and_health_studies/CentreForLabourAndHealthStudies";
import CentreForGenderAndLabourStudies from "./vvgnli/pages/research/components/centre_for_gender_and_labour_studies/CentreForGenderAndLabourStudies";
import CentreForNorthEastIndia from "./vvgnli/pages/research/components/centre_for_north_east_india/CentreForNorthEastIndia";
import CentreForClimateChangeAndLabour from "./vvgnli/pages/research/components/centre_for_climate_change_and_labour/CentreForClimateChangeAndLabour";
import Library from "./vvgnli/pages/library/Library";
import Training from "./vvgnli/pages/training/Training";
import Current__Training__Programmes from "./vvgnli/pages/training/components/Current__training__programmes/Current__Training__Programmes";
import Domestic__Training__Programmes from "./vvgnli/pages/training/components/Domestic-Training-Programmes/Domestic__Training__Programmes";
import International__Training__Programmes from "./vvgnli/pages/training/components/International-Training-Programmes/International__Training__Programmes";
import ITEC__Sanction__FY__2022__23 from "./vvgnli/pages/training/components/ITEC-Sanction-FY-2022-23/ITEC__Sanction__FY__2022__23";
import Training__Calendar__2022__2023__English from "./vvgnli/pages/training/components/Training-Calendar-2022-2023-English/Training__Calendar__2022__2023__English";
import Training__Calendar__2022__2023__Hindi from "./vvgnli/pages/training/components/Training-Calendar-2022-2023-Hindi/Training__Calendar__2022__2023__Hindi";

import People from "./vvgnli/pages/people/People";

import DirectorGeneral from "./vvgnli/pages/people/components/director__general/DirectorGeneral";

import SeniorFellow from "./vvgnli/pages/people/components/senior__fellow/SeniorFellow";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app__container">
          <ThemeLanguageSwitcher />
          <PortalsMenu />
          <Routes>
            <Route path="/vvgnli" element={<Vvgnli />} />
            <Route path="/vvgnli/about-us" element={<About />} />
            <Route
              exact
              path="/vvgnli/about-us/director-general"
              element={<DirectorGeneralDesk />}
            />
            <Route
              exact
              path="/vvgnli/about-us/vision-mission"
              element={<VisionAndMission />}
            />
            <Route
              exact
              path="/vvgnli/about-us/history"
              element={<History />}
            />
            <Route
              exact
              path="/vvgnli/about-us/governing-bodies"
              element={<GoverningBodies />}
            />
            <Route
              exact
              path="/vvgnli/about-us/infrastructure"
              element={<Infrastructure />}
            />
            <Route
              exact
              path="/vvgnli/about-us/networking"
              element={<Networking />}
            />
            <Route
              exact
              path="/vvgnli/about-us/whoswho"
              element={<WhosWho />}
            />

            <Route path="/vvgnli/research" element={<Research />} />
            <Route
              path="/vvgnli/research/centreForInternationalNetworking"
              element={<CentreForInternationalNetworking />}
            />
            <Route
              path="/vvgnli/research/centreForLabourMarketStudies"
              element={<CentreForLabourMarketStudies />}
            />
            <Route
              path="/vvgnli/research/centreForEmploymentRelationsAndRegulations"
              element={<CentreForEmploymentRelationsAndRegulations />}
            />
            <Route
              path="/vvgnli/research/centreForAgrarianRelationsRuralAndBehaviouralStudies"
              element={<CentreForAgrarianRelationsRuralAndBehaviouralStudies />}
            />
            <Route
              path="/vvgnli/research/centreForNationalResourceCentreOnChildLabour"
              element={<CentreForNationalResourceCentreOnChildLabour />}
            />
            <Route
              path="/vvgnli/research/centreForIntegratedLabourHistoryResearchProgramme"
              element={<CentreForIntegratedLabourHistoryResearchProgramme />}
            />
            <Route
              path="/vvgnli/research/centreForLabourAndHealthStudies"
              element={<CentreForLabourAndHealthStudies />}
            />
            <Route
              path="/vvgnli/research/centreForGenderAndLabourStudies"
              element={<CentreForGenderAndLabourStudies />}
            />
            <Route
              path="/vvgnli/research/centreForNorthEastIndia"
              element={<CentreForNorthEastIndia />}
            />
            <Route
              path="/vvgnli/research/centreForClimateChangeAndLabour"
              element={<CentreForClimateChangeAndLabour />}
            />

            <Route path="vvgnli/training" element={<Training />} />
            <Route
              path="/vvgnli/training/ITEC-Sanction-FY-2022-23"
              element={<ITEC__Sanction__FY__2022__23 />}
            />
            <Route
              path="/vvgnli/training/Domestic-Training-Programmes"
              element={<Domestic__Training__Programmes />}
            />
            <Route
              path="/vvgnli/training/International-Training-Programmes"
              element={<International__Training__Programmes />}
            />
            <Route
              path="/vvgnli/training/Training-Calendar-2022-2023-Hindi"
              element={<Training__Calendar__2022__2023__Hindi />}
            />
            <Route
              path="/vvgnli/training/Training-Calendar-2022-2023-English"
              element={<Training__Calendar__2022__2023__English />}
            />
            <Route
              path="/vvgnli/training/Current-Training-Programmes"
              element={<Current__Training__Programmes />}
            />

            <Route path="vvgnli/library" element={<Library />} />
            <Route path="vvgnli/people" element={<People />} />
            <Route
              path="vvgnli/people/director-general"
              element={<DirectorGeneral />}
            />
            <Route
              path="vvgnli/people/senior-fellow"
              element={<SeniorFellow />}
            />

            <Route path="/vvgnli/e-resource" element={<EResource />} />

            <Route path="/community" element={<>community</>} />
            <Route path="/webinar" element={<>webinar</>} />
            <Route path="/research-section" element={<>research-section</>} />
            <Route path="/dashboard" element={<>dashboard</>} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
