import React from "react";
import { Col } from "reactstrap";
import banner_video from "../../assets/banners/video-bg.mp4";
import poster from "../../assets/banners/machina-bg.jpg";


const HeaderBanner = () => {
  return (
    <div id="videoWrapper" className="banner1">
      <div id="fullScreenDiv">
        <img id="video" src={poster} />

        <div id="fullScreenDiv-1">
          <div className="overlay justify-content-center">
            <Col md="12" className="align-self-left ">
              <h1 className="title">Journée MACHINA</h1>

              <h4 className="subtitle font-light">
                {/* <br /> */}
                <strong>Machine Learning Skills for ICT Professionals</strong>
              </h4>

              <h5 className="subtitle">
              <i class="fa-solid fa-calendar-days"></i> 22 Novembre 2022 à 10h CET (par visio)
                <br/>
                
                <i class="fa fa-location-dot"></i> Lien zoom
                
                <br/> 
                
                <br/> 
                
                
                <a href="https://docs.google.com/forms/d/1JklcpJco6j9rm-SqUON9NWk8YdKnsFpB6RcuaFq4cUk/prefill"
                target="_blank"
                className="link"> Inscrivez-vous </a> pour participer à l'événement

                
              </h5>
            </Col>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
