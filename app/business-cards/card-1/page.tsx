"use client";

import { Flex, Grid } from "@radix-ui/themes";
import { useState } from "react";
import CardLayout from "../card-layout";
import InputChange from "../input-change";
import HandleLogoChange from "../logo-change";

const Design = () => {
  const [location, setLocation] = useState<string>("123 Dummy, Lorem Ipsum");
  const [phone, setPhone] = useState<string>("+8801408127781");
  const [email, setEmail] = useState<string>("herdoycode@gmail.com");
  const [website, setWebsite] = useState<string>("www.herdoycode.com");
  const [logo, setLogo] = useState("/business-card/card1/logo.png");
  const [name, setName] = useState<string>("Your Name");
  const [tag, setTag] = useState<string>("Graphic Designer");

  return (
    <CardLayout
      front="/business-card/card1/front.png"
      back="/business-card/card1/back.png"
      infoFront={
        <>
          <Grid
            columns="1"
            rows="4"
            className="text-[28px] absolute top-[185px] left-[170px] text-white gap-[25px]"
          >
            <div>{location}</div>
            <div>{phone}</div>
            <div>{email}</div>
            <div>{website}</div>
          </Grid>
          <Flex
            direction="column"
            align="end"
            className="absolute right-[85px] top-[250px] leading-[45px]"
          >
            <h1 className="text-[60px] font-semibold tracking-[-2px]">
              {name}
            </h1>
            <span className="text-[28px] font-[600]">{tag}</span>
          </Flex>
        </>
      }
      infoBack={
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
          <img src={logo} className="w-[300px]" alt="Logo" />
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
