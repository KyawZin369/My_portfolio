import { Box, Center, Flex, Text, Image, Button } from "@chakra-ui/react";
import { useSpring, animated, config } from "@react-spring/web";

export default function Welcome() {
  const content = [
    {
      description: "A Passionate Software Developer",
    },
  ];

  const letters = content[0].description.split("");

  return (
    <Flex bgGradient="linear(to-b, blue.200, blue.100, blue.100)">
      <Center w="56%" h="40.5vw">
        <Box marginBottom="140px" h="15rem">
          <Text
            className="text-6xl mb-3 font-bold playfair text-center"
            textColor="white"
          >
            Hello, There
          </Text>
          <Text
            className="text-6xl mb-3 font-bold playfair text-center"
            textColor="white"
          >
            I am
          </Text>
          <Text
            className="text-6xl mb-3 font-bold playfair text-center"
            textColor="gray.700"
          >
            Kyaw Zin Thet
          </Text>
          <animated.div style={{ display: "flex", gap: "0.1rem"}}>
            {letters.map((letter, i) => (
              <animated.div
                key={i}
                style={useSpring({
                  from: { opacity: 0, transform: "translateY(-20px)" },
                  to: { opacity: 1, transform: "translateY(0px)" },
                  leave: { opacity: 0, transform: "translateY(20px)" },
                  reset: true,
                  delay: 100 * i,
                  config: config.stiff,
                })}
              >
                <Text
                  className="text-xl mb-3 font-semibold ms-[3px]"
                  textColor="gray.800"
                >
                  {letter}
                </Text>
              </animated.div>
            ))}
          </animated.div>
          <Center>
            <Button colorScheme="teal" variant="outline" className="m-10">
              Contact Me
            </Button>
            <Button
              colorScheme="teal"
              variant="solid"
              className="m-10"
              as="a"
              href="/ResumeForm/KyawZinThet - Resume form.pdf"
              download="KyawZinThet_Resume.pdf"
            >
              Resume Form
            </Button>
          </Center>
        </Box>
      </Center>
      <Box w="44%" h="40vw">
        <Box>
          <animated.div
            style={useSpring({
              from: { opacity: 0, transform: "translateX(100px)" },
              to: { opacity: 1, transform: "translateX(0px)" },
              leave: { opacity: 0, transform: "translateX(-100px)" },
              reset: true,
              delay: 500,
              config: {
                mass: 1,
                tension: 170,
                friction: 26,
              },
            })}
          >
            <Image
              src="/image/svgimage.png"
              boxSize="500px"
              objectFit="cover"
              alt="KyawZinThetPhoto"
              paddingBottom="50px"
            />
          </animated.div>
        </Box>
      </Box>
    </Flex>
  );
}
