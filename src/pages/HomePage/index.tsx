import { Box, Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import HomeLayout from "../../components/layouts/HomeLayout";

const HomePage: React.FC = () => {
  return (
    <HomeLayout>
      <Stack as={Box} textAlign={"center"}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Make money from <br />
          <Text as={"span"} color={"green.400"}>
            your audience
          </Text>
        </Heading>
        <Text color={"gray.500"}>
          Monetize your content by charging your most loyal readers and reward
          them loyalty points. Give back to your loyal readers by granting them
          access to your pre-releases and sneak-peaks.
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
          >
            Get Started
          </Button>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </HomeLayout>
  );
};

export default HomePage;
