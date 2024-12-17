import { buttonVariants } from "@/components/ui/button";
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Flex
        align="center"
        justify="center"
        direction="column"
        gap="4"
        className="md:h-[calc(100dvh-70px)] mt-10 md:mt-0 px-3 md:px-0"
      >
        <h1 className="text-4xl font-semibold text-center leading-[50px] max-w-[600px]">
          Design, Customize, and Download Your Perfect{" "}
          <span className="text-primary">Business Card</span> Totally Free!
        </h1>
        <Link href="/templates" className={buttonVariants()}>
          Get Start
        </Link>
      </Flex>
    </Container>
  );
}
