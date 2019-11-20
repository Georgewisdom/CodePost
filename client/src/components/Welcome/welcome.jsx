import React, { Component } from "react";
import "./welcome.css";
import { Container, Row, Col, Button } from "reactstrap";

export class welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/posts/3")
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => console.error(error));
  }
  render() {
    return (
      <section>
        <section className="imga">
          <div style={{ background: "rgba(0,0,0,0.7)" }}>
            <Container>
              {" "}
              <Row>
                <Col xs="">
                  <div
                    style={{
                      height: "400px",
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}
                  >
                    <h1>Welcome To CodePost</h1>
                    <h3>
                      Write to Inspire & Teach other while you are learning
                    </h3>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="section-inspire">
          <div>
            <Container>
              <Row>
                <Col xs="12" sm="4" style={{ marginTop: "25px" }}>
                  <div>
                    <div className="center">
                      <i className="fas fa-edit fa-5x"></i>
                    </div>

                    <h3 className="center">Write your own Posts </h3>
                    <p className="center">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod et explicabo ipsum autem quia ullam ipsa hic animi
                      itaque.
                    </p>
                  </div>
                </Col>
                <Col xs="12" sm="4" style={{ marginTop: "25px" }}>
                  <div>
                    <div className="center">
                      <i className="fas fa-book-reader fa-5x"></i>
                    </div>
                    <h3 className="center">Learn From Other Posts </h3>
                    <p className="center">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod et explicabo ipsum autem quia ullam ipsa hic animi
                      itaque.
                    </p>
                  </div>
                </Col>
                <Col xs="12" sm="4" style={{ marginTop: "25px" }}>
                  {" "}
                  <div>
                    <div className="center">
                      <i className="far fa-lightbulb fa-5x"></i>
                    </div>
                    <h3 className="center">Inspire The World </h3>
                    <p className="center">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod et explicabo ipsum autem quia ullam ipsa hic animi
                      itaque.
                    </p>
                  </div>
                </Col>{" "}
              </Row>
            </Container>
          </div>
        </section>
        <section className="section-posts">
          <div>
            <Container>
              <Row>
                <Col xs="12" sm="4" style={{ marginTop: "25px" }}>
                  <div>
                    <h3 className="">Discover Technology in Sea & Ocean </h3>
                    <h5>
                      <i>author</i> Joshua Slim
                    </h5>
                    <p className="">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod et explicabo ipsum autem quia ullam ipsa hic animi
                      itaque.
                    </p>
                    <Button href="#" color="dark" size="md" active>
                      Continue Readings
                    </Button>{" "}
                  </div>
                </Col>
                <Col xs="12" sm="4" style={{ marginTop: "25px" }}>
                  <div>
                    <h3 className="">Machine Learning For The Future</h3>
                    <h5>
                      <i>author</i> Brad Traversy
                    </h5>
                    <p className="">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod et explicabo ipsum autem quia ullam ipsa hic animi
                      itaque.
                    </p>
                    <Button href="#" color="dark" size="md" active>
                      Continue Readings
                    </Button>{" "}
                  </div>
                </Col>
                <Col xs="12" sm="4" style={{ marginTop: "25px" }}>
                  {" "}
                  <div>
                    <h3 className="">Guide Infrastructure As A Service</h3>
                    <h5>
                      <i>author</i> George Wisdom
                    </h5>
                    <p className="">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quod et explicabo ipsum autem quia ullam ipsa hic animi
                      itaque.
                    </p>
                    <Button href="#" color="dark" size="md" active>
                      Continue Readings
                    </Button>{" "}
                  </div>
                </Col>{" "}
              </Row>
            </Container>
          </div>
        </section>
      </section>
    );
  }
}

export default welcome;
