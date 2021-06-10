import React from "react";
import styles from "./InputField.module.css";

export default function InputField(props) {
  return (
    <div className={styles.input__wrap}>
      <input {...props} placeholder=" " className={styles.main__input} />
      <label className={styles.input__label}>
        {props.label}
        {props.required ? " *" : ""}
      </label>
    </div>
  );
}
