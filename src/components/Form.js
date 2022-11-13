import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "../features/posts/postSlice";
const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
    }
    setTitle("");
    setContent("");
  };
  return (
    <section
      style={{
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h4>Add Posts</h4>
      <form>
        <div>
          <p>Title</p>
          <input type="text" value={title} onChange={onChangeTitle} />
        </div>
        <div>
          <p>Content</p>
          <input
            type="text"
            size="50"
            value={content}
            onChange={onChangeContent}
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: "1rem",
          }}
          onClick={submitHandler}
        >
          Add
        </button>
      </form>
    </section>
  );
};

export default Form;
