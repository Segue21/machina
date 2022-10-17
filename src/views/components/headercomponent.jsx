/* eslint-disable */
import React, { useState } from "react";
import {
  Container,
  NavbarBrand,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from "reactstrap";

// import logo from "%PUBLIC_URL%/Favicon/Logo-01.png";
import logo2 from "../../assets/images/Logo Files/machina.png";

const HeaderComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <div className="topbar fixed-header   header1 po-relative">
        <Container>
          <Navbar className="navbar-expand-lg h1-nav">
            <NavbarBrand href="#">
              <img src={logo2} width={null} height={50} alt="IzlyTech" />
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse isOpen={isOpen} navbar id="header1">
              <Nav navbar className="ml-auto mt-2 mt-lg-0">
                <NavItem>
                  <NavLink onClick={isOpen ? toggle : null} href="/#aboutus">
                    À PROPOS
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink onClick={isOpen ? toggle : null} href="/#service">
                    PROGRAMME
                  </NavLink>
                </NavItem>

                {/* <NavItem>
                  <NavLink href="/#team">Team</NavLink>
                </NavItem> */}

                <NavItem>
                  <a
                    onClick={isOpen ? toggle : null}
                    className="btn"
                    target="_blank"
                    id="contact-btn"
                    href="https://docs.google.com/forms/d/1JklcpJco6j9rm-SqUON9NWk8YdKnsFpB6RcuaFq4cUk/prefill"
                  >
                    INSCRIVEZ-VOUS{" "}
                  </a>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
        {/* <hr id="nav_line_1" /> */}
        <hr id="nav_line_2" />
      </div>
    </div>
  );
};

export default HeaderComponent;
