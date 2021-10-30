import React from 'react';
import { Button, Text, Flex } from '@chakra-ui/react';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
  const auth = useAuth();

  const handleLogout = e => {
    auth.signout();
  };

  return (
    <Flex justifyContent="center">
      <Text mr={4}>Estas loggeado como: {auth.user.email}</Text>
      <Button onClick={handleLogout}>Salir</Button>
    </Flex>
  );
}
