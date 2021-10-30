import React from 'react';
import { FormControl, FormLabel, Input, Select } from '@chakra-ui/react';

export default function UploadEstudio() {
  return (
    <form>
      <FormControl id="estudio">
        <FormLabel>Subir estudio</FormLabel>
        <Input type="file" />
      </FormControl>
      <FormControl>
        <FormLabel>Seleccionar Doctor</FormLabel>
        <Select placeholder="Seleccionar Doctor">
          <option value="doctor1">Doctor 1</option>
          <option value="doctor2">Doctor 2</option>
          <option value="doctor3">Doctor 3</option>
        </Select>
      </FormControl>
    </form>
  );
}
