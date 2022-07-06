import React from "react";
import coverImage from "../../assets/images/bio-photo.png";
import roaches from"../../assets/images/roaches.png";
import sparkle from"../../assets/images/original_f8a5fcd76f3c6b51c9cf251419588e51.gif";
import orb from "../../assets/images/orb.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-item about-item-top">
        <h5 id="about">
          <mark>
            Dita Zanelli is interested in the effects virtual landscapes have on
            our identities and the ways in which we form communities in those
            spaces.<br></br><br></br> With a BFA in Design and Technology from Parsons School of
            Design and a certificate in Full Stack Web Development from Rice
            Univeristy, Dita is focusing on marrying their love for creative
            technology with the accesibility of the web.
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

      <div className="about-item ">
        <img
          src={sparkle}
          className=""
          style={{ width: "100%" }}
          alt="cover"
        />
      </div>
      <div className="about-item ">
        <img
          src={roaches}
          className=""
          style={{ width: "100%" }}
          alt="cover"
        />
      </div>
      <div className="about-item ">
        <img
          src={orb}
          className=""
          style={{ width: "100%" }}
          alt="cover"
        />
      </div>
    </section>
  );
}

export default About;
