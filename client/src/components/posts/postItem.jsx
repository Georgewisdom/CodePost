import React, { Component, Fragment } from "react";
import { Button, Container } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import Moment from "react-moment";
import Full from "./fullPost";
class postItem extends Component {
  truncate(str) {
    return str.length > 10 ? str.substring(0, 90) + "..." : str;
  }

  render() {
    const { title, body, createdAt, _id } = this.props.post;
    const sendPost = () => {
      return <Full />;
    };
    return (
      <Fragment>
        <Container
          style={{
            padding: "20px"
          }}
        >
          <div>
            <h2>{title}</h2>
            <h3>
              {" "}
              Posted{" "}
              <Moment fromNow ago>
                {createdAt}
              </Moment>
            </h3>

            <p> {this.truncate(body)}</p>
          </div>
          <div>
            <Button
              color="dark"
              size="md"
              onClick={() => sendPost()}
              post={_id}
              active
            >
              <Link to={`/post/${_id}`}>Continue Readings</Link>
            </Button>{" "}
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default postItem;
