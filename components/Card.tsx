import React, { useEffect, useState } from "react";
import style from "../styles/Card.module.css";
import { ButtonCard } from "./ButtonCard";
import { ButtonNumbers } from "./ButtonNumbers";

type CalcOperators = "AC" | "&" | "%" | "/" | "+" | "-" | "x" | "=";

export const Card = () => {
  const [isDisabled] = useState(true);

  const [inputValue, setInputValue] = useState("");

  const [firstValue, setFirstValue] = useState("");

  const [secoundValue, setSecoundValue] = useState("");

  const [threeValue, setThreeValue] = useState("");

  const handleAddValue = (newCalculatorChar: string) => {
    if (isNaN(Number(newCalculatorChar))) {
      switch (newCalculatorChar as CalcOperators) {
        case "AC":
          setInputValue("");
          setFirstValue("");
          setSecoundValue("");
          setThreeValue("");
          break;
        case "&":
          console.log("Teste &");
          break;
        case "%":
          setInputValue(
            (Number(inputValue) / 100).toString() + newCalculatorChar
          );
          setFirstValue(inputValue);
          break;
        case "+":
          const contains2 = inputValue.includes("+");
          if (contains2 == true) {
            return;
          } else {
            setInputValue(inputValue + newCalculatorChar);
            setThreeValue("+");
          }
          break;
        case "-":
          const subtracao = inputValue.substring(inputValue.length - 1);
          if (subtracao.toString() == "-") {
            return;
          } else {
            setInputValue(inputValue + newCalculatorChar);
            setThreeValue("-");
          }
          break;
        case "x":
          const multiplicacao = inputValue.substring(inputValue.length - 1);
          if (multiplicacao.toString() == "x") {
            return;
          } else {
            setInputValue(inputValue + newCalculatorChar);
            setThreeValue("x");
          }
          break;
        case "/":
          const divisao = inputValue.substring(inputValue.length - 1);
          if (divisao.toString() == "/") {
            return;
          } else {
            setInputValue(inputValue + newCalculatorChar);
            setThreeValue("/");
          }
          break;
        case "=":
          console.log(inputValue, "inputValue");
          console.log(firstValue, "primeiro");
          console.log(secoundValue, "segundo");
          console.log(threeValue, "segundo");
          if (threeValue == "+") {
            setInputValue(
              (Number(firstValue) + Number(secoundValue)).toString()
            );
            setFirstValue(
              (Number(firstValue) + Number(secoundValue)).toString()
            );
            setSecoundValue("");
          } else if (threeValue == "-") {
            setInputValue(
              (Number(firstValue) - Number(secoundValue)).toString()
            );
            setFirstValue(
              (Number(firstValue) - Number(secoundValue)).toString()
            );
            setSecoundValue("");
          } else if (threeValue == "x") {
            setInputValue(
              (Number(firstValue) * Number(secoundValue)).toString()
            );
            setFirstValue(
              (Number(firstValue) * Number(secoundValue)).toString()
            );
            setSecoundValue("");
          } else if (threeValue == "/") {
            setInputValue(
              (Number(firstValue) / Number(secoundValue)).toString()
            );
            setFirstValue(
              (Number(firstValue) / Number(secoundValue)).toString()
            );
            setSecoundValue("");
          }
          break;
        default:
          break;
      }

      return;
    }
    const contains = inputValue.includes("+");
    const subtracao = inputValue.includes("-");
    const multiplicacao = inputValue.includes("x");
    const divisao = inputValue.includes("/");
    if (contains == false && subtracao == false && multiplicacao == false && divisao == false) {
      setInputValue((prevValue) => prevValue + newCalculatorChar);
      setFirstValue((prevValue) => prevValue + newCalculatorChar);
    } else {
      setInputValue((prevValue) => prevValue + newCalculatorChar);
      if (secoundValue == null || secoundValue == "") {
        setSecoundValue(newCalculatorChar);
      } else {
        setSecoundValue((prevValue) => prevValue + newCalculatorChar);
      }
      // setSecoundValue((prevValue) => prevValue + newCalculatorChar);
      console.log(secoundValue);
      // const parts = secoundValue.split("+");
      // setSecoundValue(parts[1]);
    }
  };

  const numbers = [
    "AC",
    "&",
    "%",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ",",
  ];
  const rightOperators = ["/", "x", "-", "+", "="];

  return (
    <div className={style.card}>
      <div>Calculadora</div>
      <div>
        <div>{inputValue}</div>
        <div className={style["calculator-container"]}>
          <div className={style["regular-numbers-container"]}>
            {numbers.map((calcNumber) => (
              <button
                key={calcNumber}
                onClick={() => handleAddValue(calcNumber)}
              >
                {calcNumber}
              </button>
            ))}
          </div>
          <div className={style["right-operators"]}>
            {rightOperators.map((operator) => (
              <button key={operator} onClick={() => handleAddValue(operator)}>
                {operator}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
