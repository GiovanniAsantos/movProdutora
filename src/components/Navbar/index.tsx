import logoWhite from '@/assets/img/logo-white.png'
import { navLinks } from '@/routes/navLinks'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, BoxProps, Flex, HStack, IconButton, Link, Spacer, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import WhatsAppButton from '../WhatsappButton'

const NavLink = ({ children, href }: { href: string; children: React.ReactNode }) => (
  <Link
    px={2}
    py={1}
    color={'gray.50'}
    textDecoration={'none'}
    rounded={'full'}
    fontWeight={500}
    fontSize={'md'}
    letterSpacing={1}
    _hover={{
      bgColor: 'rgba(144, 144, 144, 0.117)',
      backdropFilter: 'blur(100px)'
    }}
    href={href}>
    {children}
  </Link>
)

interface NavbarProps extends BoxProps {
  hiddenLogo?: boolean
}

export const Navbar: React.FC<NavbarProps> = ({ hiddenLogo = false, ...props }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={'black'} px={4} overflow="hidden" {...props}>
      <Flex paddingY={4} paddingX={0} alignItems="center">
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box display="flex" justifyContent="center">
          {hiddenLogo ? null : <img width="140px" height="auto" src={logoWhite} alt="Logo" style={{ maxWidth: '180px' }} />}
        </Box>
        <HStack mx={4} spacing={2} display={{ base: 'none', md: 'flex' }} justifyContent="center">
          {navLinks.map(link => (
            <NavLink href={link?.href} key={link?.name}>
              {link?.name}
            </NavLink>
          ))}
        </HStack>
        <Spacer />
        <WhatsAppButton paddingX={4} paddingY={1} fontSize={'sm'} phoneNumber="85999999999" />
      </Flex>
    </Box>
  )
}
