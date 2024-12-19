import { Container, Flex } from "@radix-ui/themes";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <Container>
      <Flex
        className="w-dvw h-[calc(100dvh-100px)]"
        align="center"
        justify="center"
      >
        <BeatLoader className="w-[200px]" />
      </Flex>
    </Container>
  );
};

export default Loading;
