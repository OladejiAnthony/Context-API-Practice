import React, { useState } from "react";
import UserListContext from "./components/propsDrilling/context/UserListContext"
import { userData } from "./components/propsDrilling/data";
import UserContext from "./components/propsDrilling/context/Context"

function App() {
  const [users, setusers] = useState(userData);
  const onDeleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setusers(newUsers);
  };

  return (
    <UserContext.Provider value={{users, onDeleteUser}}
    >
      <div className="--flex-center ">
        <div className="--width-500px --my">
          <h2>Context API</h2>
          <UserListContext />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;


//Passing the "user" and "onDeleteUser" props across several components is what is called PROP' DRILLING. 
//When our applications gets big, Prop's Drilling can really be a provlem for us. And Context API helps us solve this problem. 
//The user prop has one step(App.js and UserList.js), while the onDeleteUser prop has 3steps(User.js to UserList.js to App.js)

//Context API - helps us to pass our data directly to the component we want to use it without props drilling
