import React from "react";


function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="scroll" id="email">
        <h2 className="placeholder-email">
          <a href="mailto:ditazanelli@gmail.com">email</a>
        </h2>
        <h2 className="email" id="myEmail">ditazanelli@gmail.com</h2>
      </div>

      <div className="scroll" id="github">
        <h2 className="placeholder-git">
          <a href="www.github.com/ditazan">github</a>
        </h2>
        <h2 className="git" id="myGit">github.com/ditazan</h2>
      </div>
    </section>
  );
}

export default Contact;
