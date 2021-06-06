import React from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  console.log(props);
  if (props.users.length > 0) {
    return (
      <Card>
        <h2>Records:</h2>
        <ul className={styles.ul}>
          {props.users.map((user) => (
            <li
              key={user.id}
              className={styles.li}
              onClick={() => props.onDelete(user.id)}
            >
              {user.username}, Age: {user.age},{user.firstname}, {user.lastname}
              ,{user.maths},{user.science}
            </li>
          ))}
        </ul>
      </Card>
    );
  }
  return null;
};

export default UserList;
