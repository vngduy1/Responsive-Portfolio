import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Alert from "react-bootstrap/esm/Alert";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getTranslation } from "../languages";
export default function Newsletter({ onValidated, status, message }) {
  const language = useSelector((state) => state.language.language);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>{getTranslation(language, "newsletter.subscribe")} </h3>
            {status === "sending" && (
              <Alert>{getTranslation(language, "newsletter.sending")}</Alert>
            )}
            {status === "error" && <Alert variant="danger">{message} </Alert>}
            {status === "success" && (
              <Alert variant="success">{message} </Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">
                  {getTranslation(language, "newsletter.submit")}
                </button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
