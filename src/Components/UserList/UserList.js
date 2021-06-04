import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card>
      <h2>Records:</h2>
      <ul className={styles.ul}>
        {props.users.length === 0 ? (
          <li className={styles.empty__record}>No records found !</li>
        ) : (
          props.users.map((user) => (
            <li key={Math.random().toString()} className={styles.li}>
              {user.username}, Age: {user.age}
            </li>
          ))
        )}
      </ul>
    </Card>
  );
};

export default UserList;
