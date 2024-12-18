"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const Design: React.FC = () => {
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

  const contentRef = useRef<HTMLDivElement | null>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef: contentRef as React.RefObject<Element | Text>,
  });

  return (
    <Container className="px-3">
      <Grid columns={{ initial: "1", md: "1fr 300px" }} my="6">
        <Flex
          align="center"
          justify="center"
          style={{ zoom: "40%" }}
          className="bg-gray-400"
        >
          <Flex
            ref={contentRef}
            align="center"
            justify="center"
            direction="column"
            className="w-[1200px] h-[1400px] gap-[75px]"
          >
            <Box className="w-[1050px] h-[600px] relative">
              <Image
                width={1050}
                height={600}
                src="/business-card/card2/front.png"
                alt="card"
                className="w-[1050px] h-[600px]"
              />
              <Flex
                align="center"
                className="h-full absolute left-[90px] top-0"
              >
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
            </Box>
            <Box className="w-[1050px] h-[600px] relative">
              <Image
                width={1050}
                height={600}
                src="/business-card/card2/back.png"
                alt="card"
                className="w-[1050px] h-[600px]"
              />
              <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
                <img src={logo} className="w-[320px]" />
              </div>
            </Box>
          </Flex>
        </Flex>

        {/* Input Section */}
        <Flex align="center" direction="column" gap="3" p="3">
          <Input
            className="w-full"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            className="w-full"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            className="w-full"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
          <Input
            className="w-full"
            value={address1}
            onChange={(e) => setAddress1(e.target.value)}
          />
          <Input
            className="w-full"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
          <Input
            className="w-full"
            value={phone1}
            onChange={(e) => setPhone1(e.target.value)}
          />
          <Input
            className="w-full"
            value={phone2}
            onChange={(e) => setPhone2(e.target.value)}
          />
          <Input
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="w-full"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
          <Flex
            align="center"
            justify="start"
            className="w-full border rounded-md overflow-hidden cursor-pointer relative"
            gap="2"
          >
            <div className="p-1 bg-black">
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
          <Button
            className="w-full"
            onClick={() => {
              if (reactToPrintFn) {
                reactToPrintFn();
              }
            }}
          >
            Save as PDF
          </Button>
        </Flex>
      </Grid>
    </Container>
  );
};

export default Design;
