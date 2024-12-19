"use client";
import { Flex } from "@radix-ui/themes";
import { Dispatch, SetStateAction } from "react";

interface Props {
  logo: string;
  setLogo: Dispatch<SetStateAction<string>>;
}

const HandleLogoChange = ({ logo, setLogo }: Props) => {
  return (
    <Flex
      align="center"
      justify="start"
      className="w-full border rounded-md overflow-hidden cursor-pointer relative"
      gap="2"
    >
      <div className="p-1 bg-gray-200">
        <img src={logo} alt="logo" className="h-7" />
      </div>
      <span className="text-gray-400">Select your logo</span>
      <input
        className="w-full absolute top-0 left-0 opacity-0 cursor-pointer"
        type="file"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const fileURL = URL.createObjectURL(e.target.files[0]);
            setLogo(fileURL);
          }
        }}
      />
    </Flex>
  );
};

export default HandleLogoChange;
