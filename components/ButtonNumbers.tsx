import React, { useEffect, useState } from "react";
import style from "../styles/Card.module.css";

type ButtonNumbersProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export const ButtonNumbers = (props: ButtonNumbersProps) => {
  return <button> {props.children}</button>;
};
