import React from "react";
import PostItem from "./PostItem";
const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
      <h1 className="title is-3" style={{ textAlign: "center" }}>
        Các bài đăng mới nhất
      </h1>
    </div>
  );
};
export default PostList;
