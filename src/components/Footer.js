import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import MailchimpForm from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useSelector } from "react-redux";
import { getTranslation } from "../languages";

export default function Footer() {
  const language = useSelector((state) => state.language.language);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/">
                <img src={navIcon1} alt="nav-icon1" />
              </a>
              <a href="/">
                <img src={navIcon2} alt="nav-icon2" />
              </a>
              <a href="/">
                <img src={navIcon3} alt="nav-icon3" />
              </a>
            </div>
            <p>{getTranslation(language, "footer")} </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
