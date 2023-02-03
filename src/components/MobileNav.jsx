import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const MobileNav = () => {
  return (
    <div>
      <ul className="list-unstyled float-start">
        <li className="pb-3">
          <a href="#about">About</a>
        </li>
        <li className="pb-3">
          <a href="#services">Services</a>
        </li>
        <li className="pb-3">
          <a href="#works">Works</a>
        </li>
        <li className="pb-3">
          <a href="#contact">Reach Me</a>
        </li>
      </ul>

      <div className="float-end">
        <div className="mb-3">
          <a href="https://github.com/Osinfade-Idris">
            <GitHubIcon className="mobile-nav-social" />
          </a>
        </div>
        <div className="mb-3">
          <a href="https://www.linkedin.com/in/idris-osinfade-b020a9155">
            <LinkedInIcon className="mobile-nav-social" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
