import React from 'react';
import coverImage from "../../assets/images/bio-photo.png";

function About() {
  return (
<section className="my-5 about">
  <h5 id="about"><mark>Dita is a Creative Technologist and Full Stack Web Developer with a BFA in Design and Technology from Parsons School of design. They are most inspired by their childhood experience of roaming the virtual worlds of mmo's.</mark></h5>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
   
</section>
  );
}

export default About;