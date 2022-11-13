import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/posts/postSlice";
const Posts = () => {
  const Posts = useSelector(selectAllPosts);
  const postsData = Posts.map((ele, id) => {
    return (
      <article
        style={{
          border: "1px solid #eeeeee",
          borderRadius: "3px",
          marginBottom: "1rem",
          padding: "1rem",
        }}
        key={String(id)}
      >
        <h3>{ele.title}</h3>
        <p>{ele.content}</p>
      </article>
    );
  });
  return <div>{postsData}</div>;
};

export default Posts;
