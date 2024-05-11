import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="img1" src={imgUrl} alt="img2" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div>
            <a
              style={{ color: "black", textDecoration: "none" }}
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Git Link
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
};
