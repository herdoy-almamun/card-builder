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
  const [logo, setLogo] = useState("/business-card/card3/logo.png");
  const [logob, setLogob] = useState("/business-card/card3/logob.png");
  const [name, setName] = useState<string>("Your Name");
  const [tag, setTag] = useState<string>("Graphic Designer");

  return (
    <CardLayout
      front="/business-card/card3/front.png"
      back="/business-card/card3/back.png"
      infoFront={
        <>
          <Flex
            className="absolute top-[150px] right-[130px] text-[#c5a983]"
            direction="column"
            gap="6"
          >
            <h1 className="text-[55px] font-semibold leading-3">{name}</h1>
            <span className="text-2xl">{tag}</span>
          </Flex>

          <Flex
            className="absolute bottom-[145px] right-[95px] text-[#c5a983] text-2xl gap-[17px]"
            direction="column"
          >
            <div>{location}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <div>{website}</div>
          </Flex>

          <Flex
            direction="column"
            align="end"
            className="absolute left-[190px] top-[240px]"
          >
            <img src={logo} alt="logo" className="w-[170px]" />
          </Flex>
        </>
      }
      infoBack={
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
          <img src={logob} className="w-[340px]" />
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
          <HandleLogoChange logo={logob} setLogo={setLogob} />
        </>
      }
    />
  );
};

export default Design;
