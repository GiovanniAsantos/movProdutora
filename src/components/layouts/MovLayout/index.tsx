import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Navbar } from '../HomeLayout/Navbar/Navbar'

interface MovLayoutProps {
  children: React.ReactNode
  maxWidthContainer?: string
}

const MovLayout: React.FC<MovLayoutProps> = ({ children, maxWidthContainer = 'Container.xl' }) => {
  return (
    <>
      <Navbar />
      <Container centerContent maxW={maxWidthContainer} padding={0}>
        {children}
      </Container>
    </>
  )
}

export default MovLayout
