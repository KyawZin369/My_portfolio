import {
  Box,
  StackDivider,
  VStack,
  Image,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import "../assets/style/fonts.css";

export default function Navigation() {
  const NavItem = ["Skills", "Education", "Projects", "Contact Me"];

  return (
    <VStack
      divider={<StackDivider/>}
      align="stretch"
    >
      <Box h="80px" bg="blue.200" className="flex justify-between">
        <Box className="flex items-center pl-10 py-4">
          <Image
            src="../../public/lounge-photography-portfolio-for-job-application.svg"
            alt="my_portfolio_image"
            boxSize="50px"
            objectFit="cover"
          />
          <Text
            fontSize="lg"
            className="Pacifico-Font flex font-bold text-green-950 mx-5"
          >
            <Text
              as="span"
              color="#1A4870"
              className="Pacifico-Font font-semibold"
            >
              {"<>"}
            </Text>
            <Text as="span" mx={2}>
              Kyaw Zin Thet
            </Text>
            <Text
              as="span"
              color="#1A4870"
              className="Pacifico-Font font-semibold"
            >
              {"</>"}
            </Text>
          </Text>
        </Box>
        <Box className="w-[650px] mt-4">
          <List spacing={3} styleType="none" pl={4} className="flex w-10/12">
            {NavItem.map((item) => (
              <ListItem
                key={item}
                className={`w-full h-full ${
                  item === "Skills" ? "-mx-3 my-3" : "m-3"
                }`}
              >
                <Text
                  fontSize="md"
                  _hover={{
                    color: "#1A4D2E",
                    cursor: "pointer",
                    transition: "color 0.3s ease-in-out",
                  }}
                  transition="color 0.3s ease-in-out"
                  fontWeight="700"
                  color="#1A4870"
                >
                  {item}
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </VStack>
  );
}
