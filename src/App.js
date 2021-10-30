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
import { ProvideAuth } from './hooks/useAuth';
import Main from './components/Main';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ProvideAuth>
        <Main />
      </ProvideAuth>
    </ChakraProvider>
  );
}

export default App;
