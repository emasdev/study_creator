import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './Login';
import Header from '../components/Header';
import ListaEstudios from '../components/ListaEstudios';
import UploadEstudio from '../components/UploadEstudio';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';

export default function Dashboard() {
  const auth = useAuth();

  return (
    <div>
      {auth.user ? (
        <Container>
          <Header />
          <Tabs>
            <TabList mb="1em">
              <Tab>Lista de estudios</Tab>
              <Tab>Subir estudio</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ListaEstudios />
              </TabPanel>
              <TabPanel>
                <UploadEstudio />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      ) : (
        <Login />
      )}
    </div>
  );
}
