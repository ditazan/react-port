import React from "react";
import coverImage from "../../assets/images/bio-photo.png";

function About() {
  return (
    <section className="about">
      <div className="about-item about-item-top">
        {" "}
        <h5 id="about">
          <mark>
            Dita is a Creative Technologist and Full Stack Web Developer with a
            BFA in Design and Technology from Parsons School of design.{" "}
          </mark>
        </h5>
      </div>
      <div className="about-item about-item-bottom">
        <img
          src={coverImage}
          className=""
          style={{ width: "100%" }}
          alt="cover"
        />
      </div>
    </section>
  );
}

export default About;
