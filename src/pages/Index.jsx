import React from "react";
import { Box, Button, Container, Flex, Heading, HStack, Icon, Image, Link, SimpleGrid, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaGlobeAmericas, FaHandHoldingUsd, FaNetworkWired, FaSeedling, FaUserFriends } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("orange.100", "orange.200");
  const color = useColorModeValue("gray.800", "gray.900");

  return (
    <Box>
      {/* Navigation Bar */}
      <HStack px={8} py={4} justifyContent="space-between" alignItems="center" bg={bgColor}>
        <Heading size="md">Venture Capital Firm</Heading>
        <HStack spacing={8}>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#team">Team</Link>
          <Link href="#values">Values</Link>
          <Link href="#research">Research</Link>
          <Button colorScheme="orange">Get in touch</Button>
        </HStack>
      </HStack>

      {/* Hero Section */}
      <Flex direction="column" justify="center" align="center" height="70vh" bgImage="https://images.unsplash.com/photo-1490682143684-14369e18dce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHN1bnJpc2V8ZW58MHx8fHwxNzA4OTg2MjAzfDA&ixlib=rb-4.0.3&q=80&w=1080" bgSize="cover" bgPos="center" color={color}>
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            We back the most ambitious founders from day one.
          </Heading>
          <Text fontSize="xl" fontWeight="medium">
            Supporting mission-driven founders to scale new heights.
          </Text>
        </VStack>
      </Flex>

      {/* Value Propositions */}
      <Container maxW="6xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {valueProps.map((prop) => (
            <ValuePropBox key={prop.title} {...prop} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const valueProps = [
  {
    icon: FaHandHoldingUsd,
    title: "We invest in audacious ideas",
    description: "We provide the capital that turns groundbreaking ideas into reality.",
  },
  {
    icon: FaGlobeAmericas,
    title: "We help you build a global business",
    description: "With our network, you can expand your reach to markets worldwide.",
  },
  {
    icon: FaUserFriends,
    title: "We connect you with top talent",
    description: "Our connections can help you find the right people to grow your team.",
  },
  {
    icon: FaSeedling,
    title: "We support your growth journey",
    description: "From startup to scale-up, we’re with you every step of the way.",
  },
];

const ValuePropBox = ({ icon, title, description }) => {
  return (
    <Stack spacing={4} alignItems="center" justifyContent="center" textAlign="center">
      <Icon as={icon} w={10} h={10} color="orange.500" />
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text fontSize="md">{description}</Text>
    </Stack>
  );
};

export default Index;
