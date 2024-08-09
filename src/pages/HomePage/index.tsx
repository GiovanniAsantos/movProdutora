import { Hero } from '@/components/layouts/HomeLayout/Hero/Hero'
import { Navbar } from '@/components/layouts/HomeLayout/Navbar/Navbar'
import MovLayout from '@/components/layouts/MovLayout'
import { Box } from '@chakra-ui/react'
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <MovLayout>
      <Box margin="0px" padding="0px" position="relative" top="0px" left="0px">
        <Navbar />
      </Box>
      <Hero title="Mov Produtora" backgroundImage="/public/background.jpeg" />
    </MovLayout>
  )
}

export default HomePage
