import { Box, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

interface HeroProps {
  title: string;
  backgroundImage: string;
}

export const Hero: React.FC<HeroProps> = ({ title, backgroundImage }) => {
  return (
    <Box
      width="98.9vw"
      minHeight="100vh"
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflowX="hidden"
    >
      <Heading
        color="white"
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        textAlign="center"
        marginLeft={"60vw"}
        marginBottom={"20vh"}
      >
        {title}
        <p style={{fontSize:"20px"}}>Produzindo Filmes que Impulsionam Negócios</p>
      </Heading>
    </Box>
  );
};