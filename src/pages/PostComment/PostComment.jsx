import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostComment.css";

const PostComment = () => {
  const [postComments, setPostComments] = useState([]);
  const param = useParams();

  const { postId } = param;

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      setPostComments(response.data);
    };
    fetchComments();
  }, [postId]);

  console.log(postComments);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Post comments</h2>
      {postComments.map((comments) => (
        <div className="comments" key={comments.id}>
          <h5>
            <span>{comments.name}. &nbsp;</span>
            {comments.title}
          </h5>
          <p>{comments.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostComment;
