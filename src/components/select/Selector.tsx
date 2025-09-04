"use client";

import { useSelect } from "@/hooks/useSelect";
import CheckImage from "./CheckImage";

const Selector = () => {
  const { setIsOpened, isOpened, selectedOption } = useSelect();

  return (
    <div
      className="selector bg-overlay"
      onClick={() => setIsOpened(!isOpened)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsOpened(!isOpened);
        }
      }}
      aria-expanded={isOpened}
      aria-label={selectedOption || "Select a Laracon"}
    >
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
      <span className="arrows" aria-hidden="true"></span>
    </div>
  );
};

export default Selector;
