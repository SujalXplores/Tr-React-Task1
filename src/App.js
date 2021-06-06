import React, { useState } from "react";
import User from "./Components/User/User";
import UserList from "./Components/UserList/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (u_name, u_age, maths, science, f_name, l_name) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        {
          id: Math.random().toString(),
          username: u_name,
          age: u_age,
          firstname: f_name,
          lastname: l_name,
          maths: maths,
          science: science,
        },
      ];
    });
  };

  const onDeleteListItem = (id) => {
    const newList = userList.filter((item) => item.id !== id);
    setUserList(newList);
    return <UserList users={userList} onDelete={onDeleteListItem} />;
  };

  return (
    <div>
      <section>
        <User onAddUser={addUserHandler} />
      </section>
      <section>
        <UserList users={userList} onDelete={onDeleteListItem} />
      </section>
    </div>
  );
};

export default App;
