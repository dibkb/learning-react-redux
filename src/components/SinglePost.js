import React from "react";
export const SinglePost = ({ post }) => {
  return (
    <article
      style={{
        border: "1px solid #eeeeee",
        borderRadius: "3px",
        marginBottom: "1rem",
        padding: "1rem",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </article>
  );
};
