import React, { useState, useEffect } from "react";
import Card from "../UI/Card";
import InputField from "../UI/InputField";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const { users } = props;
  const [userList, setUserList] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setUserList(users);
  }, [users]);

  const handleDeleteItem = (id) => {
    const newList = userList.filter((item) => item.id !== id);
    setUserList(newList);
    props.onUpdateList(newList);
  };

  const compare = (a, b) => {
    if (a.lastname < b.lastname) {
      return -1;
    }
    if (a.lastname > b.lastname) {
      return 1;
    }
    return 0;
  };

  const onSortHandler = () => {
    console.log(userList);
    const newList = userList.sort(compare);
    setUserList(newList);
    console.log(newList);
    props.onUpdateList(userList);
  };

  const filterHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  if (userList.length > 0) {
    return (
      <Card>
        <div className={styles.input__wrapper}>
          <InputField
            onChange={filterHandler}
            label="Search"
            type="text"
            required
          />
        </div>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th} scope="col" onClick={onSortHandler}>
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
            {userList
              .filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.firstname
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.lastname
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.username
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  val.science
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                  val.maths.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((user) => (
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
