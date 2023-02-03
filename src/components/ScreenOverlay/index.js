import React from "react";

import "./style.css";
import miku from "../../assets/images/miku.png";
import miku2 from "../../assets/images/mikuuu.png";
import finger from"../../assets/images/middlefinger.png";

function ScreenOverlay() {
  return (
    <div className="overlay">
      <div className="scene">
        <div id="cube" className="cube">
          <section id="top" className=" cube-face top"></section>

          <section id="right" className=" cube-face right  ">
            <div className=" h-100  slide-track">
              <img src={miku} alt="sticker" className="recolor" />
              <img src={finger} alt="sticker" className="recolor"/>
              <img src={miku2} alt="sticker" className="recolor"/>
              <img src={miku} alt="sticker" className="recolor" />
              <img src={finger} alt="sticker" className="recolor"/>
              <img src={miku2} alt="sticker" className="recolor"/>

            </div>
          </section>
          <section id="left" className=" cube-face left">
          <div className=" h-100  slide-track">
              <img src={miku} alt="sticker" className="recolor" />
              <img src={finger} alt="sticker" className="recolor"/>
              <img src={miku2} alt="sticker" className="recolor"/>
              <img src={miku} alt="sticker" className="recolor" />
              <img src={finger} alt="sticker" className="recolor"/>
              <img src={miku2} alt="sticker" className="recolor"/>

            </div>
          </section>

          <section id="bottom" className="bottom cube-face ">
            {/* <div className="time d-flex justify-content-between mt-3 mb-5  w-100      custom-border">
              <h3>time</h3> <h3>date</h3>
            </div> */}
            <div className="interface ">
              <div className="row justify-content-between top-interface">
                <div className="mt-auto col ">
                  <h1 className="">
                    Dit<br></br> Zanelli
                  </h1>
                </div>
                <div className="col-4 d-flex flex-column justify-content-around p-2">
                  <div className="aboutnav w-100 ">
                    <div class="slidecontainer ">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value="2"
                        className="slider w-100"
                        id="about"
                      ></input>
                    </div>
                  </div>

                  <div className="contactnav w-100">
                    <div class="slidecontainer">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        value="7"
                        className="slider w-100"
                        id="contact"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row justify-content-between bottom-interface p-3">
                <div className="creative custom-border col-xs-5 col-md m-2">
                  <div className="row justify-content-center">
                    <div className="projects p-4 col-5 d-flex flex-wrap">
                      <div className="row justify-content-between">
                        <div className="col button        custom-border ">
                          *
                        </div>
                        <div className="col button        custom-border  ">
                          *
                        </div>
                        <div className="col button        custom-border ">
                          *
                        </div>
                        <div className="col button        custom-border ">
                          *
                        </div>
                        <div className="col button        custom-border ">
                          *
                        </div>
                      </div>
                    </div>
                    <div className="sketches p-4 col-5 d-flex flex-wrap ">
                      <div className="row justify-content-between">
                        <div className="col button        custom-border">*</div>
                        <div className="col button        custom-border">*</div>
                        <div className="col button        custom-border">*</div>
                        <div className="col button        custom-border">*</div>
                        <div className="col button        custom-border">*</div>
                        <div className="col button        custom-border">*</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="web m-2 custom-border col-xs-5 col-md-4  p-3 ">
                  <div className="row align-items-center">
                    <div className="knob col">*</div>
                    <div className="knob col">*</div>
                    <div className="knob col">*</div>
                    <div className="knob col">*</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="main" className="cube-face glowing"></section>
          <div  ></div>
        </div>
      </div>
    </div>
  );
}

export default ScreenOverlay;
