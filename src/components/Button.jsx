import React, { useState } from "react";
import Screen from "./Screen";

const Button = () => {
  const [equation, setEquation] = useState("");
  const btn = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "=",
    "/",
  ];

  const handleOnCLick = (item) => {
    if (item === "=") {
      try {
        // Using eval to calculate the result
        const result = eval(equation);
        setEquation(result.toString());
      } catch (error) {
        setEquation("Error");
      }
    } else {
      // Prevent consecutive operators
      const lastChar = equation.slice(-1);
      if (
        ["+", "-", "*", "/"].includes(item) &&
        ["+", "-", "*", "/"].includes(lastChar)
      ) {
        return;
      }
      setEquation((prev) => prev + item);
    }
  };
  return (
    <>
      <Screen value={equation} />
      <div className="grid grid-cols-4 gap-4 my-5 mx-5 justify-center items-center">
        {btn.map((item, index) => (
          <button
            onClick={() => {
              handleOnCLick(item);
            }}
            className="border text-lg rounded-lg p-3"
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          setEquation("");
        }}
        className=" mx-4 mb-4 rounded-lg bg-fuchsia-600 text-white font-semibold px-2 py-2"
      >
        Clear
      </button>
    </>
  );
};

export default Button;
