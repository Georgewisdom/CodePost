import React, { Component, Fragment } from "react";

export default class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    const id = this.props.post;
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => console.log(error));
    console.log(id);
  }

  render() {
    return (
      <Fragment>
        <div>
          <h1>Full Posts</h1>
          <div>
            {this.state.posts.map(post => (
              <p>{post.title}</p>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
