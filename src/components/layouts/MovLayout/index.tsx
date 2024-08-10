import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../HomeLayout/Navbar/Navbar'

interface MovLayoutProps {
  children: React.ReactNode
}

const MovLayout: React.FC<MovLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container centerContent maxW="container.xl" padding={0}>
        {children}
      </Container>
    </>
  )
}

export default MovLayout
