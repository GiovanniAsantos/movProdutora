import WhatsAppButton from '@/components/WhatsappButton'
import { navLinks } from '@/routes/navLinks'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, HStack, IconButton, Link, useDisclosure } from '@chakra-ui/react'

const NavLink = ({ children, href }: { href: string; children: React.ReactNode }) => (
  <Link
    px={8}
    py={1}
    color={'gray.50'}
    textDecoration={'none'}
    rounded={'full'}
    fontWeight={600}
    _hover={{
      bgColor: 'rgba(144, 144, 144, 0.117)',
      backdropFilter: 'blur(100px)'
    }}
    href={href}>
    {children}
  </Link>
)

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box bg={'transparent'} px={4} overflow="hidden" position={'relative'}>
      <Flex paddingY={6} paddingX={0} alignItems={'center'} justifyContent={'center'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        {/* <Box left={8} position={'absolute'} maxW="180px" overflow="hidden">
          <img width="100%" height="auto" src={logoMov} alt="Logo" />
        </Box> */}
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
