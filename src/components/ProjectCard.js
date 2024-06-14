import Col from "react-bootstrap/Col";

export default function ProjectCard({ title, description, imgUrl, link }) {
  return (
    <Col sm={6} md={4}>
      <span href={link} target="_blank">
        <div className="proj-imgbx">
          <img src={imgUrl} alt="imgUrl" style={{ minHeight: "200px" }} />
          <div className="proj-txtx">
            <h4>{title} </h4>
            <span>{description} </span>
          </div>
        </div>
      </span>
    </Col>
  );
}
