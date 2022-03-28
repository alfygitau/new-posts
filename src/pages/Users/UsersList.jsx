import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get("https://dummyjson.com/users");
      console.log(response.data);
      setUsers(response.data.users);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>A list of users</h3>
      <div className="users">
        {users.slice(0, 30).map((user) => (
          <div key={user.id} className="list">
            <img src={user.image} alt="" />
            <Link to={`/users/${user.id}`}>
              <h3>
                {user.firstName}&nbsp;{user.lastName}
              </h3>
            </Link>
            <span>{user.email}</span>
            <p>{user.address.address}</p>
            <p>{user.address.city}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default UsersList;
