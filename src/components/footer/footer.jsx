/* eslint-disable */
import React from "react";
import { Container, Row, Col } from "reactstrap";
// import { HeaderComponent } from "../views/custom-components/sections/headercomponent.jsx";
import Header from "../header/header.jsx";
import logo1 from "../../assets/images/Logo Files/lyon.png";
import logo2 from "../../assets/images/Logo Files/insa.png";
import logo3 from "../../assets/images/Logo Files/liris.png";
import logo4 from "../../assets/images/Logo Files/europe.jpg";

const Footer = () => {
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  return (
    <div className="footer4 b-t spacer">
      <Container>
        <Row className="center">
          <Col  lg="3" md="6" className="m-b-30" align="center">
           <img id="lyon" src={logo1} />
          </Col>
          <Col lg="3" md="6" className="m-b-30" align="center">
          <img id="insa" src={logo2} />
          </Col>
          <Col lg="3" md="6" className="m-b-30" align="center">
          <img id="liris" src={logo3} />
          </Col>
         
        </Row>
        <div className="f4-bottom-bar">
          <Row>
            <Col md="12">
              <div className="font-14">
                <div className="copyright ">
                Soutenu par
                </div>
               
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <div className="font-14">
                <img  id="europe" src={logo4}/>
               
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
