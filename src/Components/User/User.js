import React, { useState } from "react";
import Card from "../UI/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Grid from "@material-ui/core/Grid";

const User = (props) => {
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
    if(username && age && firstname && lastname && maths && science) {
      props.onAddUser(firstname, lastname, maths, science, username, age);
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
            <TextField
              fullWidth
              onChange={onFirstNameChange}
              value={firstname}
              label="First Name"
              variant="outlined"
              type="text"
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              onChange={onLastNameChange}
              value={lastname}
              label="Last Name"
              variant="outlined"
              type="text"
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              onChange={onUsernameChange}
              type="text"
              value={username}
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Age"
              variant="outlined"
              onChange={onAgeChange}
              type="number"
              inputProps={{ min: 1, max: 120 }}
              value={age}
              placeholder="Age"
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              onChange={onMathsChange}
              value={maths}
              label="Maths"
              variant="outlined"
              inputProps={{ min: 0, max: 100 }}
              type="number"
              required
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              onChange={onScienceChange}
              value={science}
              label="Science"
              variant="outlined"
              inputProps={{ min: 0, max: 100 }}
              type="number"
              required
              size="small"
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
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default User;
