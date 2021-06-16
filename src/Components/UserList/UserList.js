import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Card from "../UI/Card";
import InputField from "../UI/InputField";
import DeleteIcon from "../UI/DeleteIcon";
import styles from "./UserList.module.css";

const UserList = (props) => {
  const { users } = props;
  const [userList, setUserList] = useState(users);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setUserList(users);
  }, [users]);

  const handleDeleteItem = useCallback(
    (id) => {
      const url = `https://react-demo-200ca-default-rtdb.asia-southeast1.firebasedatabase.app/users/${id}.json`;
      const deleteItem = async () => {
        try {
          await axios.delete(url);
          await props.getUsers();
        } catch (e) {
          console.log(e);
        }
      };
      deleteItem();
    },
    [props]
  );

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
    const newList = userList.sort(compare);
    setUserList(newList);
    props.onUpdateList(userList);
  };

  const onFilterInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterHelper = (val) => {
    if (searchTerm === "") {
      return val;
    } else if (
      val.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.science.toLowerCase().includes(searchTerm.toLowerCase()) ||
      val.maths.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return val;
    }
  };

  if (userList.length > 0) {
    return (
      <Card>
        <div className={styles.input__wrapper}>
          <InputField
            onChange={onFilterInput}
            label="Search"
            type="search"
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
                return filterHelper(val);
              })
              .map((user) => (
                <tr
                  key={
                    Math.random().toString(36).substring(2, 15) +
                    Math.random().toString(36).substring(2, 15)
                  }
                  className={styles.tr}
                >
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
                      onClick={() => handleDeleteItem(user.id)}
                      className={styles.button}
                    >
                      <DeleteIcon size="24px" color="red" />
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
