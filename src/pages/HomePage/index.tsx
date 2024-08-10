import React from 'react'
import { Hero } from '@/components/layouts/HomeLayout/Hero/Hero'
import { Navbar } from '@/components/layouts/HomeLayout/Navbar/Navbar'
import { Box, Stack } from '@chakra-ui/react'

const HomePage: React.FC = () => {
  return (
    <Stack position={'relative'}>
      <Box position={'absolute'} width={'100%'} zIndex={1000}>
        <Navbar hiddenLogo bgColor={'transparent'} />
      </Box>
      <Hero />
    </Stack>
  )
}

export default HomePage
