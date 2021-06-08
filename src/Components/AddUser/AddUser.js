import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Grid from "@material-ui/core/Grid";
import InputField from "../UI/InputField";

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
      <form
        onSubmit={onSubmitHandler}
        autoComplete="off"
        style={{ flexGrow: 1 }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              onChange={onFirstNameChange}
              value={firstname}
              label="First Name"
              type="text"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              onChange={onLastNameChange}
              value={lastname}
              label="Last Name"
              type="text"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Username"
              onChange={onUsernameChange}
              value={username}
              type="text"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Age"
              onChange={onAgeChange}
              value={age}
              type="number"
              min="1"
              max="120"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              onChange={onMathsChange}
              value={maths}
              label="Maths"
              min="0"
              max="100"
              type="number"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              onChange={onScienceChange}
              value={science}
              label="Science"
              min="0"
              max="100"
              type="number"
              required
            />
          </Grid>
        </Grid>
        <Button
          style={{ marginTop: "1rem" }}
          type="submit"
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
        >
          Add
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
