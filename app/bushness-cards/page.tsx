import { Container, Grid } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

const Templates = () => {
  return (
    <Container className="px-3">
      <h1 className="text-4xl font-semibold text-center my-6">
        Select a Template
      </h1>
      <Grid columns={{ initial: "1", sm: "2", md: "3", lg: "3" }} gap="4">
        <Link href="/bushness-cards/card-1">
          <Image
            src="/bushness-card/card1/thumb.jpg"
            width={500}
            height={700}
            alt="design-1"
          />
        </Link>
        <Link href="/bushness-cards/card-2">
          <Image
            src="/bushness-card/card2/thumb.jpg"
            width={500}
            height={700}
            alt="design-1"
          />
        </Link>
        <Link href="/bushness-cards/card-3">
          <Image
            src="/bushness-card/card3/thumb.jpg"
            width={500}
            height={700}
            alt="design-1"
          />
        </Link>
        <Link href="/bushness-cards/card-4">
          <Image
            src="/bushness-card/card4/thumb.jpg"
            width={500}
            height={700}
            alt="design-1"
          />
        </Link>
      </Grid>
    </Container>
  );
};

export default Templates;