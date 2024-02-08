import React from "react";
const User = ({ id, name, onDeleteUser }) => {
  return (
    <div className="--flex-between --bg-primary">
      <h3 className="--text-light">{name}</h3>
      <button className="--btn --btn-danger"onClick={() => onDeleteUser(id)} >
        Delete
      </button>
    </div>
  );
};

export default User;


