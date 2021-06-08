import React from "react";
import styles from "./Button.module.css";

export default function Button(props) {
  return (
    <button type={props.type} className={styles.form__button}>
      {props.children}
    </button>
  );
}
