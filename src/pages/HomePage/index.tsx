import React from 'react'
import { Hero } from '@/components/layouts/HomeLayout/Hero/Hero'
import { Navbar } from '@/components/layouts/HomeLayout/Navbar/Navbar'
import { Box, Stack } from '@chakra-ui/react'
import { SmallAbout } from '@/components/layouts/HomeLayout/HomeAboutResume'
import { Portfolio } from '@/components/layouts/HomeLayout/Portfolio/Portfolio'
import { Contact } from '@/components/layouts/HomeLayout/Contact/Contact'
import { Clients } from '@/components/layouts/HomeLayout/Clients/Clients'

const HomePage: React.FC = () => {
  return (
    <Box backgroundColor={'#171717'} zIndex={-1}>
      <Stack position={'relative'}>
        <Box position={'absolute'} width={'100%'} zIndex={1000}>
          <Navbar hiddenLogo bgColor={'transparent'} />
        </Box>
        <Hero />
        <SmallAbout />
        <Portfolio />
        <Contact />
        <Clients />
      </Stack>
    </Box>
  )
}

export default HomePage
