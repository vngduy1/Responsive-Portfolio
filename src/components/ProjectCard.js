import Col from "react-bootstrap/Col";
import NavLink from "react-bootstrap/esm/NavLink";

export default function ProjectCard({ title, description, imgUrl, link }) {
  return (
    <Col sm={6} md={4}>
      <NavLink href={link} target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="imgUrl" style={{ minHeight: "200px" }} />
          <div className="proj-txtx">
            <h4>{title} </h4>
            <span>{description} </span>
          </div>
        </div>
      </NavLink>
    </Col>
  );
}
