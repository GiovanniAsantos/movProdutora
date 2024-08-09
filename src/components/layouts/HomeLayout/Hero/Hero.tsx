import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

type HeroProps = {
  title: string
  backgroundImage: string
}

export const Hero: React.FC<HeroProps> = ({ title, backgroundImage }) => {
  return (
    <Box
      width={'100%'}
      height={'100vh'}
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display="flex"
      alignItems="center"
      justifyContent="center">
      <Heading
        color="white"
        fontWeight={600}
        fontSize={{ base: '24px', sm: '36px', md: '48px' }}
        textAlign="center"
        marginLeft={'950px'}
        marginBottom={'300px'}>
        {title}
        <p style={{ fontSize: '20px' }}>Produzindo Filmes que Impulsionam Negócios</p>
      </Heading>
    </Box>
  )
}
