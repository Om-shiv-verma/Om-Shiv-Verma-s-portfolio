import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Natours Project",
      description:
        "A tours booking website , with the implementation of Authentication , CRUD operations , PUG templates and Stripe Payment Gateway made by Node.js and Express.js",
      imgUrl: projImg1,
      gitUrl: "https://github.com/Om-shiv-verma/Natours",
    },
    {
      title: "React.js Portfolio Website",
      description:
        "A porfolio website made with React.js and React Bootstrap, showcasing my skills :",
      imgUrl: projImg4,
      gitUrl: "https://github.com/Om-shiv-verma/Natours",
    },
    {
      title: "Food Ordering Website",
      description:
        "In this project we will build a realtime online pizza order app using Node Js, Express Js and Mongo DB. we will be using tailwind css forfrontend as a css framework and will be using EJS template engine as well.we will be using socket.io for realtime communication.",
      imgUrl: projImg2,
      gitUrl: "https://github.com/Om-shiv-verma/Natours",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      gitUrl: "https://github.com/Om-shiv-verma/Natours",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      gitUrl: "https://github.com/Om-shiv-verma/Natours",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      gitUrl: "https://github.com/Om-shiv-verma/Natours",
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
                  <h2>Projects</h2>
                  <p>
                    In my portfolio, I showcase a diverse range of projects
                    reflecting my expertise in various technologies and domains.
                    Let's delve into the highlights of these endeavors:
                  </p>
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
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  );
};
