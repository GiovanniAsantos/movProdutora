import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react'
import "./HomePage.css"
import React from 'react'
import HomeLayout from '../../components/layouts/HomeLayout'
import { Navbar } from '../../components/layouts/HomeLayout/Navbar/Navbar'
import { Hero } from '../../components/layouts/HomeLayout/Hero/Hero'

const HomePage: React.FC = () => {
  return (
    <HomeLayout >
      <Navbar />
      <Hero
        title="Mov Produtora"
        backgroundImage="/public/background.jpeg"
      />
    </HomeLayout>
  )
}

export default HomePage
