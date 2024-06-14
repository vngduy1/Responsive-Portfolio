import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguages } from "../redux/languages/languageSlice";
import { getTranslation } from "../languages";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(toggleLanguages(selectedLanguage));
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  });

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scroller" : ""}>
      <Container style={{ whiteSpace: "nowrap" }}>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              {getTranslation(language, "navbar.home")}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              {getTranslation(language, "navbar.skill")}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              {getTranslation(language, "navbar.project")}
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#linkIn" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="linkIn" />
              </a>
              <a
                href="https://www.facebook.com/akira.hanatsuki/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/gokku_zui/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
            <select value={language} onChange={handleLanguageChange}>
              <option value="vi"> VietNam</option>
              <option value="jp"> 日本語</option>
              <option value="en"> English</option>
            </select>
            <button
              className="vvd"
              onClick={() => onUpdateActiveLink("connect")}
            >
              <span>{getTranslation(language, "navbar.connect")}</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
