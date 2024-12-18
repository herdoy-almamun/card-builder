"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

const Design: React.FC = () => {
  const [location, setLocation] = useState<string>("123 Dummy, Lorem Ipsum");
  const [phone, setPhone] = useState<string>("+8801408127781");
  const [email, setEmail] = useState<string>("herdoycode@gmail.com");
  const [website, setWebsite] = useState<string>("www.herdoycode.com");
  const [logo, setLogo] = useState("/business-card/card1/logo.png");
  const [name, setName] = useState<string>("Your Name");
  const [tag, setTag] = useState<string>("Graphic Designer");

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
                src="/business-card/card1/front.png"
                alt="card"
                className="w-[1050px] h-[600px]"
              />
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
            </Box>
            <Box className="w-[1050px] h-[600px] relative">
              <Image
                width={1050}
                height={600}
                src="/business-card/card1/back.png"
                alt="card"
                className="w-[1050px] h-[600px]"
              />
              <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
                <img src={logo} className="w-[300px]" />
              </div>
            </Box>
          </Flex>
        </Flex>

        {/* Input Section */}
        <Flex align="center" direction="column" gap="3" p="3">
          <Input
            className="w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          <Input
            className="w-full"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            placeholder="Enter Tagline"
          />
          <Input
            className="w-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter Location"
          />
          <Input
            className="w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone"
          />
          <Input
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <Input
            className="w-full"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Enter Website"
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
