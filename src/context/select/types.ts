
export type SelectContextType = {
  isOpened: boolean;
  selectedOption: string;
  options: string[];
  selectRef: React.RefObject<HTMLDivElement | null>;
  setIsOpened: (opened: boolean) => void;
  selectOption: (option: string) => void;
};

export type SelectProviderProps = {
  children: React.ReactNode;
  options: string[];
};
