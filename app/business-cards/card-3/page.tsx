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
  const [logo, setLogo] = useState("/business-card/card3/logo.png");
  const [logob, setLogob] = useState("/business-card/card3/logob.png");
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
          style={{ zoom: "35%" }}
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
                src="/business-card/card3/front.png"
                alt="card"
                className="w-[1050px] h-[600px]"
              />
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
            </Box>
            <Box className="w-[1050px] h-[600px] relative">
              <Image
                width={1050}
                height={600}
                src="/business-card/card3/back.png"
                alt="card"
                className="w-[1050px] h-[600px]"
              />
              <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
                <img src={logob} className="w-[340px]" />
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
            <div className="p-1 bg-white">
              <img src={logo} alt="logo" className="h-7" />
            </div>
            <span className="text-gray-400">Select front logo</span>
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
          <Flex
            align="center"
            justify="start"
            className="w-full border rounded-md overflow-hidden cursor-pointer relative"
            gap="2"
          >
            <div className="p-1 bg-cyan-900">
              <img src={logob} alt="logo" className="h-7" />
            </div>
            <span className="text-gray-400">Select back logo</span>
            <input
              className="w-full absolute top-0 left-0 opacity-0 cursor-pointer"
              type="file"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const fileURL = URL.createObjectURL(e.target.files[0]);
                  setLogob(fileURL);
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
