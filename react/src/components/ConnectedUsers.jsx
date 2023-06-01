import React from "react";

const ConnectedUsers = ({ users }) => {
  const mapUsers = (user, index) => {
    return <h6 key={index}>{user}</h6>;
  };

  return <div className="user-list">
    <h4>Connected Users</h4>
    {users&&users.map(mapUsers)}
    </div>;
};

export default ConnectedUsers;
