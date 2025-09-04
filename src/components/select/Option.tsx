"use client";

import { useSelect } from "@/hooks/useSelect";
import classNames from "classnames";
import CheckImage from "./CheckImage";

const Option = ({ option, index }: { option: string; index: number }) => {
  const { selectedOption, selectOption } = useSelect();

  return (
    <div
      key={option}
      className={classNames("card bg-overlay", {
        selected: selectedOption === option
      })}
      onClick={() => selectOption(option)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          selectOption(option);
        }
      }}
      aria-label={`${
        selectedOption === option ? "Deselect" : "Select"
      } ${option}`}
      style={{
        transform: `rotate(-${index + 1}deg) translateX(${index * 2}px)`,
        animationDelay: `${index * 0.1}s`
      }}
    >
      {selectedOption === option && <CheckImage />}
      <p>{option}</p>
    </div>
  );
};

export default Option;
