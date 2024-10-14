import { Box, HStack, Stack } from '@chakra-ui/react'
import React from 'react'
import { Hero } from '../../components/Hero'
import { Clients } from '../../components/Layouts/HomeLayout/Clients/Clients'
import { Contact } from '../../components/Layouts/HomeLayout/Contact/Contact'
import { SmallAbout } from '../../components/Layouts/HomeLayout/HomeAboutResume'
import { Portfolio } from '../../components/Layouts/HomeLayout/Portfolio/Portfolio'
import { Navbar } from '../../components/Navbar'
import { useContactForm } from '../../hooks/useContactForm'

const HomePage: React.FC = () => {
  const { submitContactForm } = useContactForm()
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
