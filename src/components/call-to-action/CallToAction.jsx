import React from "react";
import { Container, Row, Col } from "reactstrap";

const CallToAction = () => {
  return (
    <div className="coming-soon" id="coming">
      <Container className="py-5 mt-5">
        <Row>
          <Col md="6">
            <div className="d-flex align-items-center">
              <div id="coming-text">
                <h2 className="title text-white font-weight-bold">
                  Mises à jour à vénir
                </h2>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
