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

export function useFirestore() {
  const db = firebase.db;

  const createDocument = (collectionName, docData) => {
    return addDoc(doc(db, collectionName), docData);
  };

  const readDocuments = async collectionName => {
    try {
      let documents = [];
      const querySnapshot = await getDocs(collection(db, collectionName));
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        documents.push({ id: doc.id, data: doc.data() });
        //console.log(doc.id, ' => ', doc.data());
      });

      return documents;
    } catch (error) {
      throw error;
    }
  };

  return {
    createDocument,
    readDocuments,
  };
}
