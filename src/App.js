import React, { useState } from "react";
import User from "./Components/User/User";
import UserList from "./Components/UserList/UserList";
import logo from "./logo.svg";
import styles from "./App.module.css";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (u_name, u_age) => {
    setUserList((prevList) => {
      return [...prevList, { username: u_name, age: u_age }];
    });
  };

  return (
    <div>
      <section className={styles.logo__section}>
        <img src={logo} className={styles.app__logo} alt="logo" />
      </section>
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
