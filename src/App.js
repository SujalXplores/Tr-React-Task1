import React, { useState } from "react";
import User from "./Components/User/User";
import UserList from "./Components/UserList/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (f_name, l_name, u_name, u_age, maths, science) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        {
          id: Math.random().toString(),
          firstname: f_name,
          lastname: l_name,
          username: u_name,
          age: u_age,
          maths: maths,
          science: science,
        },
      ];
    });
  };

  const setNewList = (newList) => {
    setUserList(newList);
    return <UserList users={userList} onDeleteList={setNewList} />;
  };

  return (
    <div>
      <section>
        <User onAddUser={addUserHandler} />
      </section>
      <section>
        <UserList users={userList} onDeleteList={setNewList} />
      </section>
    </div>
  );
};

export default App;
