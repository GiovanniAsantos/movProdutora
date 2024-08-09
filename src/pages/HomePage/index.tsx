import React from 'react'
import MovLayout from '@/components/layouts/MovLayout'
import bgHero from '@/assets/img/background.jpeg'
import { Hero } from '@/components/layouts/HomeLayout/Hero/Hero'
import { Navbar } from '@/components/layouts/HomeLayout/Navbar/Navbar'
import { Box } from '@chakra-ui/react'

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero title="Mov Produtora" backgroundImage={bgHero} />
    </>
  )
}

export default HomePage
