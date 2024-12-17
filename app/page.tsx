import { Button } from "@/components/ui/button";
import { Container, Flex } from "@radix-ui/themes";
import Nav from "./nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <Container>
        <Flex
          align="center"
          justify="center"
          direction="column"
          gap="4"
          className="h-[calc(100dvh-70px)] px-3 md:px-0"
        >
          <h1 className="text-4xl font-semibold text-center leading-[50px] max-w-[600px]">
            Design, Customize, and Download Your Perfect{" "}
            <span className="text-primary">Business Card</span> Totally Free!
          </h1>
          <Button>Get Start</Button>
        </Flex>
      </Container>
    </main>
  );
}
