import React from "react";
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

import logo from "../../assets/images/Logo Files/Logo-01.png";

const ContactComponent = () => {
  function onOnclickHandler(e) {
    e.preventDefault();

    const nom = String(e.target.name.value);
    const email = String(e.target.email.value);
    const message = String(e.target.message.value);

    window.Email.send({
      Host: "smtp.elasticemail.com",
      Username: "contact@izlytech.com",
      Password: "F13273A5106BE84B241AC7DBAC27692F4792",
      To: "contact@izlytech.com",
      From: email,
      Subject: nom,
      Body: message,
    }).then((message) => alert("Votre message a été envoyé"));

    // Email.send({
    //   Host: "smtp.yourisp.com",
    //   Username: "username",
    //   Password: "password",
    //   To: "them@website.com",
    //   From: "you@isp.com",
    //   Subject: "This is the subject",
    //   Body: "And this is the body",
    // }).then((message) => alert(message));
  }

  return (
    <div>
      {/* <div className="spacer-bg">
        <img src={img1} />
      </div> */}
      <div className="contact1" id="contact">
        <Row>
          <Container>
            <div className="spacer">
              <Row className="m-0">
                <Col lg="8">
                  <div className="contact-box p-r-40">
                    <h4 className="title">Nous envoyez un mail</h4>
                    <Form onSubmit={onOnclickHandler}>
                      <Row>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              id="name"
                              type="text"
                              placeholder="Nom"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup className="m-t-15">
                            <Input
                              type="text"
                              id="email"
                              placeholder="Email"
                              pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup className="m-t-15">
                            <Input
                              id="message"
                              type="textarea"
                              placeholder="message"
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <Button
                            type="submit"
                            className="btn btn-danger-gradiant m-t-20 btn-arrow"
                          >
                            <span>
                              {" "}
                              SOUMETTRE <i className="ti-arrow-right"></i>
                            </span>
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="detail-box p-40 bg-info">
                    <h2 className="text-white">
                      <img src={logo} width="90%" height="90%" alt="IzlyTech" />
                    </h2>
                    <p className="text-white m-t-30">
                      <i className="fa fa-phone" /> +222 20 14 15 00
                    </p>
                    <p className="text-white">
                      <i className="fa fa-envelope" /> contact@izlytech.com
                    </p>
                    <p className="text-white">
                      <i
                        className="fa fa-map-marker"
                        style={{ marginRight: "3px", marginLeft: "5px" }}
                      />{" "}
                      Tevragh Zein, Nouakchott
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Row>
      </div>
    </div>
  );
};

export default ContactComponent;
