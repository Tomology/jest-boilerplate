import React, { useState } from "react";
import { connect } from "react-redux";
import { saveComment } from "../actions";

const CommentBox = ({ saveComment }) => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveComment(comment);
    setComment("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea onChange={handleChange} value={comment} />
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
  );
};

export default connect(null, { saveComment })(CommentBox);
