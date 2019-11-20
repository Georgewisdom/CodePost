import React, { Component, Fragment } from "react";
import { Button, Container } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import Moment from "react-moment";

class postItem extends Component {
  render() {
    const { title, body, createdAt, _id } = this.props.post;

    return (
      <Fragment>
        <Container
          style={{
            padding: "20px"
          }}
        >
          <div>
            <h2>{title}</h2>
            {/* <h3>
              {" "}
              Posted{" "}
              <Moment fromNow ago>
                {createdAt}
              </Moment>
            </h3> */}
            <hr />
            <p style={{ fontSize: "30px", fontFamily: "Georgia" }}> {body}</p>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default postItem;
