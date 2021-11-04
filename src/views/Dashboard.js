import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Login from './Login';
import Header from '../components/Header';
import ListaEstudios from '../components/ListaEstudios';
import UploadEstudio from '../components/UploadEstudio';
import {
  Container,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import db from "../helpers/FirestoreService"

export default function Dashboard() {
  const auth = useAuth();
  const [estudios, setEstudios] = useState(null);

  useEffect(() => {

    const loadEstudios = async () => {
      try {
        const docs = await db.readDocuments("estudios");
        setEstudios(docs);
        console.log(docs);
      } catch (error) {
        alert(error.message);
      }
    }

    if (!estudios) {
      loadEstudios();
    }

  }, [estudios])

  return (
    <div>
      {auth.user ? (
        <Container>
          <Header />
          <Tabs isLazy>
            <TabList mb="1em">
              <Tab>Lista de estudios</Tab>
              <Tab>Subir estudio</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ListaEstudios estudios={estudios} />
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
