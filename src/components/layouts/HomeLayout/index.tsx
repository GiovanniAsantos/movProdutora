import { Container } from "@chakra-ui/react";
import React from "react";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <Container centerContent maxW="container.xl">
      {children}
    </Container>
  );
};

export default HomeLayout;
