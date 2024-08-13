import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { ClientFeedback } from '@/components/Sections/ClientFeedback'
import { ContactForm } from '@/components/Sections/Contact'
import { useContactForm } from '@/hooks/useContactForm'
import { Box, HStack, Stack } from '@chakra-ui/react'
import React from 'react'

const HomePage: React.FC = () => {
  const { submitContactForm } = useContactForm()
  return (
    <Stack position={'relative'} gap={0}>
      <Box position={'absolute'} width={'100%'} zIndex={1000}>
        <Navbar hiddenLogo bgColor={'transparent'} />
      </Box>
      <Hero />
      <ClientFeedback />
      <HStack bgColor={'black'}>
        <ContactForm onSubmit={submitContactForm} />
      </HStack>
    </Stack>
  )
}

export default HomePage
