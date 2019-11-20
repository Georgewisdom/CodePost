import React, { Component, Fragment } from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
class postItem extends Component {
  truncate(str) {
    return str.length > 10 ? str.substring(0, 70) + "..." : str;
  }
  render() {
    const { title, body, createdAt, _id } = this.props.post;

    return (
      <Fragment>
        <Row>
          <Col xs="12">
            <div>
              <h3>{title}</h3>
              <br />
              <p>{this.truncate(body)}</p>
            </div>
            <div>
              <Button href="/full" color="dark" size="sm" active>
                Continue Readings
              </Button>{" "}
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default postItem;
