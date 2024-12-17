"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Box, Container, Flex, Grid } from "@radix-ui/themes";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Image from "next/image";
import { useRef, useState } from "react";

const Design = () => {
  const [location, setLocation] = useState("123 Dummy, Lorem Ipsum");
  const [phone, setPhone] = useState("+8801408127781");
  const [email, setEmail] = useState("herdoycode@gmail.com");
  const [website, setWebsite] = useState("www.herdoycode.com");
  const [name, setName] = useState("Your Name");
  const [tag, setTag] = useState("Graphic Designer");

  // Ref to capture the card for rendering into PDF
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    const element = cardRef.current;
    if (!element) {
      console.error("The cardRef is not attached to an element.");
      return;
    }

    // Temporarily remove the zoom style
    const originalZoom = element.style.zoom;
    element.style.zoom = "100%";

    // Render the card section as an image
    const canvas = await html2canvas(element, {
      scale: 2, // Increase resolution
      useCORS: true, // Handle cross-origin images if needed
    });

    // Restore the original zoom style
    element.style.zoom = originalZoom;

    const imgData = canvas.toDataURL("image/png");

    // Create a new jsPDF instance
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    // Add the rendered image to the PDF
    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("business-card.pdf");
  };

  return (
    <Container className="px-3">
      <Grid columns={{ initial: "1", md: "1fr 300px" }} my="6">
        <Flex align="center" justify="center">
          <Flex
            ref={cardRef}
            align="center"
            justify="center"
            direction="column"
            className="w-[1200px] h-[1400px] gap-[75px] bg-gray-400"
            style={{
              zoom: "40%",
            }}
          >
            <Box className="w-[1050px] h-[600px] relative">
              <Image
                width={1050}
                height={600}
                src="/cards/card11.png"
                alt="card"
                className="w-[1050px] h-[600px]"
              />
              <Grid
                columns="1"
                rows="4"
                className="text-[28px] absolute top-[175px] left-[170px] text-white gap-[25px]"
              >
                <div> {location} </div>
                <div> {phone} </div>
                <div> {email} </div>
                <div> {website} </div>
              </Grid>
              <Flex
                direction="column"
                align="end"
                className="absolute right-[85px] top-[200px] leading-[45px]"
              >
                <h1 className="text-[60px] font-semibold tracking-[-2px]">
                  {name}
                </h1>
                <span className="text-[28px] font-[600]">{tag}</span>
              </Flex>
            </Box>
            <Box className="w-[1050px] h-[600px]">
              <Image
                width={1050}
                height={600}
                src="/cards/card12.png"
                alt="card"
                className="w-[1050px] h-[600px]"
              />
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
          <Button className="w-full" onClick={downloadPDF}>
            Download as PDF
          </Button>
        </Flex>
      </Grid>
    </Container>
  );
};

export default Design;
