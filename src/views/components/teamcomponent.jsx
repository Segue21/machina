/* eslint-disable */
import React from "react";
import { Row, Col, Container } from "reactstrap";
import img1 from "../../assets/images/Logo Files/spacer-bg.jpg";

const TeamComponent = () => {
  return (
    <div>
      {/* <div className="spacer-bg">
        <img src={img1} />
      </div> */}
      <div className="spacer team2">
        <Container id="team">
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Experienced & Professional Team</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row
            className="m-t-30"
            align="center"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Col lg="3" md="6" className="m-b-30 m-r-40">
              <Row className="no-gutters">
                <Col md="12" className="pro-pic t1">
                  <div className="card-img-overlay">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="12">
                  <div className="p-t-10">
                    <h5 className="title font-medium">Chikhou Sokhana</h5>
                    <h6 className="subtitle">Networking & Telecom engineer</h6>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg="3" md="6" className="m-b-30 m-l-40">
              <Row className="no-gutters">
                <Col md="12" className="col-md-12 pro-pic t2">
                  <div className="card-img-overlay">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a href="#">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col md="12">
                  <div className="p-t-10">
                    <h5 className="title font-medium">El-hacen DIALLO</h5>
                    <h6 className="subtitle">Information Systems engineer</h6>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TeamComponent;
