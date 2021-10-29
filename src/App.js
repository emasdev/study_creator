import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import SimpleSidebar from './components/SimpleSidebar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <SimpleSidebar />
    </ChakraProvider>
  );
}

export default App;
