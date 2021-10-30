import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

import { useFirestore } from '../hooks/useFirestore';

export default function ListaEstudios() {
  const db = useFirestore();
  const estudios = db.estudios;

  useEffect(() => {
    if (!estudios) {
      db.readDocuments('estudios').then(documents => {
        console.log('estudios cargados');
      });
    }
    return () => {};
  }, []);
  return (
    <>
      <Text fontWeight="bold" mb={4}>
        Lista de estudios
      </Text>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Paciente</Th>
            <Th>Estudio</Th>
            <Th>Fecha</Th>
          </Tr>
        </Thead>
        <Tbody>
          {estudios &&
            estudios.map(doc => {
              const estudio = doc.data;
              return (
                <Tr key={doc.id}>
                  <Td>{estudio.nombre}</Td>
                  <Td>{estudio.doctor}</Td>
                  <Td>{new Date(estudio.fecha).toString()}</Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </>
  );
}
