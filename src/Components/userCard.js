import React from "react";
import "./us.css";

const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">{<i class="fas fa-spinner fa-3x"></i>}</div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="project column3">
          {console.log(user)}
          <div className="profile">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">{user.email}</p>
            <p>User ID: {user.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
