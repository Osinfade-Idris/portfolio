import React from "react";
import FooterLogo from "../assets/images/idris-whitebg.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <img className="mb-3 mb-lg-2" src={FooterLogo} alt="" />
          </div>

          <div className="col-lg">
            <div className="mb-3 mb-lg-0">
              <a className="footer-mail" href="mailto:osinfadeidris@gmail.com">
                osinfadeidris@gmail.com
              </a>
            </div>
          </div>

          <div className="col-lg">
            <a href="tel:+2348147016112" className="footer-mail mb-3 mb-lg-0">
              +2347069576909
            </a>
          </div>

          <div className="col-lg">
            <div className="mb-3 mb-lg-0">
              <a href="https://github.com/Osinfade-Idris">
                <GitHubIcon className="footer-social" htmlColor="white" />
              </a>
              <a href="https://www.linkedin.com/in/idris-osinfade-b020a9155">
                <LinkedInIcon className="footer-social" htmlColor="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-bar">
        <p className="text-center text-white m-0">
          Template designed and developed by{" "}
          <a href="https://www.linkedin.com/in/idris-osinfade-b020a9155">Idris Osinfade</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
