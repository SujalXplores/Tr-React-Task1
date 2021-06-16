import React from "react";
import useInput from "../Hooks/use-input";
import axios from "axios";
import Card from "../UI/Card";
import Button from "../UI/Button";
import InputField from "../UI/InputField";
import styles from "./AddUser.module.css";

const isNotEmpty = (value) => value.trim() !== "";

const AddUser = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: userNameValue,
    isValid: userNameIsValid,
    hasError: userNameHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserName,
  } = useInput(isNotEmpty);

  const {
    value: ageValue,
    isValid: ageIsValid,
    hasError: ageHasError,
    valueChangeHandler: ageChangeHandler,
    inputBlurHandler: ageBlurHandler,
    reset: resetAge,
  } = useInput(isNotEmpty);

  const {
    value: mathsValue,
    isValid: mathsIsValid,
    hasError: mathsHasError,
    valueChangeHandler: mathsChangeHandler,
    inputBlurHandler: mathsBlurHandler,
    reset: resetMaths,
  } = useInput(isNotEmpty);

  const {
    value: scienceValue,
    isValid: scienceIsValid,
    hasError: scienceHasError,
    valueChangeHandler: scienceChangeHandler,
    inputBlurHandler: scienceBlurHandler,
    reset: resetScience,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    userNameIsValid &&
    ageIsValid &&
    mathsIsValid &&
    scienceIsValid
  ) {
    formIsValid = true;
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onAddUser(
      firstNameValue,
      lastNameValue,
      userNameValue,
      ageValue,
      mathsValue,
      scienceValue
    );

    const user = {
      firstname: firstNameValue,
      lastname: lastNameValue,
      username: userNameValue,
      age: ageValue,
      maths: mathsValue,
      science: scienceValue,
    };

    try {
      axios.post(
        "https://react-demo-200ca-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        user
      );
      resetFirstName();
      resetLastName();
      resetUserName();
      resetAge();
      resetMaths();
      resetScience();
    } catch (e) {
      console.log(e);
    }
  };

  const firstNameClasses = firstNameHasError
    ? "input__container invalid"
    : "input__container";
  const lastNameClasses = lastNameHasError
    ? "input__container invalid"
    : "input__container";
  const userNameClasses = userNameHasError
    ? "input__container invalid"
    : "input__container";
  const ageClasses = ageHasError
    ? "input__container invalid"
    : "input__container";
  const mathsClasses = mathsHasError
    ? "input__container invalid"
    : "input__container";
  const scienceClasses = scienceHasError
    ? "input__container invalid"
    : "input__container";

  return (
    <Card>
      <form onSubmit={onSubmitHandler} autoComplete="off">
        <div className={styles.main__container}>
          <div className={firstNameClasses}>
            <InputField
              onChange={firstNameChangeHandler}
              value={firstNameValue}
              onBlur={firstNameBlurHandler}
              label="First Name"
              type="text"
              required
            />
            {firstNameHasError && (
              <p className="error-text">Please enter a first name.</p>
            )}
          </div>
          <div className={lastNameClasses}>
            <InputField
              onChange={lastNameChangeHandler}
              value={lastNameValue}
              onBlur={lastNameBlurHandler}
              label="Last Name"
              type="text"
              required
            />
            {lastNameHasError && (
              <p className="error-text">Please enter a last name.</p>
            )}
          </div>
          <div className={userNameClasses}>
            <InputField
              label="Username"
              onChange={userNameChangeHandler}
              value={userNameValue}
              onBlur={userNameBlurHandler}
              type="text"
              required
            />
            {userNameHasError && (
              <p className="error-text">Please enter a username.</p>
            )}
          </div>
          <div className={ageClasses}>
            <InputField
              label="Age"
              onChange={ageChangeHandler}
              value={ageValue}
              onBlur={ageBlurHandler}
              type="number"
              min="1"
              max="120"
              required
            />
            {ageHasError && <p className="error-text">Please enter a age.</p>}
          </div>
          <div className={mathsClasses}>
            <InputField
              onChange={mathsChangeHandler}
              value={mathsValue}
              onBlur={mathsBlurHandler}
              label="Maths"
              min="0"
              max="100"
              type="number"
              required
            />
            {mathsHasError && (
              <p className="error-text">Please enter maths marks.</p>
            )}
          </div>
          <div className={scienceClasses}>
            <InputField
              onChange={scienceChangeHandler}
              value={scienceValue}
              onBlur={scienceBlurHandler}
              label="Science"
              min="0"
              max="100"
              type="number"
              required
            />
            {scienceHasError && (
              <p className="error-text">Please enter science marks.</p>
            )}
          </div>
        </div>
        <Button type="submit" disabled={!formIsValid}>
          + Add
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
