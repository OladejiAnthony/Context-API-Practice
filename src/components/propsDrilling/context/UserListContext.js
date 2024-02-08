import React, { useContext } from "react";
import UserCon from "./UserCon";
import UserContext from "./Context";

const UserList = () => {
  // const data = useContext(UserContext);
  // console.log(data);
  //Destructure the data
  const {users} = useContext(UserContext);

  return (
    <div>
      {users.map((user) => {
        return (
          <div className="--card --p --my2 --bg-primary" key={user.id}>
            <UserCon {...user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
