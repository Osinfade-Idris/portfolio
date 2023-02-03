import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// portfolio images
import ValueHandler from "../assets/images/valuehandlers.PNG";
import PeerArena from "../assets/images/peerarena.PNG";
import SamkayTech from "../assets/images/samkaytech.PNG";
import Ebony from "../assets/images/ebony.PNG";


const portfolioDetails = [
  {
    image: ValueHandler,
    name: "Valuehandlers (Logistics)",
    siteLink: "https://www.valuehandlers.com/",
  },
  {
    image: PeerArena,
    name: "Peer Arena (Forum)",
    siteLink: "https://zumaroc.netlify.app",
  },
  {
    image: SamkayTech,
    name: "SamkayTech (Inventory & Sales)",
    siteLink: "http://samkaytechcentre.com/",
  },

  {
    image: Ebony,
    name: "Ebony World Capital",
    siteLink: "https://www.ebonyworldcap.com/",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

const Portfolio = () => {
  return (
    <section id="works" className="portfolio-section">
      <div className="container">
        <h2 className="text-center mb-5">Some Of My Works</h2>

        <div>
          <Carousel responsive={responsive}>
            {portfolioDetails.map((val, index) => {
              return (
                <div key={index}>
                  <div
                    style={{ backgroundImage: `url(${val.image})` }}
                    className="portfolio-card"
                  >
                    <div className="portfolio-card-overlay">
                      <a
                        className="sec-btn"
                        href={val.siteLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        view site
                      </a>
                    </div>
                  </div>
                  <h4 className="text-center">{val.name}</h4>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
