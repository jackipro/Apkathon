import React, { Component } from "react";
import PostList from "./PostList";
import axios from "axios";
export default class PostListControll extends Component {
  state = {
    posts: []
  };
  async componentDidMount() {
    const res = await axios.get("http://localhost:2019/post");
    this.setState({ posts: res.data });
  }
  render() {
    return (
      <div>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}
