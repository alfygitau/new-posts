import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/526/526172.png"
          alt="logo"
        />
        <span>E-posts</span>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/about">About Us</Link>
        <Link to="/users">Users</Link>
      </div>
    </div>
  );
};

export default Navbar;
