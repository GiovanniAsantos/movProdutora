import MovLayout from '@/components/Layouts/MovLayout'
import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

type AboutPageProps = {}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <MovLayout>
      <Box>
        <Heading as="h1" mb={4}>
          Sobre Nós
        </Heading>
        <Text fontSize="lg">Bem-vindo à nossa página sobre! Aqui você encontrará informações sobre a nossa empresa e o que fazemos.</Text>
        <Text mt={4}>
          Somos uma equipe dedicada a fornecer as melhores soluções e serviços para nossos clientes. Nossa missão é garantir a satisfação total e a
          excelência em tudo o que fazemos.
        </Text>
      </Box>
    </MovLayout>
  )
}

export default AboutPage
