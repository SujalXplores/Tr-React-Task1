import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  if (props.users.length > 0) {
    return (
      <Card>
        <h2>Records:</h2>
        <ul className={styles.ul}>
          {props.users.map((user) => (
            <li key={Math.random().toString()} className={styles.li}>
              {user.username}, Age: {user.age}
            </li>
          ))}
        </ul>
      </Card>
    );
  }
  return null;
};

export default UserList;
