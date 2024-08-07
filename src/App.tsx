import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import HomePage from './pages/HomePage'
import customTheme from './theme/theme'
import { Global } from '@emotion/react'

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <HomePage />
    </ChakraProvider>
  )
}

export default App
