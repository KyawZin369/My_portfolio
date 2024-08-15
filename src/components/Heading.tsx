import { VStack } from "@chakra-ui/react";
import Navigation from "./Navigation";
import Welcome from "./Welcome";

export default function Heading() {
  return (
    <VStack
      align="stretch"
      spacing={0}
    >
        <Navigation />
        <Welcome/>
    </VStack>
  );
}
