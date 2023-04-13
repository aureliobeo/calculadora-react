import React from "react";

type ButtonCardProps = {
  onClick?: () => void;
  children?: React.ReactNode;
};

export const ButtonCard = (props: ButtonCardProps) => {
  return <button onClick={props.onClick}> {props.children}</button>;
};
