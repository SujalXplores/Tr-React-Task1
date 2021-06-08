import React from "react";
import styles from "./InputField.module.css";

export default function InputField(props) {
  return (
    <div className={styles.input__wrap}>
      <input
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required={props.required}
        type={props.type}
        min={props.min}
        max={props.max}
        disabled={props.disabled}
        className={styles.main__input}
      />
      <label className={styles.input__label}>
        {props.label}
        {props.required ? " *" : ""}
      </label>
    </div>
  );
}
