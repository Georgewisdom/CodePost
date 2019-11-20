import React, { Component } from "react";
import PostItem from "./postItem";
import "./posts.css";
export default class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/posts")
      .then(res => res.json())
      .then(data => {
        this.setState({ posts: data });
        console.log(data);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div
        className="postCont"
        
      >

        {this.state.posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    );
  }
}
