"use client";

import {
  createContext,
  useState,
  useCallback,
  useRef,
  useMemo,
  useEffect
} from "react";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { SelectContextType, SelectProviderProps } from "./types";

const defaultValues: SelectContextType = {
  isOpened: false,
  selectedOption: "",
  options: [],
  selectRef: { current: null },
  setIsOpened: () => {},
  selectOption: () => {}
};

export const SelectContext = createContext<SelectContextType>(defaultValues);

export const SelectProvider = ({ children, options }: SelectProviderProps) => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const selectRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(() => {
    if (isOpened) {
      setIsOpened(false);
    }
  }, [isOpened]);

  useEffect(() => {
    if (selectedOption) {
      setIsOpened(false);
    }
  }, [selectedOption, setIsOpened]);

  const selectOption = useCallback(
    (option: string) => {
      // clean the selection if user clicks on the same option
      setSelectedOption(selectedOption === option ? "" : option);
    },
    [selectedOption]
  );

  useOnClickOutside(selectRef, handleClickOutside);

  const value = useMemo(
    () => ({
      isOpened,
      selectedOption,
      options,
      selectRef,
      setIsOpened,
      selectOption
    }),
    [isOpened, selectedOption, options, selectRef, setIsOpened, selectOption]
  );

  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};
