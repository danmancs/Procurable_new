import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import '@lottiefiles/lottie-interactivity';
import { useLottie, useLottieInteractivity } from "lottie-react";

export const Services = (props) => {
  return (

      <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Procurable Projects offers an array of project services.
          </p>
        </div>
              <div className="row">
                 

          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                    {/*<i className={d.icon}></i>
                    <img src={d.gif} alt={d.name} />*/}
                    <Player
                        src={d.icon}
                        classname="player"
                        background="transparent"
                        speed="0.75"
                        style={{ width: "64px", height: "64px" }}
                        autoplay
                        loop
                        />

                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>

              ))
                      : "loading"}
                  <div id="PM Guide" className="text-center">
                      <div className="container">
                          <div className="section-title">
                              <p>
                                  <a href="https://procurable.group/HTML/project.html" target="_blank" rel="noopener noreferrer">
                                      Check out our project management guide.
                                  </a>
                              </p>
                          </div>
                      </div>
                  </div>

        </div>
      </div>
    </div>
  );
};
