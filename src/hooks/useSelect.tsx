import { SelectContext } from "@/context/select";
import { useContext } from "react";

export const useSelect = () => {
  return useContext(SelectContext);
};
