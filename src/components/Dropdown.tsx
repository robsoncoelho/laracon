"use client";

import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";

const CheckImage = () => {
  return (
    <Image src="/images/check.svg" alt="Selected" width={12} height={12} />
  );
};

const ContentSelector = ({ selectedOption }: { selectedOption: string }) => {
  return (
    <>
      {Boolean(selectedOption) ? (
        <div className="selected">
          <CheckImage />
          <p>
            <span>Laracon</span>
            {selectedOption}
          </p>
        </div>
      ) : (
        <p>Select a Laracon</p>
      )}
    </>
  );
};

export default function Dropdown({ options }: { options: string[] }) {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(() => {
    if (isOpened) {
      setIsOpened(false);
    }
  }, [isOpened]);

  useEffect(() => {
    if (selectedOption) {
      setIsOpened(false);
    }
  }, [selectedOption]);

  useOnClickOutside(dropdownRef, handleClickOutside);

  return (
    <div
      ref={dropdownRef}
      className={classNames("selector-container", { opened: isOpened })}
    >
      <div
        className="selector bg-overlay"
        onClick={() => setIsOpened(!isOpened)}
      >
        <ContentSelector selectedOption={selectedOption} />
        <span className="arrows"></span>
      </div>
      {isOpened &&
        options.map((option, index) => (
          <div
            key={option}
            className={classNames("card bg-overlay", {
              selected: selectedOption === option
            })}
            onClick={() => {
              setSelectedOption(selectedOption === option ? "" : option);
            }}
            style={{
              transform: `rotate(-${index + 1}deg) translateX(${index * 2}px)`,
              animationDelay: `${index * 0.1}s`
            }}
          >
            {selectedOption === option && <CheckImage />}
            <p>{option}</p>
          </div>
        ))}
    </div>
  );
}
