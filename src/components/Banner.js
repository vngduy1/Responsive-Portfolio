import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

import headerImg from "../assets/img/header-img.svg";
import { useSelector } from "react-redux";
import { getTranslation } from "../languages";

export default function Banner() {
  const language = useSelector((state) => state.language.language);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const web = getTranslation(language, "banner.web");
  const engineer = getTranslation(language, "banner.engineer");
  const program = getTranslation(language, "banner.program");
  const name = getTranslation(language, "banner.name");
  // const toRotate = ["Web developer", "Backend developer", "FontEnd Developer"];
  const toRotate = [web, engineer, program];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">
                    {getTranslation(language, "banner.portfolio")}
                  </span>
                  <h1>
                    {name} <span className="wrap">{text}</span>
                  </h1>
                  <p>{getTranslation(language, "banner.intro1")}</p>
                  <p>{getTranslation(language, "banner.intro2")}</p>
                  <p>{getTranslation(language, "banner.intro3")}</p>
                  <button onClick={() => console.log("conner")}>
                    {getTranslation(language, "banner.connect")}
                    <ArrowRightCircle size={25} />{" "}
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
