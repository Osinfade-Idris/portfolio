import React from "react";
import Icon from "./Icon";
import Tilt from "react-parallax-tilt";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="text-center">About Me</h2>

        <div className="row">
          <div className="col-lg-5 mt-5">
            <div>
              <p>
                I'm Idris Abiodun Osinfade a full stack developer based in Lagos, Nigeria
                with a B.Sc in Computer Science from The Federal University of Agriculture, Abeokuta.
              </p>

              <p>
                I specialize in building web applications for businesses and organizations also
                ensuring that they are functional and meets the client specification.
                I have over 4 years experience as a full stack engineer and i have developed several applications 
                ranging from event management systems, inventory and sales management system, transport and logistic applications.
              </p>

              <p>
                I'm consistently working towards improving my skillset to meet
                my clients needs, besides i believe learning never ends.
              </p>

              <p>
                I can work very well on my own and also love working with a
                team, I'm passionate about meeting people and impacting their
                lives. I love music and travelling.
              </p>
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="skill-box-wrapper">
              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="net" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">C# .NET</p>
              </div>

              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="mssql" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">MS-SQL</p>
              </div>

              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="css" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">CSS3</p>
              </div>

              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="laravel" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">PHP / Laravel</p>
              </div>

              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="js" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">JavaScript</p>
              </div>

              <div>
                <Tilt>
                  <div className="skill-box">
                    <Icon icon="react" />
                  </div>
                </Tilt>
                <p className="text-center mt-3">React</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
