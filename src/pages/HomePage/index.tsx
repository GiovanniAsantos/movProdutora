import React from 'react'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Box, Stack } from '@chakra-ui/react'
import SectionClientFeedback from '@/sections/SectionClientFeedback'

const HomePage: React.FC = () => {
  return (
    <Stack position={'relative'} gap={0}>
      <Box position={'absolute'} width={'100%'} zIndex={1000}>
        <Navbar hiddenLogo bgColor={'transparent'} />
      </Box>
      <Hero />
      <SectionClientFeedback />
    </Stack>
  )
}

export default HomePage
