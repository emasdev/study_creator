import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

import { useFirestore } from '../hooks/useFirestore';

export default function ListaEstudios() {
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
          <Tr>
            <Td>Paciente A</Td>
            <Td>Estudio B</Td>
            <Td>24-Oct-2021</Td>
          </Tr>
          <Tr>
            <Td>Paciente A.2</Td>
            <Td>Estudio B.2</Td>
            <Td>26-Oct-2021</Td>
          </Tr>
          <Tr>
            <Td>Paciente A.3</Td>
            <Td>Estudio B.3</Td>
            <Td>28-Nov-2021</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
}
