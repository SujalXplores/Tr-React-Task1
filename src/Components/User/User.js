import React, { useState } from "react";
import styles from "./User.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const User = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddUser(username,age);
    setUsername("");
    setAge("");
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username" className={styles.label}>
          Username
        </label>
        <input
          id="username"
          onChange={onUsernameChange}
          className={styles.form__control}
          type="text"
          value={username}
          placeholder="Username"
          autoComplete="off"
          required
        />
        <label htmlFor="age" className={styles.label}>
          Age
        </label>
        <input
          id="age"
          onChange={onAgeChange}
          className={styles.form__control}
          type="number"
          min="1"
          max="200"
          value={age}
          placeholder="Age"
          required
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default User;
