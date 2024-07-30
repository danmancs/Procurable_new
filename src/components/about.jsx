import React from "react";

export const About = (props) => {
    const formatText = (text) => {
        if (!text) return "loading...";

        // Replace placeholders with corresponding HTML tags
        const boldText = text.split("**").map((part, index) =>
            index % 2 === 1 ? <b key={index}>{part}</b> : part
        );

        const italicText = boldText.map((part, index) =>
            typeof part === "string"
                ? part.split("*").map((subPart, subIndex) =>
                    subIndex % 2 === 1 ? <i key={subIndex}>{subPart}</i> : subPart
                )
                : part
        );

        return italicText.flat();
    };
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
                      <img src="img/aton.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
                          <p>{props.data ? formatText(props.data.paragraph) : "loading..."}</p>
                          <p>{props.data ? formatText(props.data.paragraph2) : "loading..."}</p>
                          <p>{props.data ? formatText(props.data.paragraph3) : "loading..."}</p>
                          <p>{props.data ? formatText(props.data.paragraph4) : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
