import { Container } from '@chakra-ui/react'
import React from 'react'

interface MovLayoutProps {
  children: React.ReactNode
}

const MovLayout: React.FC<MovLayoutProps> = ({ children }) => {
  return (
    <Container centerContent maxW="container.xl">
      {children}
    </Container>
  )
}

export default MovLayout
