import { Box, Flex, HStack, Link, IconButton, useDisclosure, Spacer } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Home", "About", "Contact", "Clients", "Events"];

const NavLink = ({ children }: { children: React.ReactNode }) => (
  <Link
    px={2}
    py={1}
    color={"white"}
    textDecoration={"none"}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "gray.200",
      color:"black"
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={"rgb(18, 18, 18)"} px={16} width="1519px">
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={32} alignItems={"center"}>
          <Box><img style={{width:"150px"}} src="/Logo.jpeg" alt="" /></Box>
          <Spacer />
          <HStack
            as={"nav"}
            spacing={32}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};


