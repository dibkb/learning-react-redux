import React from "react";
import Form from "./components/Form";
import Posts from "./components/Posts";
import "./index.css";
const App = () => {
  return (
    <div className="container">
      <h1>POSTS</h1>
      <Form />
      <Posts />
    </div>
  );
};

export default App;
