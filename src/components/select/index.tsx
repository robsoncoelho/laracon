"use client";

import classNames from "classnames";
import { SelectProvider } from "@/context/select";
import Selector from "./Selector";
import Option from "./Option";
import { useSelect } from "@/hooks/useSelect";

const Component = () => {
  const { isOpened, options, selectRef } = useSelect();

  return (
    <div
      ref={selectRef}
      className={classNames("selector-container", { opened: isOpened })}
    >
      <Selector />
      {isOpened &&
        options.map((option, index) => (
          <Option key={option} option={option} index={index} />
        ))}
    </div>
  );
};

export default function Select({ options }: { options: string[] }) {
  return (
    <SelectProvider options={options}>
      <Component />
    </SelectProvider>
  );
}
