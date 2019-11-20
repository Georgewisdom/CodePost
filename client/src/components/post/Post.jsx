import React, { Component } from "react";
import PostItem from "./PostItem";
import "../posts/posts.css";
import { withRouter } from "react-router-dom";
class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ post: data });
        console.log(data);
      })
      .catch(error => console.log(error));
  }

  render() {
    const { post } = this.state;
    return (
      <div className="postCont">
        <PostItem key={post._id} post={post} />
      </div>
    );
  }
}
export default withRouter(Post);
