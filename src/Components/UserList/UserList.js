import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const { users } = props;
  const [userList, setUserList] = useState(users);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  const handleDeleteItem = (id) => {
    const newList = userList.filter((item) => item.id !== id);
    setUserList(newList);
    props.onDeleteList(newList);
  };

  if (userList.length > 0) {
    return (
      <Card>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>First Name</th>
              <th className={styles.th}>Last Name</th>
              <th className={styles.th}>Username</th>
              <th className={styles.th}>Age</th>
              <th className={styles.th}>Maths</th>
              <th className={styles.th}>Science</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td className={styles.td}>{user.firstname}</td>
                <td className={styles.td}>{user.lastname}</td>
                <td className={styles.td}>{user.username}</td>
                <td className={styles.td}>{user.age}</td>
                <td className={styles.td}>{user.maths}</td>
                <td className={styles.td}>{user.science}</td>
                <td className={styles.td}>
                  <button
                    className={styles.delete__btn}
                    onClick={() => handleDeleteItem(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    );
  }
  return null;
};

export default UserList;
