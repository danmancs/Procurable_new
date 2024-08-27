import React from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import '@lottiefiles/lottie-interactivity';

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
                                <Player
                                    src={d.icon}
                                    className="player"
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
                </div>

                {/* Moved the PM Guide link outside of the row mapping */}
                <div id="PM-Guide" className="text-center">
                    <p>
                        <a href="https://procurable.group/HTML/project.html" target="_blank" rel="noopener noreferrer">
                            <h3>Check out our project management guide.</h3>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};
