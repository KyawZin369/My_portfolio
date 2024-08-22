import { Box, Heading, Text, VStack, HStack, Icon } from '@chakra-ui/react';
import { FaGraduationCap } from 'react-icons/fa';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description: string;
}

const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of XYZ',
    year: '2020 - 2024',
    description: 'Focused on software engineering, algorithms, and data structures.',
  },
  {
    degree: 'High School Diploma',
    institution: 'ABC High School',
    year: '2017 - 2020',
    description: 'Specialized in Science and Mathematics.',
  },
];

const Education: React.FC = () => {
  return (
    <Box p={5} bgGradient="linear(to-b, blue.200, blue.100, blue.100)">
      <Heading as="h2" size="xl" mb={6}>
        Education
      </Heading>
      <VStack spacing={8} align="start">
        {educationData.map((item, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <HStack spacing={4} align="center">
              <Icon as={FaGraduationCap} w={8} h={8} color="teal.500" />
              <Box>
                <Heading as="h3" size="md">{item.degree}</Heading>
                <Text fontSize="sm" color="gray.500">{item.institution}</Text>
                <Text fontSize="sm" color="gray.500">{item.year}</Text>
              </Box>
            </HStack>
            <Text mt={2}>{item.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default Education;
