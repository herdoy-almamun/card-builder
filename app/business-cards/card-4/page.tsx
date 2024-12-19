"use client";

import { Flex } from "@radix-ui/themes";
import { useState } from "react";
import CardLayout from "../card-layout";
import InputChange from "../input-change";
import HandleLogoChange from "../logo-change";

const Design = () => {
  const [location, setLocation] = useState<string>("123 Dummy, Lorem Ipsum");
  const [phone, setPhone] = useState<string>("+8801408127781");
  const [email, setEmail] = useState<string>("herdoycode@gmail.com");
  const [website, setWebsite] = useState<string>("www.herdoycode.com");
  const [logo, setLogo] = useState("/business-card/card4/logo.png");
  const [name, setName] = useState<string>("Your Name");
  const [tag, setTag] = useState<string>("Graphic Designer");

  return (
    <CardLayout
      front="/business-card/card4/front.png"
      back="/business-card/card4/back.png"
      infoFront={
        <>
          <Flex
            className="absolute top-[205px] right-[110px] text-[#c5a983] text-2xl gap-[15px]"
            direction="column"
          >
            <div>{phone}</div>
            <div>{email}</div>
            <div>{location}</div>
            <div>{website}</div>
          </Flex>

          <Flex
            direction="column"
            align="end"
            className="absolute left-[140px] top-[240px] text-[#c5a983]"
          >
            <h1 className="text-[55px] font-semibold leading">{name}</h1>
            <span className="text-2xl">{tag}</span>
          </Flex>
        </>
      }
      infoBack={
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
          <img src={logo} className="w-[450px]" />
        </div>
      }
      inputs={
        <>
          <InputChange value={name} setValue={setName} />
          <InputChange value={tag} setValue={setTag} />
          <InputChange value={location} setValue={setLocation} />
          <InputChange value={phone} setValue={setPhone} />
          <InputChange value={email} setValue={setEmail} />
          <InputChange value={website} setValue={setWebsite} />
          <HandleLogoChange logo={logo} setLogo={setLogo} />
        </>
      }
    />
  );
};

export default Design;
