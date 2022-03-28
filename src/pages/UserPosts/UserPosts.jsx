import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UserPosts.css";

const UserPosts = () => {
  const [userPosts, setUserPosts] = useState();
  const param = useParams();
  const { userId } = param;
  console.log(param);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = await axios.get(
        `https://dummyjson.com/users/${userId}/posts`
      );
      console.log("userPosts", response.data);
      setUserPosts(response.data.posts);
    };
    fetchUserPosts();
  }, [userId]);

  return (
    <div className="user-posts">
      <h4>User Posts</h4>
      {userPosts?.map((post) => (
        <div key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default UserPosts;
