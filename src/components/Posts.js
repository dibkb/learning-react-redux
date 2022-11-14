import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "../features/posts/postSlice";
import { SinglePost } from "./SinglePost";
const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);
  let content;
  if (status === "succeeded") {
    content = posts.map((ele, id) => {
      return <SinglePost key={id} post={ele} />;
    });
  } else if (status === "loading") {
    content = <p>Loading .......</p>;
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }
  return <div>{content}</div>;
};

export default Posts;
