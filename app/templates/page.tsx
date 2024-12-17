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
        <Link href="/templates/design-1">
          <Image
            src="/bcard/design-1.jpg"
            width={500}
            height={700}
            alt="design-1"
          />
        </Link>
        <Link href="/templates/design-1">
          <Image
            src="/bcard/design-2.jpg"
            width={500}
            height={700}
            alt="design-1"
          />
        </Link>
        <Link href="/templates/design-1">
          <Image
            src="/bcard/design-3.jpg"
            width={500}
            height={700}
            alt="design-1"
          />
        </Link>
        <Link href="/templates/design-1">
          <Image
            src="/bcard/design-4.jpg"
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
