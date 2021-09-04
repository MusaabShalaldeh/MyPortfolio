/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import promo1 from "assets/img/theme/promo-1.png";
import cardImg from "assets/img/theme/project1.jpg";
import cardImg2 from "assets/img/theme/project2.jpg";
import cardImg3 from "assets/img/theme/project3.jpg";
import cardImg4 from "assets/img/theme/project4.jpg";
import ill2 from "assets/img/ill/ill-2.svg";
import team1 from "assets/img/theme/team-1-800x800.jpg";
import team2 from "assets/img/theme/team-2-800x800.jpg";
import team3 from "assets/img/theme/team-3-800x800.jpg";
import team4 from "assets/img/theme/team-4-800x800.jpg";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Why Am I Excited About Tech ?{" "}
                        {/* <span>completed with examples</span> */}
                      </h1>
                      <p className="lead text-white">
                        I was always fascinated by Magic in Fantasy Tales, and
                        Computer Technology is the magic in our real-life
                        stories, and this magic allows us to make whatever we
                        want whether make our lives easier or create wonderful
                        worlds.
                      </p>
                      <div className="btn-wrapper">
                        {/* <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <h1>201 Projects</h1>
              <br />
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Salmon Cookies Stand
                          </h6>
                          <p className="description mt-3">
                            A humble online Cookies Shop that sells cookies that
                            are shaped like Salmon Fishes!
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://musaabshalaldeh.github.io/cookie-stand/"
                            target="_blank"
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            Bus Mall Application
                          </h6>
                          <p className="description mt-3">
                            A Web App where users can vote for their favorite
                            products!
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="https://musaabshalaldeh.github.io/bus-mall/"
                            target="_blank"
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            MOROS Covid-19 Vaccine Tracker
                          </h6>
                          <p className="description mt-3">
                            My Group project of 201 level, a web site where you
                            can do many things such as sumbitting your
                            information, taking quiz to test your knowledge
                            about covid-19 in general and much more!
                          </p>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="https://moros-v1.github.io/MTFV/"
                            // onClick={e => e.preventDefault()}
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container>
              <h1>301 Projects</h1>
              <br />
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Horned Beasts
                          </h6>
                          <p className="description mt-3">
                            A web page that shows some horned beasts!
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://ms-horned-beasts.netlify.app/"
                            target="_blank"
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            PlaceHolder Title
                          </h6>
                          <p className="description mt-3">
                            PlaceHolder Description
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            target="_blank"
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            PlaceHolder Title
                          </h6>
                          <p className="description mt-3">
                            PlaceHolder Description
                          </p>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            target="_blank"
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <Container>
              <br />
              <h1>401 Projects</h1>
              <br />
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            PlaceHolderTitle
                          </h6>
                          <p className="description mt-3">
                            PlaceHolder Description
                          </p>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            target="_blank"
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            PlaceHolder Title
                          </h6>
                          <p className="description mt-3">
                            PlaceHolder Description
                          </p>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            target="_blank"
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            PlaceHolder Title
                          </h6>
                          <p className="description mt-3">
                            PlaceHolder Description
                          </p>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            target="_blank"
                          >
                            Visit
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
            <h1>My Personal Projects</h1>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Cyberpunk X
                      </h4>
                      <p className="lead text-italic text-white">
                        A Level Project that I am very proud of which was made
                        for a community contest and got first place!
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg2} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Castle of the Bladekeeper
                      </h4>
                      <p className="lead text-italic text-white">
                        A level set in a fantasy world with an epic in-depth
                        story.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg3} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Priest Soul
                      </h4>
                      <p className="lead text-italic text-white">
                        A Mobile Horror game.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg alt="..." src={cardImg4} top />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Shark Escape
                      </h4>
                      <p className="lead text-italic text-white">
                        An endless runner mobile game.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={ill2}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    {/* <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div> */}
                    <div className="pl-4">
                      <h4 className="display-3 text-white">My Background</h4>
                      <p className="text-white">
                        Hello, my name is musab Shalaldeh, I am a self taught
                        game developer and level designer,I found the
                        oppertinuty to learn game development and carry on with
                        what I liked doing as a kid on my own after I finished
                        my highschool studies,I joined ASAC Course since I am
                        aswell interested in making web applications and to
                        expand on my overall knowledge as a programmer.Also I
                        believe that I am going to be a great asset to whatever
                        team that I work with, as I am a very passionate person
                        about computer technology field, and I don't rest until
                        whatever task I have at hand is done with the best
                        possible result.
                      </p>
                    </div>
                  </div>
                  <br/>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Landing;
