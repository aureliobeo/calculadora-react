import React from "react";
import styles from "../styles/Button.module.css"

type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};
export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={styles.button}
    >
      {props.children}
    </button>
  );
};
