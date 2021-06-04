import React, { useState } from "react";
import User from "./Components/User/User";
import UserList from "./Components/UserList/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (u_name, u_age) => {
    setUserList((prevList) => {
      return [...prevList, { username: u_name, age: u_age }];
    });
  };

  return (
    <div>
      <section>
        <User onAddUser={addUserHandler} />
      </section>
      <section>
        <UserList users={userList} />
      </section>
    </div>
  );
};

export default App;
