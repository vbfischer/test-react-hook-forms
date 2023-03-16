import { Container, Flex, Heading, VStack } from "@chakra-ui/react";
import { ControlForm } from "./ControlForm";
import { MainForm } from "./MainForm";

function App() {
  return (
    <Container maxW="container.sm" my={{ base: 0, md: 8 }}>
      <Flex
        gap={16}
        direction="column"
        alignItems="stretch"
        justifyContent="center"
      >
        <VStack alignItems="stretch">
          <Heading as="h2">Control Form</Heading>
          <ControlForm />
        </VStack>
        <VStack alignItems="stretch">
          <Heading as="h2">Embedded Form</Heading>
          <MainForm />
        </VStack>
      </Flex>
    </Container>
  );
}

export default App;
