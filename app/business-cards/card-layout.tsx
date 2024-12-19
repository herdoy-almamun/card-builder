"use client";

import { Button } from "@/components/ui/button";
import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import Image from "next/image";
import { ReactNode, useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useReactToPrint } from "react-to-print";

interface Props {
  front: string;
  back: string;
  infoFront: ReactNode;
  infoBack: ReactNode;
  inputs: ReactNode;
}

const CardLayout = ({ front, back, infoFront, infoBack, inputs }: Props) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setLoading] = useState(false);

  const reactToPrintFn = useReactToPrint({
    contentRef: contentRef as React.RefObject<Element | Text>,
    onBeforePrint: async () => setLoading(true),
    onAfterPrint: () => setLoading(false),
  });

  return (
    <Container className="px-3">
      <Grid columns={{ initial: "1", md: "1fr 300px" }} my="6">
        <Flex
          align="center"
          justify="center"
          style={{ zoom: "35%" }}
          className="bg-gray-400 rounded-2xl"
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
                src={back}
                alt="card"
                className="w-[1050px] h-[600px]"
              />
              {infoBack}
            </Box>
            <Box className="w-[1050px] h-[600px] relative">
              <Image
                width={1050}
                height={600}
                src={front}
                alt="card"
                className="w-[1050px] h-[600px]"
              />

              {infoFront}
            </Box>
          </Flex>
        </Flex>

        <Flex align="center" direction="column" gap="3" p="3">
          {inputs}
          <Button
            className="w-full"
            onClick={() => {
              if (reactToPrintFn) {
                reactToPrintFn();
              }
            }}
          >
            {isLoading ? <BeatLoader /> : "Save as PDF"}
          </Button>
        </Flex>
      </Grid>
    </Container>
  );
};

export default CardLayout;
