import { Box, Flex, List, ListItem, Stack, Text } from "@chakra-ui/react";
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
  SiTypescript
} from "react-icons/si";
import "../assets/style/fonts.css"

export default function Skill() {
  interface tech {
    category: string;
    items: string[];
    Logo: JSX.Element[];
    progress : number[];
  }

  const techStack: tech[] = [
    {
      category: "languages",
      items: ["Java", "HTML", "CSS", "Javascript", "Node.js", "Typescript"],
      Logo: [
        <FaJava key="java" className="text-3xl"/>,
        <FaHtml5 key="html" className="text-3xl text-[#DD4B25]"/>,
        <FaCss3Alt key="css" className="text-3xl text-[#2D53E5]"/>,
        <DiJavascript key="Javascript" className="text-3xl text-[#D0AB13]"/>,
        <FaNodeJs key="node" className="text-3xl text-green-700"/>,
        <SiTypescript key="typescript" className="text-3xl text-blue-600" />
      ],
      progress: [10,20,30,40,50]
    },
    {
      category: "frameworks",
      items: [
        "React",
        "Redux",
        "Bootstrap",
        "TailwindCSS",
        "Express",
        "NextJs",
      ],
      Logo: [
        <FaReact key="react" className="text-3xl text-blue-500"/>,
        <SiRedux key="redux" className="text-3xl text-[#7B50BD]"/>,
        <FaBootstrap key="bootstrap" className="text-3xl text-[#8D1AFB]"/>,
        <SiTailwindcss key="tailwindcss" className="text-3xl text-blue-500"/>,
        <SiExpress key="express" className="text-3xl text-black"/>,
        <SiNextdotjs key="nextjs" className="text-3xl text-black"/>,
      ],
      progress: [10,20,30,40,50]
    },
    {
      category: "databases",
      items: ["MYSQL", "MongoDB", "Prisma"],
      Logo: [
        <SiMysql key="mysql" className="text-3xl"/>,
        <SiMongodb key="mongodb" className="text-3xl text-green-500"/>,
        <SiPrisma key="prisma" className="text-3xl text-[#143A51]"/>,
      ],
      progress: [10,20,30,40,50]
    },
    {
      category: "tools",
      items: [
        "VS Code",
        "Git",
        "Github",
        "Netlify",
        "Eclipse",
      ],
      Logo: [
        <SiVisualstudiocode key="vscode" className="text-3xl text-blue-600"/>,
        <BsGit key="git" className="text-3xl text-[#F05539]"/>,
        <FaGithub key="github" className="text-3xl text-black"/>,
        <BiLogoNetlify key="netlify" className="text-3xl text-[#37B7BC]"/>,
        <SiEclipseide key="eclipse" className="text-3xl text-[#31255B]"/>,
      ],
      progress: [10,20,30,40,50]
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationProps = {
    transform: isInView ? "translateY(0)" : "translateY(100px)",
    opacity: isInView ? 1 : 0,
    transition: "all 2s ease-in-out",
  };

  return (
    <Stack
      ref={ref}
      align="stretch"
      width="100%"
      height="120vh"
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
        height="90vh"
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
            <List width="100%">
              {tech.items.map((lang, id) => (
                <ListItem
                  key={lang}
                  marginTop="20px"
                  className="font-sans font-bold text-xl p-4"
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  style={animationProps}
                >
                  <Text>{tech.Logo[id]}</Text>
                  {lang}
                  <Text>{tech.Logo[id]}</Text>
                </ListItem>
              ))}
            </List>
          </Flex>
        ))}
      </Box>
    </Stack>
  );
}
