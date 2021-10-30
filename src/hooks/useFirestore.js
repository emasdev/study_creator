import React, { useState, useEffect } from 'react';
import firebase from '../firebase/config';
import {
  setDoc,
  doc,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { debugErrorMap } from '@firebase/auth';

export function useFirestore() {
  const db = firebase.db;
  const [doctores, setDoctores] = useState(null);
  const [estudios, setEstudios] = useState(null);

  const createDocument = (collectionName, docData) => {
    return addDoc(collection(db, collectionName), docData);
  };

  const readDocuments = async collectionName => {
    try {
      let data = [];
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        data.push({ id: doc.id, data: doc.data() });
        //console.log(doc.id, ' => ', doc.data());
      });

      switch (collectionName) {
        case 'estudios':
          setEstudios(data);
          break;

        case 'usuarios':
          setDoctores(data);
        default:
          break;
      }

      return data;
    } catch (error) {
      throw error;
    }
  };

  return {
    estudios,
    doctores,
    createDocument,
    readDocuments,
  };
}
