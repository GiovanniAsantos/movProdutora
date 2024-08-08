import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import HomeLayout from '../../components/layouts/HomeLayout'
import { Navbar } from '../../components/layouts/HomeLayout/Navbar/Navbar'
import { Hero } from '../../components/layouts/HomeLayout/Hero/Hero'

const HomePage: React.FC = () => {
  return (
    <HomeLayout>
      <Box  margin="0px" padding="0px" position="relative" top="0px" left="0px">
        <Navbar />
      </Box>
      <Hero title="Mov Produtora" backgroundImage="/public/background.jpeg" />
    </HomeLayout>
  )
}

export default HomePage
