import React, { useContext } from "react";
import UserContext from "./Context";

const UserCon = ({ id, name}) => {
  //const data = useContext(UserContext);
  //console.log(data);

  //Destructure the data
  const {onDeleteUser} = useContext(UserContext);

  return (
    <div className="--flex-between --bg-primary">
      <h3 className="--text-light">{name}</h3>
      {/*
          <button className="--btn    --btn-danger"onClick={() => data.onDeleteUser(id)}>
            Delete
          </button>
       */}
      <button className="--btn --btn-danger"onClick={() => onDeleteUser(id)}>
        Delete
      </button>
    </div>
  );
};

export default UserCon;

