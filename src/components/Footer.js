import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo1 from "../assets/img/logo1.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img
              className="bg-purple-400 rounded-full"
              width={75}
              height={150}
              src={logo1}
              alt="Logo"
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/om-shiv-verma-ba4a36232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="http://omshivpatel.in/">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/patel.om_shiv?igsh=cHh0bDA3Z2cxOGhw">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
