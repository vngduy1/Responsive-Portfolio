import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import "animate.css";
import TrackVisibility from "react-on-screen";

import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import instagram from "../assets/img/instagram.png";
import tiktok from "../assets/img/tiktok.png";
import sern from "../assets/img/sern.png";
import thread from "../assets/img/thread.png";
import DVNBlog from "../assets/img/dvn_blog.png";
import { useSelector } from "react-redux";
import { getTranslation } from "../languages";

export default function Projects() {
  const language = useSelector((state) => state.language.language);
  const projects = [
    {
      title: "SERN",
      description: "Design & Development",
      imgUrl: sern,
      link: "https://sern-fe-silk.vercel.app/home",
    },
    {
      title: "Instagram",
      description: "Design & Development1",
      imgUrl: instagram,
      link: "https://distagram.vercel.app/",
    },
    {
      title: "Tiktok",
      description: "Design & Development2",
      imgUrl: tiktok,
      link: "https://tiktok-ui-swart-nine.vercel.app/",
    },
  ];
  const projects2 = [
    {
      title: "Thread",
      description: "Design & Development",
      imgUrl: thread,
      link: "https://sern-fe-silk.vercel.app/home",
    },
    {
      title: "DVNBlog",
      description: "Design & Development1",
      imgUrl: DVNBlog,
      link: "https://distagram.vercel.app/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInUp" : ""
                  }
                >
                  <h2>{getTranslation(language, "project.project")} </h2>
                  <p>{getTranslation(language, "project.intro")}</p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    {getTranslation(language, "project.tab1")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    {getTranslation(language, "project.tab2")}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    {getTranslation(language, "project.tab3")}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey={"first"}>
                  <Row>
                    {projects.map((project, i) => {
                      return <ProjectCard key={i} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey={"second"}>
                  <Row>
                    {projects2.map((project, i) => {
                      return <ProjectCard key={i} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey={"third"}>
                  {getTranslation(language, "project.no_pane")}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        className="background-image-right"
        alt="color-sharp2"
      />
    </section>
  );
}
