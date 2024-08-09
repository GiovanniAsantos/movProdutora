import { Box, Flex, HStack, Link, IconButton, useDisclosure, Container, Stack } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import logoMov from '@/assets/img/Logo.jpeg'
import { NavLinkRouter } from '@routes/routes.dto'
import { navLinks } from '@/routes/navLinks'

const NavLink = ({ children, href }: { href: string; children: React.ReactNode }) => (
  <Link
    px={2}
    py={1}
    color={'whiteAlpha.900'}
    textDecoration={'none'}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200',
      color: 'black'
    }}
    href={href}>
    {children}
  </Link>
)

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={'black'} px={4} overflow="hidden" position={'relative'}>
      <Flex paddingY={6} paddingX={0} alignItems={'center'} justifyContent={'center'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box left={8} position={'absolute'} maxW="180px" overflow="hidden">
          <img width="100%" height="auto" src={logoMov} alt="Logo" />
        </Box>
        <HStack justify={'center'} align={'center'} spacing={6} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map(link => (
            <NavLink href={link?.href} key={link?.name}>
              {link?.name}
            </NavLink>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}
