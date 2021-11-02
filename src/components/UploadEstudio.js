import React, { useState, useEffect } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import { useFirestore } from '../hooks/useFirestore';
import { useForm } from 'react-hook-form';

export default function UploadEstudio() {
  const db = useFirestore();
  const doctores = db.doctores;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const onSubmit = async data => {

    const doctorDoc = JSON.parse(data.doctor);
    const doctor = doctorDoc.doctorData;
    const nombre_doctor = `${doctor.nombre} ${doctor.apellido_paterno} ${doctor.apellido_materno}`;

    const estudioDocData = {
      nombre_estudio: data.nombre_estudio,
      nombre_doctor: nombre_doctor,
      nombre_estudio: data.nombre_estudio,
      doctorId: doctorDoc.doctorId,
      fecha: Date.now(),
    };

    const doc = await db.createDocument('estudios', estudioDocData);
    console.log(doc);
  };
  console.log(errors);

  useEffect(() => {
    if (!doctores) {
      db.readDocuments('usuarios').then(documents => {
        console.log('doctores cargados');
      });
    }

    return () => { };
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isSubmitSuccessful && (
        <Alert status="success">
          <AlertIcon />
          Se subio el estudio con éxito
        </Alert>
      )}
      <FormControl>
        <FormLabel>Estudio</FormLabel>
        <Input
          type="text"
          placeholder="Nombre de estudio"
          {...register('nombre_estudio', { required: true })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Nombre de paciente</FormLabel>
        <Input
          type="text"
          placeholder="Nombre de paciente"
          {...register('nombre_paciente', { required: true })}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Subir estudio</FormLabel>
        <Input type="file" {...register('file', { required: true })} />
      </FormControl>
      <FormControl>
        <FormLabel>Seleccionar Doctor</FormLabel>
        <Select
          placeholder="Seleccionar Doctor"
          {...register('doctor', { required: true })}
        >
          {doctores &&
            doctores.map(doc => {
              const doctor = doc.data;
              const nombre = `${doctor.nombre} ${doctor.apellido_paterno} ${doctor.apellido_materno}`;
              const value = {
                doctorId: doc.id,
                doctorData: doctor
              }
              const valueJSON = JSON.stringify(value);
              return (
                <option value={valueJSON} key={doc.id}>
                  {nombre}
                </option>
              );
            })}
        </Select>
      </FormControl>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Subir estudio
      </Button>
    </form>
  );
}
