import React from "react";

import "./library.css";
import VvgnliMainMenu from "../../main__menu_vvgnli/VvgnliMainMenu";
import library from "./Library.png";
import { RootRef } from "@material-ui/core";

const Library = () => {
  return (
    <>
      <VvgnliMainMenu />
      <div className="about">
        <div className="library__container">
          <div className="about__container__left__container">
            <div className="about__container__left">
              <div className="image__container">
                <img src={library} alt="library" />
              </div>
              <div className="paragraph__container">
                <p>Mr. Shreeniwas Kumar Varma</p>
                <p>Assistant Library & Information Officer</p>
                <p>
                  <b>Direct: </b> 0120-2411262
                </p>
                <p>
                  <b>Phone: </b> 0120-2411533/34/35
                </p>
                <p>
                  <b>Ext: </b> 202
                </p>
                <p>
                  <b>Email-id: </b>
                  <a href="mailTo:skverma.vvgnli@gov.in">
                    skverma.vvgnli@gov.in
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="about__container__right__container">
            <div className="about__container__right">
              <section>
                <h1>Library</h1>
                <hr className="line" />
                <p>
                  N. R. De Resource Centre on Labour Information (NRDRCLI) is
                  one of the most reputed library cum documentation Centre in
                  the area of labour studies in the country. The Centre was
                  renamed in memory of late (Shri) Nitish R. De, the founder
                  Dean of the Institute on July 01, 1999 to commemorate the
                  Silver Jubilee Celebration of the Institute. The Centre is
                  fully computerized and offers the following services and
                  products to it users.
                </p>
                <p>
                  <b>Physical Achievements</b>
                </p>
                <p>
                  <b>Books</b> – The library has 65530 books / reports / bound
                  volume of journals / slides / CDs / photographs / posters /
                  banners / audio visual, etc till March 2020.
                </p>
                <p>
                  <b>Journals</b> – The library regularly subscribed to 148
                  professional journals, magazines and newspapers in printed and
                  electronic forms.
                </p>
              </section>
              <hr />
              <section>
                <p>
                  <b>Services</b>
                </p>
                <p>
                  The library is constitutionally maintaining the following
                  services to users populations
                </p>
                <ul>
                  <li>Article Alert Service</li>
                  <li>Lending Service</li>
                  <li>Inter-Library Loan service</li>
                  <li>Selective Dissemination of Information (SDI)</li>
                  <li>Current Awareness Service</li>
                  <li>Bibliographical Service</li>
                  <li>On-line Search</li>
                  <li>Newspaper Article clippings</li>
                  <li>Micro-fiche search and printing</li>
                  <li>Reprographic Service</li>
                  <li>CD-ROM Search</li>
                  <li>Audio/Visual Service</li>
                  <li>Current Content Service</li>
                  <li>JSTOR Search</li>
                </ul>
              </section>
              <hr />
              <section>
                <p>
                  <b>Products</b>
                </p>
                <p>
                  The library provides following products in printed forms to
                  users populations:
                </p>
                <ul>
                  <li>
                    <b>Article Alert Service</b> – Weekly publication providing
                    bibliographical information of important articles appeared
                    in the subscribed journals / magazines and also hosted on
                    the Institute’s web site for public access.
                  </li>
                  <li>
                    <b>e-Newspaper Clipping Service</b> – Weekly service of scan
                    copy of all major news pertaining to labour & related
                    subjects with index .
                  </li>
                  <li>
                    <b>Guide to Periodical Literature</b> – Quarterly in-house
                    publication providing bibliographical information of
                    articles from over 175 selected journals / magazine
                  </li>
                  <li>
                    <b>Current Awareness Bulletin</b> – Quarterly in-house
                    publication providing bibliographical information on
                    acquisition in NRDRCLI,
                  </li>
                  <li>
                    <b>Current Content Service</b> - Monthly publications. It is
                    the compilation of content pages of subscribed journals.
                  </li>
                </ul>
              </section>
              <hr />
              <section>
                <p>
                  <b>Maintenance of specialize resource centres</b>
                </p>
                <p>
                  The following three specialized resource centre have been
                  created and maintained for reference purpose;
                </p>
                <ul>
                  <li>National Resource Centre on Child Labour</li>
                  <li>National Resource Centre on Gender Studies</li>
                  <li>National Knowledge Centre on Child Labour</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
