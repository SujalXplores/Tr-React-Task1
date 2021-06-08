import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [maths, setMaths] = useState("");
  const [science, setScience] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const onMathsChange = (event) => {
    setMaths(event.target.value);
  };

  const onScienceChange = (event) => {
    setScience(event.target.value);
  };

  const onFirstNameChange = (event) => {
    setFirstname(event.target.value);
  };

  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (username && age && firstname && lastname && maths && science) {
      props.onAddUser(firstname, lastname, username, age, maths, science);
    }
    setUsername("");
    setAge("");
    setMaths("");
    setScience("");
    setFirstname("");
    setLastName("");
  };

  return (
    <Card>
      <form onSubmit={onSubmitHandler} autoComplete="off">
        <div className={styles.main__container}>
          <div className={styles.input__container}>
            <InputField
              onChange={onFirstNameChange}
              value={firstname}
              label="First Name"
              type="text"
              required
            />
          </div>
          <div className={styles.input__container}>
            <InputField
              onChange={onLastNameChange}
              value={lastname}
              label="Last Name"
              type="text"
              required
            />
          </div>
          <div className={styles.input__container}>
            <InputField
              label="Username"
              onChange={onUsernameChange}
              value={username}
              type="text"
              required
            />
          </div>
          <div className={styles.input__container}>
            <InputField
              label="Age"
              onChange={onAgeChange}
              value={age}
              type="number"
              min="1"
              max="120"
              required
            />
          </div>
          <div className={styles.input__container}>
            <InputField
              onChange={onMathsChange}
              value={maths}
              label="Maths"
              min="0"
              max="100"
              type="number"
              required
            />
          </div>
          <div className={styles.input__container}>
            <InputField
              onChange={onScienceChange}
              value={science}
              label="Science"
              min="0"
              max="100"
              type="number"
              required
            />
          </div>
        </div>
        <Button type="submit">Add</Button>
      </form>
    </Card>
  );
};

export default AddUser;
