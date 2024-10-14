import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import customTheme from './theme/theme'
import AppRoutes from './routes'

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AppRoutes />
    </ChakraProvider>
  )
}

export default App
