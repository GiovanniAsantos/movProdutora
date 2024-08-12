import heroMovie from '@/assets/videos/business.mp4'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

type HeroProps = {}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <>
      <Box position="relative" width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center" overflow="hidden">
        <Box
          as="video"
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: -1
          }}>
          <source src={heroMovie} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </Box>
        <Box
          position="absolute"
          width="100vw"
          height="110px"
          bgColor="rgba(30, 30, 30, 0.066)"
          backdropFilter="blur(30px)"
          display="flex"
          alignItems="flex-end"
          justifyContent="center"></Box>

        <HStack maxW={'container.xl'} width={'100%'} zIndex={1}>
          <Flex gap={4} width={600} justifyContent="start" flexDirection={'column'}>
            <Text
              lineHeight={1.1}
              textShadow={'0px 0px 8px rgba(0, 0, 0, 0.5), 0px 0px 90px rgba(0, 0, 0, 0.5), 0px 0px 30px rgba(0, 0, 0, 0.5)'}
              fontWeight={600}
              letterSpacing={1}
              textColor={'white'}
              fontSize={'60px'}>
              Produzindo Filmes que Impulsionam Negócios
            </Text>
            <Box my={4} maxW={300}>
              <Text fontWeight={500} textColor={'gray.50'} lineHeight={1.2}>
                Conecte-se com seu público através de conteúdos visuais que transformam ideias em resultados
              </Text>
            </Box>
            <Button
              rightIcon={<MdOutlineArrowOutward />}
              width={200}
              height={12}
              rounded={'full'}
              colorScheme="blackAlpha"
              bg="black"
              color="white"
              _hover={{ bg: 'gray.900', transform: 'scale(1.05)' }}>
              Conheça mais
            </Button>
          </Flex>
        </HStack>
      </Box>
    </>
  )
}
