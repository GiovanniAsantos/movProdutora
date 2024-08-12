import { Button, ButtonProps, Icon } from '@chakra-ui/react'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber: string
  radius?: string
  px?: number
  py?: number
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, radius, ...props }) => {
  const handleClick = () => {
    const url = `https://wa.me/+55${phoneNumber}`
    window.open(url, '_blank')
  }

  return (
    <Button
      boxShadow={'xl'}
      rounded={radius || 'full'}
      textTransform={'none'}
      onClick={handleClick}
      colorScheme="green"
      bg="green.400"
      color="white"
      paddingY={7}
      paddingX={12}
      leftIcon={<Icon as={FaWhatsapp} boxSize="1.6em" />}
      {...props}>
      Envie uma mensagem
    </Button>
  )
}

export default WhatsAppButton
