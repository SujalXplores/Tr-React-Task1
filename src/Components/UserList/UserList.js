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
          <caption className={styles.caption}>Records</caption>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th} scope="col">
                First Name
              </th>
              <th className={styles.th} scope="col">
                Last Name
              </th>
              <th className={styles.th} scope="col">
                Username
              </th>
              <th className={styles.th} scope="col">
                Age
              </th>
              <th className={styles.th} scope="col">
                Maths
              </th>
              <th className={styles.th} scope="col">
                Science
              </th>
              <th className={styles.th} scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id} className={styles.tr}>
                <td className={styles.td} data-label="firstname">
                  {user.firstname}
                </td>
                <td className={styles.td} data-label="lastname">
                  {user.lastname}
                </td>
                <td className={styles.td} data-label="username">
                  {user.username}
                </td>
                <td className={styles.td} data-label="age">
                  {user.age}
                </td>
                <td className={styles.td} data-label="maths">
                  {user.maths}
                </td>
                <td className={styles.td} data-label="science">
                  {user.science}
                </td>
                <td className={styles.td} data-label="">
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
