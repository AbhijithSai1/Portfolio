import { Col } from "react-bootstrap";
import { Nav } from "react-bootstrap"; // Import Nav for linking to the project details

export const ProjectCard = ({ title, imgUrl, targetTab }) => {
  return (
    <Col sm={6} md={4}>
      {/* Nav.Link wraps the image to make it clickable */}
      <Nav.Link eventKey={targetTab} className="proj-imgbx-link">
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} />
          <div className="proj-txtx">
            <h4>{title}</h4>
          </div>
        </div>
      </Nav.Link>
    </Col>
  );
};
