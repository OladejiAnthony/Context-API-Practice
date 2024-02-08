import React, { useState } from "react";
import UserList from "./UserList"
import { userData } from "./data";

function App() {
  const [users, setusers] = useState(userData);
  const onDeleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setusers(newUsers);
  };

  return (
    <div className="--flex-center ">
      <div className="--width-500px --my">
        <h2>Props Drilling</h2>
        <UserList users={users} onDeleteUser={onDeleteUser} />
      </div>
    </div>
  );
}

export default App;


//Passing the "user" and "onDeleteUser" props across several components is what is called PROP' DRILLING. 
//When our applications gets big, Prop's Drilling can really be a provlem for us. And Context API helps us solve this problem. 
//The user prop has one step(App.js and UserList.js), while the onDeleteUser prop has 3steps(User.js to UserList.js to App.js)

//Context API - helps us to pass our data directly to the component we want to use it without props drilling
