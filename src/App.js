import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./Login/Login";
import Home from "./pages/Home/Home";
import PostComment from "./pages/PostComment/PostComment";
import Posts from "./pages/Posts/Posts";
import UserPosts from "./pages/UserPosts/UserPosts";
import UsersList from "./pages/Users/UsersList";
import PrivateRoute from "./PrivateRouter";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="posts" element={<PrivateRoute component={Posts} />} />
        <Route path="users" element={<PrivateRoute component={UsersList} />} />
        <Route path="users/:userId" element={<UserPosts />} />
        <Route path="/" element={<Home />} />
        <Route path="posts/:postId" element={<PostComment />} />
        <Route path="login" element={<Login />} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
