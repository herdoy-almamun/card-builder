"use client";

import { Flex, Grid } from "@radix-ui/themes";
import { useState } from "react";
import CardLayout from "../card-layout";
import InputChange from "../input-change";
import HandleLogoChange from "../logo-change";

const Design = () => {
  const [address1, setAddress1] = useState<string>("Your Street Address Here");
  const [address2, setAddress2] = useState<string>("New Yerk City - 000");
  const [phone1, setPhone1] = useState<string>("+8801408127781");
  const [phone2, setPhone2] = useState<string>("+880617155294");
  const [email, setEmail] = useState<string>("herdoycode@gmail.com");
  const [website, setWebsite] = useState<string>("www.herdoycode.com");
  const [logo, setLogo] = useState("/business-card/card2/logo.png");
  const [firstName, setFirstName] = useState<string>("Michal");
  const [lastName, setLastName] = useState<string>("Hassen");
  const [tag, setTag] = useState<string>("CEO & Founder");

  return (
    <CardLayout
      front="/business-card/card2/front.png"
      back="/business-card/card2/back.png"
      infoFront={
        <>
          <Flex align="center" className="h-full absolute left-[90px] top-0">
            <img src={logo} alt="logo" className="w-[250px]" />
          </Flex>
          <Flex
            align="end"
            direction="column"
            className="absolute right-[80px] top-[100px]"
          >
            <div className="flex-1 text-[40px] font-semibold">
              {firstName} <span className="text-[#ffc100]">{lastName}</span>{" "}
            </div>
            <div className="text-2xl">{tag}</div>
          </Flex>
          <Grid
            rows="3"
            className="absolute bottom-[95px] right-[125px] gap-[17px] text-[21px]"
          >
            <Flex align="end" direction="column">
              <div> {phone1} </div>
              <div> {phone2} </div>
            </Flex>
            <Flex align="end" direction="column">
              <div> {email} </div>
              <div> {website} </div>
            </Flex>
            <Flex align="end" direction="column">
              <div> {address1} </div>
              <div> {address2} </div>
            </Flex>
          </Grid>
        </>
      }
      infoBack={
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
          <img src={logo} className="w-[320px]" />
        </div>
      }
      inputs={
        <>
          <InputChange value={firstName} setValue={setFirstName} />
          <InputChange value={lastName} setValue={setLastName} />
          <InputChange value={tag} setValue={setTag} />
          <InputChange value={address1} setValue={setAddress1} />
          <InputChange value={address2} setValue={setAddress2} />
          <InputChange value={phone1} setValue={setPhone1} />
          <InputChange value={phone2} setValue={setPhone2} />
          <InputChange value={email} setValue={setEmail} />
          <InputChange value={website} setValue={setWebsite} />
          <HandleLogoChange logo={logo} setLogo={setLogo} />
        </>
      }
    />
  );
};

export default Design;
