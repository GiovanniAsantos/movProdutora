import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import SectionClientFeedback from '@/sections/SectionClientFeedback'
import { Box, Stack } from '@chakra-ui/react'
import React from 'react'

const HomePage: React.FC = () => {
  return (
    <Stack position={'relative'} gap={0}>
      <Box position={'absolute'} width={'100%'} zIndex={1000}>
        <Navbar bgColor={'transparent'} />
      </Box>
      <Hero />
      <SectionClientFeedback />
    </Stack>
  )
}

export default HomePage
