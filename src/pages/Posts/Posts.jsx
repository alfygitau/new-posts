import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://dummyjson.com/posts"
      );
      console.log(response.data);
      setPosts(response.data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Posts</h4>
      {posts.slice(0, 50).map((post) => (
        <div key={post.id} className="posts">
          <span>{post.id}. &nbsp;</span>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
