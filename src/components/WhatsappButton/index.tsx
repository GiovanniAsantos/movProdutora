import React from 'react'
import { Button, ButtonProps, Icon } from '@chakra-ui/react'
import { FaWhatsapp } from 'react-icons/fa'

interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber: string
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, ...props }) => {
  const handleClick = () => {
    const url = `https://wa.me/+55${phoneNumber}`
    window.open(url, '_blank')
  }

  return (
    <Button
      rounded={'full'}
      textTransform={'none'}
      onClick={handleClick}
      colorScheme="green"
      bg="green.400"
      color="white"
      paddingY={6}
      leftIcon={<Icon as={FaWhatsapp} boxSize="1.6em" />}
      {...props}>
      Entre em contato
    </Button>
  )
}

export default WhatsAppButton
