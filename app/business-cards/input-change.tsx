"use client";

import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

interface Props {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const InputChange = ({ value, setValue }: Props) => {
  return (
    <Input
      className="w-full"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={value}
    />
  );
};

export default InputChange;
