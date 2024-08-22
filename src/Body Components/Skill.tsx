import {
  Box,
  Flex,
  List,
  ListItem,
  Progress,
  Stack,
  Text,
  keyframes,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { DiJavascript } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import { BiLogoNetlify } from "react-icons/bi";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiVisualstudiocode,
  SiEclipseide,
  SiMongodb,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import "../assets/style/fonts.css";

export default function Skill() {
  interface Tech {
    category: string;
    items: string[];
    Logo: JSX.Element[];
    progress: number[];
  }

  const techStack: Tech[] = [
    {
      category: "languages",
      items: ["Java", "HTML", "CSS", "Javascript", "Node.js", "Typescript"],
      Logo: [
        <FaJava key="java" className="text-3xl" />,
        <FaHtml5 key="html" className="text-3xl text-[#DD4B25]" />,
        <FaCss3Alt key="css" className="text-3xl text-[#2D53E5]" />,
        <DiJavascript key="Javascript" className="text-3xl text-[#D0AB13]" />,
        <FaNodeJs key="node" className="text-3xl text-green-700" />,
        <SiTypescript key="typescript" className="text-3xl text-blue-600" />,
      ],
      progress: [50, 85, 80, 75, 70, 80],
    },
    {
      category: "frameworks",
      items: [
        "React",
        "Redux",
        "Bootstrap",
        "TailwindCSS",
        "Express",
        "Nextjs",
      ],
      Logo: [
        <FaReact key="react" className="text-3xl text-blue-500" />,
        <SiRedux key="redux" className="text-3xl text-[#7B50BD]" />,
        <FaBootstrap key="bootstrap" className="text-3xl text-[#8D1AFB]" />,
        <SiTailwindcss key="tailwindcss" className="text-3xl text-blue-500" />,
        <SiExpress key="express" className="text-3xl text-black" />,
        <SiNextdotjs key="nextjs" className="text-3xl text-black" />,
      ],
      progress: [86, 65, 85, 76, 80, 60],
    },
    {
      category: "databases",
      items: ["MYSQL", "MongoDB", "Prisma"],
      Logo: [
        <SiMysql key="mysql" className="text-3xl" />,
        <SiMongodb key="mongodb" className="text-3xl text-green-500" />,
        <SiPrisma key="prisma" className="text-3xl text-[#143A51]" />,
      ],
      progress: [70, 80, 60],
    },
    {
      category: "tools",
      items: ["VS Code", "Git", "Github", "Netlify", "Eclipse"],
      Logo: [
        <SiVisualstudiocode key="vscode" className="text-3xl text-blue-600" />,
        <BsGit key="git" className="text-3xl text-[#F05539]" />,
        <FaGithub key="github" className="text-3xl text-black" />,
        <BiLogoNetlify key="netlify" className="text-3xl text-[#37B7BC]" />,
        <SiEclipseide key="eclipse" className="text-3xl text-[#31255B]" />,
      ],
      progress: [80, 85, 85, 50, 40],
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const prefersReducedMotion = usePrefersReducedMotion();

  // Corrected function to return keyframes using the actual progress value
  const processAni = (progressValue: number) => {
    return isInView && keyframes`
      from { width: 0%; }
      to { width: ${progressValue}%; }
    `;
  };

  const animationProps = {
    transform: isInView ? "translateY(0)" : "translateY(200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 2s ease-in-out",
  };

  return (
    <Stack
      align="stretch"
      width="100%"
      height="150vh"
      bgGradient="linear(to-b, blue.200, blue.100, blue.100)"
    >
      <Box>
        <Text
          margin={5}
          fontSize="50px"
          textColor="white"
          fontWeight="700"
          className="inter"
        >
          Skill
        </Text>
      </Box>
      <Box
        margin="10px"
        height="120vh"
        display="flex"
        justifyContent="space-around"
      >
        {techStack.map((tech) => (
          <Flex
            key={tech.category}
            width="250px"
            flexDirection="column"
            alignItems="center"
          >
            <Box
              bg="white"
              height="3rem"
              width="7.5rem"
              textAlign="center"
              paddingTop="10px"
              borderRadius="20px"
              fontWeight="600"
              fontSize="16px"
              border="2px solid white"
              boxShadow="0 -4px 8px rgba(0, 0, 0, 0.2)"
              overflow="hidden"
              className="inter"
            >
              {tech.category.charAt(0).toUpperCase() + tech.category.slice(1)}
            </Box>
            <List width="100%" ref={ref}>
              {tech.items.map((lang, id) => (
                <ListItem
                  key={lang}
                  marginTop="20px"
                  className="font-sans font-bold text-xl p-4"
                  style={animationProps}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    marginBottom="10px"
                  >
                    <Text>{tech.Logo[id]}</Text>
                    {lang}
                    <Text>{tech.Logo[id]}</Text>
                  </Box>
                  <Box>
                    <Progress
                      value={tech.progress[id]}
                      size="sm"
                      borderRadius="20px"
                      colorScheme="green"
                      sx={{
                        "& div:first-of-type": {
                          animation: prefersReducedMotion
                            ? undefined
                            : `${processAni(tech.progress[id])} 2s ease-in-out`,
                          width: `${tech.progress[id]}%`,
                        },
                      }}
                    />
                  </Box>
                </ListItem>
              ))}
            </List>
          </Flex>
        ))}
      </Box>
    </Stack>
  );
}
