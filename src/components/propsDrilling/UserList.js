import React from "react";
import User from "./User";

const UserList = ({users, onDeleteUser}) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div className="--card --p --my2 --bg-primary" key={user.id}>
            <User {...user} onDeleteUser={onDeleteUser} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
